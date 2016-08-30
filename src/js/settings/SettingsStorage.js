/**
 * Created by my on 30.08.16.
 */

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

  function _set() {

  }

  function _get() {

  }

  return service;
}

// --------------------------

module.exports = SettingsStorage;
