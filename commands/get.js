const firebase = require('firebase-tools')
const util = require('util')

module.exports = async (args, options) => {
  const [ path ] = args
  const { project } = options
  const config = await firebase.functions.config.get(path, { project })
  console.log(util.inspect(config, false, null, true))
}


