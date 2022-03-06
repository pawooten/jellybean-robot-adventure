import Phaser from 'phaser';

let PlayState = {};
// load game assets here
PlayState.preload = function () {
    this.load.image('background', 'background.png');
};
PlayState.init = function () {
};
// create game entities and set up world here
PlayState.create = function () {
    this.game.add.image(0, 0, 'background');
};
PlayState.update = function () {
    this._handleCollisions();
    this._handleInput();
};
PlayState._handleCollisions = function () {
};
PlayState._handleInput = function () {
};
PlayState.begin = function() {
    let game = new Phaser.Game(960, 600, Phaser.AUTO, 'game');
    game.scene.add('play', PlayState);
    game.scene.start('play');
}
window.onload = function () {
    PlayState.begin();
};