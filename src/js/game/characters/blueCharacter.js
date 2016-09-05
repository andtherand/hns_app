/**
 * Created by my on 30.08.16.
 */
'use strict';

/**
 * This represents a member of the blue team.
 * Shows a different approach to polymorphism
 */
var BaseCharacter = require('./baseCharacter'),
  BlueCharacter = Object.create(BaseCharacter);

BlueCharacter.team = 'teamBlue';

BlueCharacter.isDead = false;

/**
 * extending the base character with a shelter method
 * lookout for shelter
 */
BlueCharacter.shelter = function () {

};

/**
 * hides the character behind the nearest obstacle
 */
BlueCharacter.hide = function () {

};

/**
 * escape the attacker
 */
BlueCharacter.escape = function () {

};

// ----------------------------------------------

module.exports = BlueCharacter;
