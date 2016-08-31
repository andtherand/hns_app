/**
 * Responsible for showing flash messages
 */

var channels = require('../config/events');

/**
 * @returns {{restrict: string, templateUrl: string, controller: *[]}}
 */
function flashDirective() {
  'use strict';
  return {
    restrict: 'E',
    templateUrl: 'template/flash/messages.html',
    controller: FlashController,
    controllerAs: 'flash'
  };
}

// ----------------------------------------------------------
// -- Details

FlashController.$inject = ['$timeout', 'PubSubService'];

function FlashController($timeout, PubSubService) {
  'use strict';
  var flash = this,
      timeoutPromises = [];

  // -------------------------------
  // - init

  if (flash.alerts) {
      _autoClose();
  }

  PubSubService.addSubscriber(channels.FLASH_EVENT, _getFlash);

  // -------------------------------
  // - fns

  flash.close = _closeAlert;

  // -------------------------------
  // - private

  function _autoClose() {
    if (flash.alerts) {
      angular.forEach(flash.alerts, function(value, key) {
        var timeOut = $timeout(function() {
          var index = flash.alerts.length - 1;

          _closeAlert(index);
        }, 5000);

        timeoutPromises.push(timeOut);
      });
    }
  }

  function _closeAlert(index) {
    var timeOut = timeoutPromises.splice(0);
    flash.alerts.splice(index, 1);

    // cancel the timeout anyway
    $timeout.cancel(timeOut);
  }

  // callback when something flash worthy happens
  function _getFlash(data) {
    if (data.length) {
        _decorate(data[0]);
    }
    flash.alerts = data;

    _autoClose();
  }

  function _decorateMultiple(messages) {
    var alerts;

    if (messages) {
      alerts = angular.forEach(messages, _decorate);
      _autoClose();

      return alerts;
    }

    return null;
  }

  function _decorate(message) {
    var type = message.type,
        iconOpen = '<span class="fa fa-',
        icon;

    switch(type) {
        case 'info':
            icon = iconOpen + 'info-circle"></span>';
            break;

        case 'error':
        case 'warning':
        case 'danger':
            icon = iconOpen + 'exclamation-triangle"></span>';
            break;

        default:
            icon = iconOpen + 'check-circle"></span>';
            break;
    }
    message.msg = icon + ' ' + message.msg;
  }
}

// --------------------------------------------

module.exports = flashDirective;
