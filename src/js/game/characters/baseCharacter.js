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
    var characterClass, coords, layer, character;

    characterClass = this;

    if (!this.group) {
      throw new Error('group is missing!');
    }

    coords = randomCoords();
    console.info('character with name:', this.name, 'x:', coords.x, 'y:', coords.y, 'team:', this.team);

    layer = index || 0;

    character = this.group.create(coords.x, coords.y, this.team, layer);
    character.physicsBodyType =  Phaser.Physics.ARCADE;
    character.enableBody = true;

    function randomCoords() {
      return {
        x: characterClass.game.rnd.between(0, characterClass.spriteDimension * (characterClass.maxColumns - characterClass.spriteDimension)),
        y: characterClass.game.rnd.between(0, characterClass.spriteDimension * (characterClass.maxRows - characterClass.spriteDimension))
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
