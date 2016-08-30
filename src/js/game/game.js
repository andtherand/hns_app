/**
 * Created by my on 30.08.16.
 */

/**
 * The main game file wrapped in a self-invoking anonymous function.
*/

GameController.$inject = [];

function GameController() {
  var maxColumns = 50,
      maxRows = 37,
      cursors,
      game = new Phaser.Game(800, 592, Phaser.CANVAS, 'game-canvas', {
        preload: preload,
        create: create,
        update: update
      });

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
    teamred = game.add.sprite(0, 0, 'teamRed');
    teamblue = game.add.sprite(32, 32, 'teamBlue');

    game.physics.arcade.enable(teamred);
    game.physics.arcade.enable(teamblue);

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


