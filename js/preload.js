class Preload extends Phaser.Scene {
    constructor() {
      super("preload");
    }
  
    preload(){

        
    game = this;

    var maxWidth = 320;
    var numThingsLoaded = 0;
    var numThingsToLoad = 4;

    // draw rect with width = maxWidth * numThingsLoaded / numThingsToLoad
    var loadingBar = this.add.graphics();
    loadingBar.fillStyle(0xCCCCCC, 0.8);
    loadingBar.fillRect(240, 270, maxWidth, 50);

    
    var progressBar = this.add.graphics();
    progressBar.fillStyle(0xCCCCCC, 0.8);

    function progress(){
        var progressNumber = maxWidth * numThingsLoaded / numThingsToLoad;
        numThingsLoaded++;
        console.log (progressNumber);
        return progressNumber;

    }
    
    this.load.image('background', '../assets/images/loadingBackground.png');
    
    progressBar.fillRect(240, 270, progress(), 50);

    this.load.image('menuGirl', '../assets/images/menuGirl.png');
    
    progressBar.fillRect(240, 270, progress(), 50);

    this.load.image('startButton', '../assets/images/start.png');
    
    progressBar.fillRect(240, 270, progress(), 50);

    this.load.image('exitButton', '../assets/images/exit.png');
  
    progressBar.fillRect(240, 270, progress(), 50);

    this.load.image('howToPlayButton', '../assets/images/howtoplay.png');

    progressBar.fillRect(240, 270, progress(), 50);

    this.load.image('settingsButton', '../assets/images/settings.png');
    
    progressBar.fillRect(240, 270, progress(), 50);

    }

    create(){

        this.add.text(20, 20, "Loading game...");
            
        this.bg = game.add.image(401, 300, 'background');
        this.bg.setOrigin(0.5);

        this.menuGirl = game.add.image(phaser.config.width / 2, phaser.config.height / 2 -20, 'menuGirl');
        this.menuGirl.setOrigin(0.5);

        this.settings = game.add.image(phaser.config.width / 2 +200, phaser.config.height / 2 +130, 'settingsButton');
        this.settings.setOrigin(0.5);

        this.startButton = game.add.image(phaser.config.width / 2-200, phaser.config.height / 2 +130, 'startButton').setInteractive();
        this.startButton.setOrigin(0.5);

        this.exit = game.add.image(phaser.config.width / 2+200, phaser.config.height / 2 +230, 'exitButton');
        this.exit.setOrigin(0.5);

        this.howTo = game.add.image(phaser.config.width / 2-200, phaser.config.height / 2 +230, 'howToPlayButton');
        this.howTo.setOrigin(0.5);
    
        
        this.startButton.on('pointerdown', function(){
            this.scene.start("playGame");
            
        }, this);
    }
}