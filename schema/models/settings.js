/**
 * Created by my on 29.08.16.
 */

/**
 * Defines a settings model to be used through-out the application.
 * Because couchbase is a document database, it comes in handy to have
 * a schema defined so we can work with plain old objects
 */

var db = require('../db');
var ottoman = require('ottoman');
var nameGen = require('../../services/nameGenerator');

// ---------------------------------------------
// - MODEL DEFINITION

var SettingsModel = ottoman.model('Settings', {
    createdOn: { type: 'Date', default: Date.now },
    alias: { type: 'string', default: nameGen.generate, readonly: true },

    grid: {
      width: 'integer',
      height: 'integer'
    },

    teamRed: {
      sightLength: 'integer',
      count: 'integer',
      speed: 'integer'
    },

    teamBlue: {
      sightLength: 'integer',
      count: 'integer',
      speed: 'integer'
    }
  }, {
    index: {
      findByAlias: {
        by: 'alias',
        type: 'refdoc'
      }
    }
  }
);

// ---------------------------------------------
// - MODULE

module.exports = SettingsModel;
