/**
 * Created by my on 05.09.16.
 */

/**
 * Responsible for loading the right config for the corresponding env
 */

var config;

switch(process.env.NODE_ENV) {
  case 'production':
    config = require('../conf/config.production');
    break;

  case 'staging':
    config = require('../conf/config.staging');
    break;

  default:
    config = require('../conf/config')
}

// ----------------------------

module.exports = config;
