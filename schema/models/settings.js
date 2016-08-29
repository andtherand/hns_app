/**
 * Created by my on 29.08.16.
 */

/**
 * Defines a settings model to be used through-out the application.
 * Because couchbase is a document database, it comes in handy to have
 * a schema defined so we can work with plain old objects
 */

var ottoman = require('ottoman');
var nameGen = require('../../services/nameGenerator');

// ---------------------------------------------
// - MODEL DEFINITION

var SettingsModel = ottoman.model('Settings', {
    settingsId: { type:'string', auto:'uuid', readonly: true },
    createdOn: { type: 'Date', default: new Date() },
    alias: { type: 'string', default: nameGen.generate(), readonly:true },
    settings: {

    }
});

// ---------------------------------------------
// - FUNCTIONS

/**
 * saves and creates a new instance of the settings object
 * also passes a callback to check for success
 *
 * @param settings
 * @param done
 */
SettingsModel.createAndSave = function (settings, done) {
  this.create({
      settings: settings
  }, done);
};

// ---------------------------------------------
// - MODULE

module.exports = SettingsModel;