#!/usr/bin/env node

import('../cli/index.js').catch((e) => {
  console.error(e)
  process.exit(1)
})