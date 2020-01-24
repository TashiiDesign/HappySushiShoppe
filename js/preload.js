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
    this.load.image('gameTitle', '../assets/images/gameTitle.png');
    
    progressBar.fillRect(240, 270, progress(), 50);

    this.load.image('conveyor', '../assets/images/conveyor.png');
    this.load.image('sushiConveyor', '../assets/images/sushiConveyor.png');
    this.load.image('conveyorMove', '../assets/images/conveyorMove.png');
    
    progressBar.fillRect(240, 270, progress(), 50);

    this.load.image('startButton', '../assets/images/start.png');
    
    progressBar.fillRect(240, 270, progress(), 50);

    this.load.image('exitButton', '../assets/images/exit.png');
  
    progressBar.fillRect(240, 270, progress(), 50);

    this.load.image('leaderboard', '../assets/images/leaderboard.png');

    progressBar.fillRect(240, 270, progress(), 50);

    this.load.image('settingsButton', '../assets/images/settings.png');
    
    progressBar.fillRect(240, 270, progress(), 50);

    }

    create(){

        console.log(game.scene)

        // this.add.text(20, 20, "Loading game...");
            
        this.bg = game.add.image(401, 300, 'background');
        this.bg.setOrigin(0.5);

        this.conveyor = game.add.image(phaser.config.width / 2, phaser.config.height / 2 -10, 'conveyor');
        this.conveyor.setOrigin(0.5);

        this.conveyorMove = game.add.sprite(phaser.config.width / 2, phaser.config.height / 2 -29, 'conveyorMove');

        this.sushiConveyor = game.add.sprite(phaser.config.width / 2+50, phaser.config.height / 2 -49, 'sushiConveyor');
        this.gameTitle = game.add.image(phaser.config.width/2, phaser.config.height/2-210, 'gameTitle');

        this.settings = game.add.image(phaser.config.width / 2 +200, phaser.config.height / 2 +130, 'settingsButton');
        this.settings.setOrigin(0.5);

        this.startButton = game.add.image(phaser.config.width / 2-200, phaser.config.height / 2 +130, 'startButton').setInteractive();
        this.startButton.setOrigin(0.5);

        this.exit = game.add.image(phaser.config.width / 2+200, phaser.config.height / 2 +230, 'exitButton');
        this.exit.setOrigin(0.5);

        this.leaderboard = game.add.image(phaser.config.width / 2-200, phaser.config.height / 2 +230, 'leaderboard').setInteractive();
        this.leaderboard.setOrigin(0.5);


        
        this.startButton.on('pointerdown', function(){
            this.scene.start("playGame");
            
        }, this);

        this.leaderboard.on('pointerdown', function(){
            this.scene.launch("leaderboard");
            
        }, this);

        this.gameTitle.angle = 360;
    }
//https://www.codeandweb.com/texturepacker/tutorials/how-to-create-sprite-sheets-for-phaser3
    update(time, delta){
    this.sushiConveyor.x += delta/10;
    this.conveyorMove.x += delta/20;
    
    if(this.sushiConveyor.x > 1200){
        this.sushiConveyor.x = -380;
        }

    if(this.conveyorMove.x > 420){
        this.conveyorMove.x = 400;
        }


}
}