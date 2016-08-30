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
  var vm = this;

}


// ---------------------------------------

module.exports = {
  showAction: SettingsShowAction,
  createAction: SettingsCreateAction
};


