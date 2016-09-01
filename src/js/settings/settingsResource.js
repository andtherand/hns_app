/**
 * Created by my on 30.08.16.
 */

/**
 * A factory that facilitates the power of ngResource to simplify the
 * crud operations
 */

var APIS = require('../config/endpoints');

// -----------------------------------

// inject dependencies for minification
SettingsResource.$inject = ['$resource'];

/**
 * The factory method to simplify crud ops
 *
 * @param $resource
 * @returns {*}
 * @constructor
 */
function SettingsResource($resource) {
  'use strict';

  return $resource(APIS.SETTINGS_ENDPOINT + '/:id', {}, {
    count: { method: 'GET', url: APIS.SETTINGS_ENDPOINT + '/count' }
  });
}

// -----------------------------------

module.exports = SettingsResource;
