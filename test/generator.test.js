import assert from 'assert'
import fs from 'fs'
import os from 'os'
import { join } from 'path'
import rimraf from 'rimraf'
import generator from '../src/generator.js'

const PREFIX = 'nsmantest'
const TEMP_DIR = join(os.tmpdir(), PREFIX)

describe('nsman generator', () => {
  const nsName = 'math'
  const tmp = fs.mkdtempSync(TEMP_DIR)
  const basedir = join(tmp, 'src')

  describe('createNamespace', () => {
    it(`should create ${nsName} directory in ${basedir}`, () => {
      const { createNamespace } = generator({ basedir })
      createNamespace({ name: nsName })
      assert.doesNotThrow(fs.accessSync(join(basedir, nsName)))
    })

    it(`${nsName} should contain index.js`, () => {
      assert.doesNotThrow(fs.accessSync(join(basedir, nsName, 'index.js')))
    })
  })

  after(() => {
    rimraf(basedir, () => {})
  })
})
