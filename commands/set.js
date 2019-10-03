const firebase = require('firebase-tools')

module.exports = (args, options) => {
  const [ configPath ] = args
  const { project } = options

  if (!configPath) {
    console.error(`Please specify a JSON file path`)
    process.exit()
  }
  const config = require(process.cwd() + '/' + configPath)

  const convertToKeyValuesReccursively = (config, parent, pairs) => {
    Object.entries(config).forEach(([key, value]) => {
      const treeKey = parent ? parent + '.' + key : key
  
      if (typeof value === 'object') {
        convertToKeyValuesReccursively(value, treeKey, pairs)
      } else {
        pairs.push(`${treeKey}=${value}`)
      }
    })
    return pairs
  }
  
  const keyValues = convertToKeyValuesReccursively(config, null, [])
  firebase.functions.config.set(keyValues, { project })
}


