/**
 * Created by my on 30.08.16.
 */
'use strict';

var StackBasedFSM = require('./stackBasedFSM');

/**
 * The base character for any team. Extendable.
 */
var BaseCharacter = {

  /**
   * the underlying phaser game
   */
  game: null,

  /**
   * the group this character belongs to
   */
  group: null,

  team: '',

  /**
   * the dimensions of the sprite image
   */
  spriteDimension: 16,

  maxColumns: 50,

  maxRows: 37,

  // ---
  // - FNS

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

    self.game = obj.game || null;
    self.group = obj.group || null;

    console.info('character created');

    return self;
  },

  /**
   * sets the game
   *
   * @param game
   * @returns {BaseCharacter}
   */
  setGame: function setGame(game) {
    this.game = game;

    return this;
  },

  /**
   * places the character on a random square in the world
   *
   * @param index
   */
  randomPlaceInWorld: function randomPlaceInWorld(index) {
    var character, coords, layer;

    character = this;

    if (!this.group) {
      throw new Error('group is missing!');
    }

    coords = randomCoords();
    console.info('character with name:', this.name, ', x:', coords.x, ', y:', coords.y, ' team:', this.team);

    layer = index || 0;

    this.group.create(coords.x, coords.y, this.team, layer);

    function randomCoords() {
      return {
        x: character.game.rnd.between(0, character.spriteDimension * (character.maxColumns - character.spriteDimension)),
        y: character.game.rnd.between(0, character.spriteDimension * (character.maxRows - character.spriteDimension))
      }
    }

    return this;
  },

  /**
   * move the character
   *
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
