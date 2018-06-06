import fs from 'fs'
import { join } from 'path'
import { promisify } from 'util'

const INDEX = 'index.js'

const mkdir = promisify(fs.mkdir)
const open = promisify(fs.open)
const close = promisify(fs.close)
const touch = file => () => {
  return open(file, fs.constants.O_CREAT)
    .then(close)
}

export default function Generator ({ basedir }) {
  return {
    createNamespace (name) {
      const dir = join(basedir, name)
      const index = join(dir, INDEX)
      return mkdir(dir)
        .then(touch(index))
        .catch(err => console.error(err))
    }
  }
}
