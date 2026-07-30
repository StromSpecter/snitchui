#!/usr/bin/env node

import fs from 'node:fs'
import path from 'node:path'
import { execSync } from 'node:child_process'
import { getComponent, getTemplate, components, templates } from './templates.js'

const RESET = '\x1b[0m'
const CYAN = '\x1b[36m'
const GREEN = '\x1b[32m'
const YELLOW = '\x1b[33m'
const RED = '\x1b[31m'

function log(...args) {
  console.log(...args)
}

function findProjectRoot() {
  let dir = process.cwd()
  while (dir !== path.parse(dir).root) {
    if (fs.existsSync(path.join(dir, 'package.json'))) return dir
    dir = path.dirname(dir)
  }
  return process.cwd()
}

function ensureDir(filePath) {
  const dir = path.dirname(filePath)
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })
}

function writeFile(filePath, content) {
  ensureDir(filePath)
  fs.writeFileSync(filePath, content.trimStart() + '\n')
}

function installDeps(deps, projectRoot) {
  if (deps.length === 0) return
  const existing = getInstalledPackages(projectRoot)
  const needed = deps.filter((d) => {
    const name = d.split('@')[0]
    return !existing.includes(name)
  })
  if (needed.length === 0) return

  log(`\n${YELLOW}Installing dependencies...${RESET}`)
  execSync(`npm install ${needed.join(' ')}`, {
    cwd: projectRoot,
    stdio: 'inherit',
  })
}

function getInstalledPackages(projectRoot) {
  try {
    const pkgPath = path.join(projectRoot, 'package.json')
    const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'))
    return [
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.devDependencies || {}),
    ]
  } catch {
    return []
  }
}

function fileExists(filePath) {
  return fs.existsSync(filePath)
}

export async function add(name, options = {}) {
  const comp = getComponent(name)
  if (!comp) {
    log(`\n${RED}Unknown component: ${name}${RESET}`)
    const available = Object.keys(components).join(', ')
    log(`Available: ${available}`)
    return
  }

  const projectRoot = options.cwd || findProjectRoot()
  const srcDir = path.join(projectRoot, 'src')

  if (!fs.existsSync(srcDir)) {
    log(`\n${RED}No src/ directory found in ${projectRoot}${RESET}`)
    log('Make sure you are in a React + Vite project.')
    return
  }

  log(`\n${CYAN}▸ Installing ${comp.name} component...${RESET}`)

  // Install deps
  if (!options.skipInstall) {
    installDeps(comp.deps, projectRoot)
  }

  // Write component files
  for (const file of comp.files) {
    const dest = path.join(srcDir, file.path)
    const relative = path.relative(projectRoot, dest)

    if (fileExists(dest) && !options.force) {
      log(`  ${YELLOW}⚠ Skipping ${relative} (already exists)${RESET}`)
      continue
    }

    writeFile(dest, file.content)
    log(`  ${GREEN}✓ Created ${relative}${RESET}`)
  }

  // Write utils if needed
  if (comp.utils) {
    const dest = path.join(srcDir, comp.utils.path)
    const relative = path.relative(projectRoot, dest)

    if (!fileExists(dest) || options.force) {
      writeFile(dest, comp.utils.content)
      log(`  ${GREEN}✓ Created ${relative}${RESET}`)
    }
  }

  // Write index.js barrel file for IDE auto-import
  const indexDest = path.join(srcDir, `components/ui/${name}/index.js`)
  const indexRelative = path.relative(projectRoot, indexDest)
  const namedExport = capitalize(name)

  // Collect all named exports from component files
  const exportNames = [namedExport]
  if (name === 'button') exportNames.push('buttonVariants')
  if (name === 'badge') exportNames.push('badgeVariants')

  if (!fileExists(indexDest) || options.force) {
    const exportList = exportNames.join(', ')
    const indexContent = `export { ${exportList} } from './${name}.jsx'\n`
    writeFile(indexDest, indexContent)
    log(`  ${GREEN}✓ Created ${indexRelative}${RESET}`)
  }

  log(`\n${GREEN}Done! Import it:${RESET}`)
  log(`  import { ${namedExport} } from './components/ui/${name}'`)
}

export async function addTemplate(name, options = {}) {
  const tmpl = getTemplate(name)
  if (!tmpl) {
    log(`\n${RED}Unknown template: ${name}${RESET}`)
    const available = Object.keys(templates).join(', ')
    log(`Available: ${available}`)
    return
  }

  const projectRoot = options.cwd || findProjectRoot()
  const srcDir = path.join(projectRoot, 'src')
  const capitalizeName = name.charAt(0).toUpperCase() + name.slice(1)

  if (!fs.existsSync(srcDir)) {
    log(`\n${RED}No src/ directory found in ${projectRoot}${RESET}`)
    log('Make sure you are in a React + Vite project.')
    return
  }

  log(`\n${CYAN}▸ Installing ${tmpl.name} template...${RESET}`)

  // Install deps
  if (!options.skipInstall) {
    installDeps(tmpl.deps, projectRoot)
  }

  // Write template files
  for (const file of tmpl.files) {
    const dest = path.join(srcDir, file.path)
    const relative = path.relative(projectRoot, dest)

    if (fileExists(dest) && !options.force) {
      log(`  ${YELLOW}⚠ Skipping ${relative} (already exists)${RESET}`)
      continue
    }

    writeFile(dest, file.content)
    log(`  ${GREEN}✓ Created ${relative}${RESET}`)
  }

  // Update App.jsx with new route
  const appPath = path.join(srcDir, 'App.jsx')
  if (fileExists(appPath)) {
    updateAppJsx(appPath, name, capitalizeName, options.force)
  }

  // Update Sidebar.jsx with new nav entry
  const sidebarPath = path.join(srcDir, 'components', 'layout', 'Sidebar.jsx')
  if (fileExists(sidebarPath)) {
    updateSidebar(sidebarPath, name, capitalizeName, options.force)
  }

  log(`\n${GREEN}Done!${RESET}`)
}

function updateAppJsx(appPath, name, capitalizeName, force) {
  const content = fs.readFileSync(appPath, 'utf-8')
  const importLine = `import { ${capitalizeName}Page } from './pages/${capitalizeName}Page.jsx'`
  const routeLine = `        <Route path="docs/${name}" element={<${capitalizeName}Page />} />`

  if (content.includes(importLine)) {
    return
  }

  // Insert import before ComponentPage import
  const newContent = content.replace(
    /(import \{ ComponentPage \} from '.\/pages\/ComponentPage\.jsx')/,
    `${importLine}\n$1`
  )

  // Insert route before the dynamic :id route
  const finalContent = newContent.replace(
    /(        <Route path="docs\/:id" element=\{<ComponentPage \/\} \/>)/,
    `${routeLine}\n$1`
  )

  if (finalContent !== content) {
    fs.writeFileSync(appPath, finalContent)
    log(`  ${GREEN}✓ Updated App.jsx${RESET}`)
  }
}

function updateSidebar(sidebarPath, name, capitalizeName, force) {
  const content = fs.readFileSync(sidebarPath, 'utf-8')
  const pathLower = name.toLowerCase()
  const navEntry = `                <NavLink
                  to="/docs/${pathLower}"
                  onClick={onClose}
                  className={({ isActive }) =>
                    cn(
                      'group flex w-full items-center gap-2.5 rounded-md px-3 py-1.5 text-sm transition-colors',
                      isActive
                        ? 'bg-accent text-accent-foreground font-medium'
                        : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                    )
                  }
                >
                  <div className="flex size-6 shrink-0 items-center justify-center rounded border border-border/50 bg-muted/50">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="10 9 12 11 14 9"></polyline></svg>
                  </div>
                  <span>${capitalizeName}</span>
                </NavLink>`

  if (content.includes(`to="/docs/${pathLower}"`)) {
    return
  }

  const newContent = content.replace(
    /(              <\/div>\s+<\/div>\s+<\/CollapsibleSection>)/,
    `              ${navEntry}\n            </div>\n          </CollapsibleSection>`
  )

  if (newContent !== content) {
    fs.writeFileSync(sidebarPath, newContent)
    log(`  ${GREEN}✓ Updated Sidebar.jsx${RESET}`)
  }
}

function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1)
}

// CLI main
const args = process.argv.slice(2)
const command = args[0]
const compName = args[1]
const force = args.includes('--force')
const skipInstall = args.includes('--skip-install')

if (command === 'add' && compName) {
  add(compName, { force, skipInstall })
} else if (command === 'add-template' && compName) {
  addTemplate(compName, { force, skipInstall })
} else {
  log(`\n${CYAN}snitchui CLI${RESET}`)
  log(`\nUsage:`)
  log(`  npx snitchui add <component> [options]`)
  log(`  npx snitchui add-template <template> [options]`)
  log(`\nOptions:`)
  log(`  --force         Overwrite existing files`)
  log(`  --skip-install  Skip npm install`)
  log(`\nExamples:`)
  log(`  npx snitchui add button`)
  log(`  npx snitchui add button --force`)
  log(`  npx snitchui add-template signin`)
  log(`  npx snitchui add-template signup`)
}
