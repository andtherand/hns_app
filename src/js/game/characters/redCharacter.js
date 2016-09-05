/**
 * Created by my on 30.08.16.
 */
'use strict';

var BaseCharacter = require('./baseCharacter'),
    RedCharacter = Object.create(BaseCharacter);

RedCharacter.team = 'teamRed';

RedCharacter.preySearch = function() {

};

RedCharacter.hunt = function() {

};

RedCharacter.kill = function() {

};

// -----------------------------------

module.exports = RedCharacter;
