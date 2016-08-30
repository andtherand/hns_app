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
// - SETTINGS ROUTES

// create
router.post('/settings', settings.create);
// Read: get all settings
router.get('/settings', settings.findAll);
// Read: settings by alias
router.get('/settings/by-alias/:alias', settings.findOneByAlias);
router.get('/settings/:id', settings.findOne);
// update
router.put('/settings/:id', settings.update);
// no delete currently

// -------------------------------------------

module.exports = router;
