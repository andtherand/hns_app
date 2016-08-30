/**
 * This is a simple implementation of the PubSub pattern.
 * It's sole purpose is to circumvent the EventEmitter that ships with angular because
 * the latter needs the $scope variable injected in all consumers
 *
 * @returns {{addSubscriber: _addSubscriber, removeSubscriber: _removeSubscriber, publish: _publish}}
 * @constructor
 */
function PubSubService() {
  'use strict';

  var channels, service;

  // --------------------------
  // - PRIVATE

  service = {
    addSubscriber: _addSubscriber,
    removeSubscriber: _removeSubscriber,
    publish: _publish
  };

  channels = {};

  // ---------------------------
  // -- DETAILS

  function _addSubscriber(channel, callback) {
    var specifiedChannel;

    if (!channels[channel]) {
     specifiedChannel = channels[channel] = [];
    }

    specifiedChannel = channels[channel];

    if (0 < specifiedChannel.length) {
      angular.forEach(specifiedChannel, function(eventCallback) {
        if (callback !== eventCallback) {
          specifiedChannel.push(callback);
        }
      });

    } else {
      specifiedChannel.push(callback);
    }

    return this;
  }

  function _removeSubscriber(channel, callback) {
    var specifiedChannel;

    if (!channels[channel]) {
      return this;
    }

    specifiedChannel = channels[channel];

    angular.forEach(specifiedChannel, function(eventCallback, index) {
      if (callback === eventCallback) {
        specifiedChannel.splice(index, 1);
      }
    });

    return this;
  }

  function _publish(channel, data) {
    var specifiedChannel;

    if (!channels[channel]) {
      return this;
    }

    specifiedChannel = channels[channel];

    angular.forEach(specifiedChannel, function(callback) {
      callback(data);
    });

    return this;
  }

  return service;
}

// ---------------------------------------

module.exports = PubSubService;
