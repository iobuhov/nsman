const modules = [{
  name: 'basemodule'
}]

const namespaces = [{
  actions: { module: 'basicmodule' },
  exportEntry: 'export * from ./{{name}}.js'
}]

module.exports = {
  basedir: 'src'
  // namespaces: [{
  //   name: 'actions',
  //   extends: 'default'
  // }, {
  //   name: 'root',
  //   subspaces: [
  //     'actions',
  //     'reducers',
  //     'components'
  //   ]
  // }]
}
