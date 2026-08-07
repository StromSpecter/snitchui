#!/usr/bin/env node

import fs from 'node:fs'
import path from 'node:path'
import { execSync } from 'node:child_process'
import { getComponent, getTemplate, components, templates } from './templates.js'
import {
  resolveLang,
  componentExt,
  indexExt,
  toUtilsSource,
  toFiles,
} from './tsx.js'

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
  const lang = resolveLang(projectRoot, options)
  const jsxExt = componentExt(lang)
  const jsExt = indexExt(lang)
  const rel = lang === 'ts' ? '' : '.jsx'

  if (!fs.existsSync(srcDir)) {
    log(`\n${RED}No src/ directory found in ${projectRoot}${RESET}`)
    log('Make sure you are in a React + Vite project.')
    return
  }

  log(`\n${CYAN}▸ Installing ${comp.name} component (${lang === 'ts' ? 'TypeScript' : 'JavaScript'})...${RESET}`)

  // Install deps
  if (!options.skipInstall) {
    installDeps(comp.deps, projectRoot)
  }

  // Write component files
  for (const file of toFiles(comp.files, name, lang)) {
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
    const dest = path.join(
      srcDir,
      lang === 'ts' ? comp.utils.path.replace(/\.js$/, '.ts') : comp.utils.path
    )
    const relative = path.relative(projectRoot, dest)

    if (!fileExists(dest) || options.force) {
      writeFile(dest, toUtilsSource(comp.utils.content, lang))
      log(`  ${GREEN}✓ Created ${relative}${RESET}`)
    }
  }

  // Auto-install required sibling components
  if (comp.requires && comp.requires.length > 0) {
    for (const req of comp.requires) {
      const reqPath = path.join(srcDir, 'components', 'ui', req, `${req}.${jsxExt}`)
      if (!fileExists(reqPath)) {
        log(`  ${YELLOW}Installing required component: ${req}${RESET}`)
        await add(req, { ...options, cwd: projectRoot })
      }
    }
  }

  // Write index barrel file for IDE auto-import
  const indexDest = path.join(srcDir, `components/ui/${name}/index.${jsExt}`)
  const indexRelative = path.relative(projectRoot, indexDest)
  const namedExport = capitalize(name)

  // Collect all named exports from component files
  const exportNames = [namedExport]
  if (name === 'button') exportNames.push('buttonVariants')
  if (name === 'badge') exportNames.push('badgeVariants')
  if (name === 'card') exportNames.push('CardHeader', 'CardFooter', 'CardTitle', 'CardDescription', 'CardContent')
  if (name === 'select') exportNames.push('SelectGroup', 'SelectValue', 'SelectTrigger', 'SelectContent', 'SelectItem', 'SelectLabel', 'SelectSeparator')
  if (name === 'tabs') exportNames.push('TabsList', 'TabsTrigger', 'TabsContent')
  if (name === 'accordion') exportNames.push('AccordionItem', 'AccordionTrigger', 'AccordionContent')
  if (name === 'dialog') exportNames.push('DialogTrigger', 'DialogClose', 'DialogContent', 'DialogHeader', 'DialogFooter', 'DialogTitle', 'DialogDescription')
  if (name === 'dropdown') exportNames.push('DropdownTrigger', 'DropdownContent', 'DropdownItem', 'DropdownSeparator', 'DropdownLabel')
  if (name === 'avatar') exportNames.push('AvatarImage', 'AvatarFallback')
  if (name === 'alert') exportNames.push('AlertTitle', 'AlertDescription')
  if (name === 'radiobutton') exportNames.splice(0, 1, 'RadioButtonGroup', 'RadioButtonItem', 'RadioButtonLabel')
  if (name === 'combobox') exportNames.push('ComboboxItem')
  if (name === 'tooltip') exportNames.push('TooltipTrigger', 'TooltipContent', 'TooltipProvider')
  if (name === 'popover') exportNames.push('PopoverTrigger', 'PopoverContent', 'PopoverAnchor')
  if (name === 'toast') exportNames.splice(0, 1, 'Toaster')
  if (name === 'sheet') exportNames.push('SheetTrigger', 'SheetClose', 'SheetContent', 'SheetHeader', 'SheetFooter', 'SheetTitle', 'SheetDescription')
  if (name === 'command') exportNames.push('CommandInput', 'CommandList', 'CommandEmpty', 'CommandGroup', 'CommandItem', 'CommandShortcut', 'CommandSeparator')
  if (name === 'pagination') exportNames.push('PaginationContent', 'PaginationItem', 'PaginationLink', 'PaginationEllipsis', 'paginationLinkVariants', 'paginate')
  if (name === 'table') exportNames.splice(0, 1, 'Table', 'TableHeader', 'TableBody', 'TableFooter', 'TableRow', 'TableHead', 'TableCell', 'TableCaption', 'DataTable')


  if (!fileExists(indexDest) || options.force) {
    let indexContent
    if (name === 'table') {
      indexContent =
        `export {\n  Table,\n  TableHeader,\n  TableBody,\n  TableFooter,\n  TableRow,\n  TableHead,\n  TableCell,\n  TableCaption,\n} from './table${rel}'\n` +
        `export { DataTable } from './data-table${rel}'\n`
    } else if (name === 'chart') {
      indexContent =
        `export { ChartContainer, ChartLegend } from './chart${rel}'\n` +
        `export { BarChart } from './bar-chart${rel}'\n` +
        `export { LineChart, AreaChart } from './line-chart${rel}'\n` +
        `export { PieChart } from './pie-chart${rel}'\n` +
        `export { RadarChart } from './radar-chart${rel}'\n` +
        `export { RadialChart } from './radial-chart${rel}'\n` +
        `export { ScatterChart } from './scatter-chart${rel}'\n`
    } else if (name === 'datepicker') {
      indexContent = `export { DatePicker } from './datepicker${rel}'\n`
    } else if (name === 'toast') {
      indexContent = `export { Toaster } from './toaster${rel}'\n`
    } else {
      const exportList = exportNames.join(', ')
      indexContent = `export { ${exportList} } from './${name}${rel}'\n`
    }
    writeFile(indexDest, indexContent)
    log(`  ${GREEN}✓ Created ${indexRelative}${RESET}`)
  }

  // Append chart color tokens to index.css
  if (name === 'chart') {
    const cssPath = path.join(projectRoot, 'src', 'index.css')
    if (fileExists(cssPath)) {
      const css = fs.readFileSync(cssPath, 'utf8')
      if (!css.includes('--color-chart-1')) {
        const tokens = `
/* snitchui:chart color tokens */
@theme {
  --color-chart-1: #2563eb;
  --color-chart-2: #16a34a;
  --color-chart-3: #d97706;
  --color-chart-4: #db2777;
  --color-chart-5: #7c3aed;
}

.dark {
  --color-chart-1: #60a5fa;
  --color-chart-2: #4ade80;
  --color-chart-3: #fbbf24;
  --color-chart-4: #f472b6;
  --color-chart-5: #a78bfa;
}

/* snitchui:chart animations */
@keyframes chart-tooltip-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes chart-bar-grow {
  from { transform: scaleY(0); }
  to { transform: scaleY(1); }
}

@keyframes chart-draw {
  to { stroke-dashoffset: 0; }
}

.chart-tooltip {
  animation: chart-tooltip-in 0.15s ease-out;
}

.chart-bar {
  transform-box: fill-box;
  transform-origin: bottom;
  animation: chart-bar-grow 0.5s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.chart-line {
  stroke-dasharray: 1;
  stroke-dashoffset: 1;
  animation: chart-draw 0.9s ease-out forwards;
}
`
        fs.appendFileSync(cssPath, tokens)
        log(`  ${GREEN}✓ Added chart tokens to src/index.css${RESET}`)
      }
    }
  }

  log(`\n${GREEN}Done! Import it:${RESET}`)
  log(
    name === 'chart'
      ? `  import { ChartContainer, BarChart } from './components/ui/chart'`
      : `  import { ${namedExport} } from './components/ui/${name}'`
  )
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
  const lang = resolveLang(projectRoot, options)
  const jsxExt = componentExt(lang)
  const jsExt = indexExt(lang)

  if (!fs.existsSync(srcDir)) {
    log(`\n${RED}No src/ directory found in ${projectRoot}${RESET}`)
    log('Make sure you are in a React + Vite project.')
    return
  }

  log(`\n${CYAN}▸ Installing ${tmpl.name} template (${lang === 'ts' ? 'TypeScript' : 'JavaScript'})...${RESET}`)

  // Install npm deps
  if (!options.skipInstall) {
    installDeps(tmpl.deps, projectRoot)
  }

  // Install missing UI component deps
  if (tmpl.uiDeps && tmpl.uiDeps.length > 0) {
    for (const uiComp of tmpl.uiDeps) {
      const compPath = path.join(srcDir, 'components', 'ui', uiComp, `${uiComp}.${jsxExt}`)
      if (!fileExists(compPath)) {
        log(`  ${YELLOW}Installing required component: ${uiComp}${RESET}`)
        await add(uiComp, { ...options, cwd: projectRoot })
      }
    }
  }

  // Write template files
  for (const file of toFiles(tmpl.files, name, lang)) {
    const dest = path.join(srcDir, file.path)
    const relative = path.relative(projectRoot, dest)

    if (fileExists(dest) && !options.force) {
      log(`  ${YELLOW}⚠ Skipping ${relative} (already exists)${RESET}`)
      continue
    }

    writeFile(dest, file.content)
    log(`  ${GREEN}✓ Created ${relative}${RESET}`)
  }

  // Write barrel index for IDE auto-import
  const templateDir = path.join(srcDir, 'components', 'templates')
  const indexDest = path.join(templateDir, `index.${jsExt}`)
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
const typescript = args.includes('--typescript') || args.includes('--ts')
const javascript = args.includes('--javascript') || args.includes('--js')

const names = args.slice(1).filter((a) => !a.startsWith('--'))

;(async () => {
  if (command === 'add' && names.length) {
    for (const name of names) {
      await add(name, { force, skipInstall, typescript, javascript })
    }
  } else if (command === 'add-template' && names.length) {
    for (const name of names) {
      await addTemplate(name, { force, skipInstall, typescript, javascript })
    }
  } else {
    log(`\n${CYAN}snitchui CLI${RESET}`)
    log(`\nUsage:`)
    log(`  npx snitchui add <component...> [options]`)
    log(`  npx snitchui add-template <template...> [options]`)
    log(`\nOptions:`)
    log(`  --force         Overwrite existing files`)
    log(`  --skip-install  Skip npm install`)
    log(`  --ts | --typescript     Emit TypeScript (.tsx/.ts) files`)
    log(`  --js | --javascript     Emit JavaScript (.jsx/.js) files`)
    log(`\nLanguage is auto-detected: a tsconfig.json, a "typescript" dep or`)
    log(`any .ts/.tsx source switches to TypeScript. Flags override detection.`)
    log(`\nExamples:`)
    log(`  npx snitchui add button input select card`)
    log(`  npx snitchui add button --force`)
    log(`  npx snitchui add button --ts`)
    log(`  npx snitchui add-template signin`)
    log(`  npx snitchui add-template signup`)
  }
})()
