/**
 * Created by my on 30.08.16.
 */

var channels = require('../config/events');

/**
 * Shares the settings made with other controllers.
 * It's kind of a storage.
 */

SettingsStorage.$inject = ['PubSubService'];

function SettingsStorage(PubSubService) {
  'use strict';

  var settings, service;

  // --------------------------
  // - INIT

  service = {
    set: _set,
    get: _get
  };

  // --------------------------
  // - PRIVATE

  function _set(pSettings) {
    settings = pSettings;

    PubSubService.publish(channels.ACTIVATE_SETTINGS, settings);

    return service;
  }

  function _get() {
    return settings;
  }

  return service;
}

// --------------------------

module.exports = SettingsStorage;
