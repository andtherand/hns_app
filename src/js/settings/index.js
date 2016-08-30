/**
 * Created by my on 29.08.16.
 */

/**
 * This file serves as the settings module and makes it easier
 * to include it in the concatenated front.js file
 */

var requiredModules = ['ngResource', 'ui.router'];

angular.module('Hns.settings', requiredModules)
  .factory('SettingsResource', require('./SettingsResource'))
  .service('SettingsStorage', require('./SettingsStorage'))
  //
  .controller('SettingsShowAction', require('./settingsController').showAction)
  .controller('SettingsCreateAction', require('./settingsController').createAction)
  .controller('SettingsShowSingleAction', require('./settingsController').showSingleAction)
  //
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider) {
    'use strict';

    $stateProvider
      // show all settings
      .state('settings', {
        url: '/settings',
        controller: 'SettingsShowAction',
        controllerAs: 'settings',
        templateUrl: 'template/controllers/settings/show.html',
        data: {
          pageTitle: 'Settings'
        }
      })

      // create new settings
      .state('settings-create', {
        url: '/settings/create',
        controller: 'SettingsCreateAction',
        controllerAs: 'createSettings',
        templateUrl: 'template/controllers/settings/create.html',
        data: {
          pageTitle: 'Create settings'
        }
      })

      .state('settings-details', {
        url: '/settings/:id',
        controller: 'SettingsShowSingleAction',
        controllerAs: 'settings',
        templateUrl: 'template/controllers/settings/show-single.html',
        data: {
          pageTitle: 'Single settings'
        }
      })
  }]);
