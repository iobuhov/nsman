const fs = require('fs')
const nsman = require('src/nsman')
const assert = require('assert')

const DIR = '.tmp'

const options = { basedir: 'src' }

describe('naman namespace generator', () => {
  it('should create `math` namespace, with three files.', () => {
    nsman(options)
  })
})
