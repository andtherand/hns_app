/**
 * Created by my on 30.08.16.
 */
'use strict';

var StackBasedFSM = require('./StackBasedFSM');

/**
 * The base character for any team. Extendable.
 */
var BaseCharacter = {
  /**
   * constructor like
   *
   * @param obj
   * @returns {Object}
   */
  create: function(obj) {
    var self = Object.create(this);
    // stack based fsm
    self.brain = StackBasedFSM.create();

    self.name = obj.name || '';
    self.speed = obj.speed || 2;
    self.sightLength = obj.sightLength || 2;

    return self;
  },

  states: {
    MOVING: 1,
    LOOKING: 2
  },

  /**
   * move the character
   */
  move: function move() {

  },

  /**
   * look around
   */
  look: function look() {

  },

  /**
   * update the states
   */
  update: function update() {
    this.brain.update();
  }
};

// --------------------------------------------

module.exports = BaseCharacter;
