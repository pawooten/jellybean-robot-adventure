import Phaser from 'phaser';
import PHASER_CONFIG from './phaser-config';
import DebugUtilities from './debug-utilities';

let PlayState = {};
// load game assets here
PlayState.preload = function () {
    this.load.image('background', 'background.png');
    this.load.image('green', 'green.png');
    this.load.image('vertical-line', 'vertical-line.png');
    this.load.image('horizontal-line', 'horizontal-line.png');
};
PlayState.init = function () {
};
// create game entities and set up world here
PlayState.create = function () {
    this.add.image(400, 300, 'background');

    let grids =  this.physics.add.staticGroup();
    DebugUtilities.drawGrid(grids);
};
PlayState.update = function () {
    PlayState._handleCollisions();
    PlayState._handleInput();
};
PlayState._handleCollisions = function () {
};
PlayState._handleInput = function () {
};
PlayState.begin = function() {
    let game = new Phaser.Game(PHASER_CONFIG);
    game.scene.add('play', PlayState);
    game.scene.start('play');
}
window.onload = function () {
    PlayState.begin();
};