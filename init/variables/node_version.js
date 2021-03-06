const { validRange } = require('semver')

const { trim } = require('./trim.js')

// {{nodeVersion}} template variable
const NODE_VERSION_VARIABLE = {
  name: 'nodeVersion',
  description: 'Supported Node.js version',
  default: '^12.20.0 || ^14.14.0 || >=16.0.0',
  filter: trim,
  validate(value) {
    if (!validRange(value)) {
      return 'Invalid version range'
    }
  },
}

module.exports = { NODE_VERSION_VARIABLE }
