const fs = require('fs')
const path = require('path')

const localConfig = require('../config/local.json')
const devConfig = require('../config/dev.json')
const stagingConfig = require('../config/staging.json')
const prodConfig = require('../config/prod.json')
const environment = process.env.NEXT_PUBLIC_APP_ENV || 'development'



let config = (() => {
  switch (environment) {
    case 'local': return localConfig
    case 'development': return devConfig
    case 'staging': return stagingConfig
    case 'production': return prodConfig
    default: return localConfig
  }
})()


const configFilePath = path.join(__dirname, '../config/config.json')
fs.writeFileSync(configFilePath, JSON.stringify(config, null, 2))


console.log(
  `\x1b[32m-------------------------------
    ${environment.toUpperCase()} Environment
-------------------------------\x1b[0m`
)