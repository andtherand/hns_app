/**
 * Created by my on 30.08.16.
 */
/**
 * Bundles of services to inject into the main bundle
 */

angular.module('Hns.services', [])
  .service('PubSubService', require('./pubSubService'))
  //
  .directive('hnsFlash', require('./flashMessageDirective'));
