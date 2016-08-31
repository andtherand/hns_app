/**
 * Created by my on 29.08.16.
 */
/**
 * This is the main entry point for the client-side app
 */

angular.module('HnsApp', ['ngSanitize', 'ui.bootstrap', 'Hns.templates', 'Hns.settings', 'Hns.services', 'Hns.game'])
  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    'use strict';

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        controller: 'GameController',
        alias: 'theGame',
        data: {
          pageTitle: 'Hide\'n\'Seek'
        }
      })
  }]);
