#!/usr/bin/env node

const commands = ['set', 'get', 'unset']
const argv = require('minimist')(process.argv.slice(2))

const [ commandName, ...args ] = argv._

if (!commands.includes(commandName)) {
  console.error(`Please specify commands [${commands.join(' ')}]`)
  process.exit()
}
const command = require('./commands/' + commandName)
command(args, argv)

