/**
 * Created by my on 29.08.16.
 */

/**
 * This file servers as a bundle of controllers and makes it easier
 * to include it in the concatenated front.js file
 */

var requiredModules = ['ngResource', 'ui.router'];

angular.module('Hns.settings', requiredModules)
  .factory('SettingsResource', require('./SettingsResource'))
  .controller('SettingsShowAction', require('./settingsController').showAction)
  .controller('SettingsCreateAction', require('./settingsController').createAction)
  //
  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider) {
    'use strict';

    $stateProvider
      .state('settings', {
        url: '/settings',
        controller: 'SettingsShowAction',
        controllerAs: 'settings',
        templateUrl: 'template/controllers/settings/show.html',
        data: {
          pageTitle: 'Settings'
        }
      })

      .state('settings-create', {
        url: '/settings/create',
        controller: 'SettingsCreateAction',
        controllerAs: 'createSettings',
        templateUrl: 'template/controllers/settings/create.html',
        data: {
          pageTitle: 'Create settings'
        }
      })
  }]);
