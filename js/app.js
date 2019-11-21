const App = function(){
    
    'use strict';

    this.VERSION = '0.0.1';
    this.IS_DEV = 'true';
};

App.prototype.start = function(){

'use strict';

//Scenes
let scenes = [];

scenes.push(Boot);
scenes.push(Preload);
scenes.push(Menu);


//Game config
const config = {
    type   : Phaser.AUTO,
    parent : 'phaser-app',
    title  : 'Room Designer',
    width  : 800,
    height : 600,
    scene  : gameScenes,
    backgroundColor : '#fff',
}

//Game app

let game = new Phaser.Game(config);

//Globals

game.IS_DEV   = this.IS_DEV;
game.VERSION  = this.VERSION;

game.CONFIG   = {
    width   : config.width,
    height  : config.height,
    centerX : Math.round(0.5 * config.width),
    centerY : Math.round(0.5 * config.height),
    // tile    : 16,

};

//Sound

game.sound_on = true;


};

