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

  if (!fs.existsSync(srcDir)) {
    log(`\n${RED}No src/ directory found in ${projectRoot}${RESET}`)
    log('Make sure you are in a React + Vite project.')
    return
  }

  log(`\n${CYAN}▸ Installing ${tmpl.name} template...${RESET}`)

  // Install npm deps
  if (!options.skipInstall) {
    installDeps(tmpl.deps, projectRoot)
  }

  // Install missing UI component deps
  if (tmpl.uiDeps && tmpl.uiDeps.length > 0) {
    for (const uiComp of tmpl.uiDeps) {
      const compPath = path.join(srcDir, 'components', 'ui', uiComp, `${uiComp}.jsx`)
      if (!fileExists(compPath)) {
        log(`  ${YELLOW}Installing required component: ${uiComp}${RESET}`)
        await add(uiComp, { ...options, cwd: projectRoot })
      }
    }
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

  // Write barrel index.js for IDE auto-import
  const templateDir = path.join(srcDir, 'components', 'templates')
  const indexDest = path.join(templateDir, 'index.js')
  const exportName = `${capitalize(name)}Form`
  const exportLine = `export { ${exportName} } from './${exportName}'\n`

  if (!fileExists(indexDest)) {
    writeFile(indexDest, exportLine)
    log(`  ${GREEN}✓ Created components/templates/index.js${RESET}`)
  } else {
    const existing = fs.readFileSync(indexDest, 'utf-8')
    if (!existing.includes(exportName)) {
      fs.appendFileSync(indexDest, exportLine)
      log(`  ${GREEN}✓ Updated components/templates/index.js${RESET}`)
    }
  }

  log(`\n${GREEN}Done! Import it:${RESET}`)
  log(`  import { ${exportName} } from './components/templates'`)
}

function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1)
}

// CLI main
const args = process.argv.slice(2)
const command = args[0]
const force = args.includes('--force')
const skipInstall = args.includes('--skip-install')

const names = args.slice(1).filter((a) => !a.startsWith('--'))

;(async () => {
  if (command === 'add' && names.length) {
    for (const name of names) {
      await add(name, { force, skipInstall })
    }
  } else if (command === 'add-template' && names.length) {
    for (const name of names) {
      await addTemplate(name, { force, skipInstall })
    }
  } else {
    log(`\n${CYAN}snitchui CLI${RESET}`)
    log(`\nUsage:`)
    log(`  npx snitchui add <component...> [options]`)
    log(`  npx snitchui add-template <template...> [options]`)
    log(`\nOptions:`)
    log(`  --force         Overwrite existing files`)
    log(`  --skip-install  Skip npm install`)
    log(`\nExamples:`)
    log(`  npx snitchui add button input select card`)
    log(`  npx snitchui add button --force`)
    log(`  npx snitchui add-template signin`)
    log(`  npx snitchui add-template signup`)
  }
})()
