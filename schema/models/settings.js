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
    settingsId: { type: 'string', auto: 'uuid', readonly: true, unique: true },
    createdOn: { type: 'Date', default: new Date() },
    alias: { type: 'string', default: nameGen.generate(), readonly: true },

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
      },
      findAny: {
        by: '_id',
        type: 'n1ql'
      }

    }
  }
);

// ---------------------------------------------
// - FUNCTIONS

/**
 * saves and creates a new instance of the settings object
 * also passes a callback to check for success
 *
 * @param grid      sets the grid params
 * @param teamRed   sets the features of team red
 * @param teamBlue  sets the features of team blue
 * @param done      callback function
 */
SettingsModel.createAndSave = function createAndSave(grid, teamRed, teamBlue, done) {
  this.create({
      grid: grid,
      teamRed: teamRed,
      teamBlue: teamBlue
  }, done);
};

// ---------------------------------------------
// - MODULE

module.exports = SettingsModel;
