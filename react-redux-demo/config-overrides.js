const { removeModuleScopePlugin, addBabelPreset, override } = require('customize-cra')

module.exports = override(
  removeModuleScopePlugin(),
  addBabelPreset('@babel/preset-react')
)