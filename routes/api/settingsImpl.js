/**
 * This file defines the settings api for crud operations
 */

var SettingsModel = require('../../schema/models/settings');

// -------------------------------------------
// - API METHODS

/**
 * Private helper to keep things DRY
 *
 * @param err
 * @param results
 * @param res
 */
function returnResponse(err, results, res) {
  'use strict';

  if (err) {
    return returnError(err, res);
  }

  res.status = 202;
  res.send(results);
}

/**
 * returns if an error was found
 * @param err
 * @param res
 */
function returnError(err, res) {
  console.log("An error occured: " + JSON.stringify(err));
  res.status = 400;
  res.send(err);
}

// --------------------------------------
// -- EXPORTS

// Create

module.exports.create = function create(req, res, next) {
  'use strict';

};

// Read

/**
 *  retrieves all settings from the db
 *  if none is found returns
 */
module.exports.findAll = function findAll(req, res, next) {
  'use strict';

  SettingsModel.find({}, function(err, results) {
    var returnResults = results;
    res.status = 200;

    if (err) {
      console.log("An error occured: " + JSON.stringify(err));
      res.status = 400;
      returnResults = [];
    }

    res.send(returnResults);

  });
};

/**
 * Finder method: find one setting by it's id
 *
 * @param req
 * @param res
 * @param next
 */
module.exports.findOneByAlias = function findOne(req, res, next) {
  'use strict';

  SettingsModel.getById(req.params.id, function(err, result) {
    return returnResponse(err, result, res);
  });
};

/**
 * Finder method: find one setting by it's alias
 *
 * @param req
 * @param res
 * @param next
 */
module.exports.findOneByAlias = function findOneByAlias(req, res, next) {
  'use strict';

  SettingsModel.findByAlias(req.params.alias, function(err, results) {
    return returnResponse(err, results, res);
  });
};

// Update

/**
 * updates a given model
 *
 * @param req
 * @param res
 * @param next
 */
module.exports.update = function update(req, res, next) {
  'use strict';

  SettingsModel.getById(req.params.id, function(err, result) {
    returnError(err, res);

    result.save(function(err) {
      returnError(err, res);

      res.status = 200;
      res.send(result);
    });
  });
};


