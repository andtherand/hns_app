/**
 * Created by my on 29.08.16.
 */

/**
 * Bundles all necessary modules to be concatenated by the gulp task.
 * Minimizes HTTP-requests
 */

// all third party dependencies
require('./_shared_vendors');

// all templates
require('./template');

// all services
require('./services');

// the settings module
require('./settings');

// the game
require('./game');
