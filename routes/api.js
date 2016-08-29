/**
 * Created by my on 29.08.16.
 */
/**
 * This file bundles all defined APIs
 */

var express = require('express');
var router = express.Router();
var settings = require('./api/settingsImpl');

// -------------------------------------------
// - ROUTES

// create
router.post('/setting', settings.create);
// Read
// get all settings
router.get('/settings', settings.findAll);
// settings by alias
router.get('/setting/by-alias/:alias', settings.findOneByAlias);
// update
router.put('/setting/:id', settings.update);
// no delete currently

// -------------------------------------------

module.exports = router;
