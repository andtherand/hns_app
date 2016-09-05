/**
 * Created by my on 30.08.16.
 */

var channels = require('../config/events');
var BlueCharacter = require('./characters').blueCharacter;
var RedCharacter = require('./characters').redCharacter;

/**
 * The main game file wrapped in a self-invoking anonymous function.
*/
GameController.$inject = ['PubSubService'];

function GameController(PubSubService) {
  'use strict';

  // --------------------
  // - INIT

  var cursors,
      redGroup,
      blueGroup,
      map,
      layer,
      game = new Phaser.Game(800, 592, Phaser.CANVAS, 'game-canvas', {
        preload: preload,
        create: create,
        update: update
      });

  // add a subscriber for a settings activation event
  PubSubService.addSubscriber(channels.ACTIVATE_SETTINGS, updateGame);

  /**
   * kills the current game and re initializes a new one
   */
  function updateGame(settings) {
    spawnCharacters(redGroup, RedCharacter, 'red', settings.teamRed);
    spawnCharacters(blueGroup, BlueCharacter, 'blue', settings.teamBlue);
  }

  /**
   * adds or removes characters
   * and places them randomly on the canvas
   *
   * @param team
   * @param characterClass
   * @param namePrefix
   * @param settings
   */
  function spawnCharacters(team, characterClass, namePrefix, settings) {
    var items, itemsCount, diff, i;

    items = team.children;
    itemsCount = items.length;
    diff = Math.abs(itemsCount - settings.count);

    if (itemsCount < settings.count) {
      for (i = 0; i < diff; i++) {
        var teamMember = characterClass.create({
          game: game,
          group: team,
          sightLength: settings.sightLength,
          speed: settings.speed,
          name: [namePrefix, '-', i].join('')
        });
        teamMember.randomPlaceInWorld(itemsCount + i + 1);
      }

    } else if (itemsCount > settings.count) {

      for (i = itemsCount - 1; i >= itemsCount - diff; i--) {
        if (team.getAt(i)) {
          team.removeChildAt(i);
        }
      }
    }
  }

  // --------------------
  // Define game methods

  function preload() {
    //  tiles are 16x16 each
    game.load.image('tiles', 'img/sci-fi-tiles.png');

    // load character images
    game.load.image('teamRed', 'img/team-red.png');
    game.load.image('teamBlue', 'img/team-blue.png');
  }

  function create() {

    //  Create some map data dynamically
    //  Map size is 128x128 tiles
    var data = '';

    for (var y = 0; y < 128; y++) {
      for (var x = 0; x < 128; x++) {
        data += game.rnd.between(0, 20).toString();

        if (x < 127) {
          data += ',';
        }
      }

      if (y < 127) {
        data += "\n";
      }
    }

    // console.log(data);

    //  Add data to the cache
    game.cache.addTilemap('dynamicMap', null, data, Phaser.Tilemap.CSV);

    //  Create our map (the 16x16 is the tile size)
    map = game.add.tilemap('dynamicMap', 16, 16);

    //  'tiles' = cache image key, 16x16 = tile size
    map.addTilesetImage('tiles', 'tiles', 16, 16);

    //  0 is important
    layer = map.createLayer(0);

    //  Scroll it
    layer.resizeWorld();

    game.physics.startSystem(Phaser.Physics.ARCADE);

    // add characters
    redGroup = game.add.group();
    blueGroup = game.add.group();

    var blueChar = BlueCharacter.create({
      name: 'blue-0',
      game: game,
      group: blueGroup
    });

    var redChar = RedCharacter.create({
      name: 'red-0',
      game: game,
      group: redGroup
    });

    blueChar.randomPlaceInWorld();
    redChar.randomPlaceInWorld();

    /*game.physics.arcade.enable(teamred);
    game.physics.arcade.enable(teamblue);*/

    cursors = game.input.keyboard.createCursorKeys();
  }

  function update() {
    if (cursors.left.isDown) {
      game.camera.x--;

    } else if (cursors.right.isDown) {
      game.camera.x++;
    }

    if (cursors.up.isDown) {
      game.camera.y--;

    } else if (cursors.down.isDown) {
      game.camera.y++;
    }
  }
}

module.exports = GameController;


