/**
 * Created by my on 30.08.16.
 */

var channels = require('../config/events');

/**
 * SettingsShowAction is responsible for crud operations concerning the settings
 */

SettingsShowAction.$inject = ['SettingsResource'];

/**
 * The read controller that shows all settings saved
 *
 * @param SettingsResource
 * @constructor
 */
function SettingsShowAction(SettingsResource) {
  'use strict';

  var vm = this;

  // init the entries
  vm.settings = SettingsResource.query(all);

  // ------------------------------------
  // - HELPER

  /**
   * callback is called when data has arrived on the client
   */
  function all() {
  }
}

// --

SettingsShowSingleAction.$inject = ['$stateParams', 'SettingsResource', 'SettingsStorage'];

function SettingsShowSingleAction($stateParams, SettingsResource, SettingsStorage) {
  'use strict';

  var vm = this;

  vm.setting = SettingsResource.get({ id: $stateParams.id }, function () {
    console.log('loading of id ', $stateParams.id, ' done');
  });

  /**
   * activates new settings and triggers a publish
   */
  vm.activateSettings = function() {
    SettingsStorage.set(vm.setting);
  }
}

// ---------------------------------------
// - CREATE

SettingsCreateAction.$inject = ['SettingsResource'];

/**
 * Responsible for creating settings
 *
 * @param SettingsResource
 * @constructor
 */
function SettingsCreateAction(SettingsResource) {
  'use strict';

  var vm, settings;

  vm = this;
  settings = new SettingsResource(); // a settings object to be persisted

  // - INIT

  vm.isSaving = false;

  vm.grid = {
    width: 5,
    height: 5
  };

  vm.teamRed = {
    sightLength: 5,
    count: 2,
    speed: 3
  };

  vm.teamBlue = {
    sightLength: 3,
    count: 5,
    speed: 2
  };

  // ------------------------------------
  // - FUNCTIONS

  vm.save = function save() {
    vm.isSaving = true;

    settings.grid = vm.grid;
    settings.teamRed = vm.teamRed;
    settings.teamBlue = vm.teamBlue;

    settings.$save(function() {
      console.log('saved');
    });
  }
}

// ---------------------------------------

module.exports = {
  showAction: SettingsShowAction,
  showSingleAction: SettingsShowSingleAction,
  createAction: SettingsCreateAction
};


