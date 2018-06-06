import assert from 'assert'
import fs from 'fs'
import os from 'os'
import { join } from 'path'
import rimraf from 'rimraf'
import Generator from '../src/Generator.js'

const PREFIX = 'nsmantest'
const TEMP_DIR = join(os.tmpdir(), PREFIX)

describe('nsman generator', () => {
  const nsName = 'math'
  const basedir = fs.mkdtempSync(TEMP_DIR)

  describe('createNamespace', () => {
    const { createNamespace } = Generator({ basedir })
    const result = createNamespace(nsName)

    it(`should create ${nsName} directory in ${basedir}`, (done) => {
      result.then(() => {
        assert.doesNotThrow(() => {
          fs.accessSync(join(basedir, nsName))
        })
        done()
      })
    })

    it(`${nsName} should contain index.js`, (done) => {
      result.then(() => {
        assert.doesNotThrow(() => {
          fs.accessSync(join(basedir, nsName, 'index.js'))
        })
        done()
      })
    })
  })
  after(() => {
    rimraf(basedir, () => {})
  })
})
