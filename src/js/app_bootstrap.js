/**
 * Created by my on 29.08.16.
 */
/**
 * This is the main entry point for the client-side app
 */

angular.module('HnsApp', ['ui.bootstrap', 'Hns.templates', 'Hns.settings'])
  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    'use strict';

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        data: {
          pageTitle: 'Hide\'n\'Seek'
        }
      })
  }]);
