const firebase = require('firebase-tools')

module.exports = async (args, options) => {
  const { project } = options
  await firebase.functions.config.unset(args, { project })
}


