const firebase = require('firebase-tools')

module.exports = async (args, options) => {
  const [ path ] = args
  const { project } = options
  const ret = await firebase.functions.config.get(path, { project })
  console.log(ret)
}


