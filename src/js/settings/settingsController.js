/**
 * Created by my on 30.08.16.
 */

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
  var vm = this;

  // init the entries
  vm.settings = SettingsResource.query(all);

  // ------------------------------------
  // - HELPER

  /**
   * callback is called when data has arrived on the client
   */
  function all() {
    console.log(vm.settings);
  }
}

// --

SettingsShowSingleAction.$inject = ['SettingsResource'];

function SettingsShowSingleAction(SettingsResource) {
  var vm = this;
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


