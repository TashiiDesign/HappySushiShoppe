
let game;
let phaser;
let world;
let input;
let ui;
let audio;
let player;
let score;
let highscore;

//Game config
var config = {
    type   : Phaser.AUTO,
    parent : 'phaser-app',
    title  : 'Happy Sushi Shoppe',
    width  : 800,
    height : 600,
    backgroundColor : '#fff',
    scene  : [Preload, Game, Paused, LeaderBoard]
    
};

//Game app

phaser = new Phaser.Game(config);

//Globals

phaser.CONFIG   = {
    width   : config.width,
    height  : config.height,
    centerX : Math.round(0.5 * config.width),
    centerY : Math.round(0.5 * config.height),
    tile    : 16,

};

//Sound

phaser.sound_on = true;
