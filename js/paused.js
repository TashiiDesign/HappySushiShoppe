class Paused extends Phaser.Scene {
    constructor() {
      super("paused");
        
    }

    preload(){

        var pausePopUp = this.load.image('pausePopUp', '../assets/images/pausePopUp.png')
        var resumeButton = this.load.image('resumeButton', '../assets/images/resumeButton.png')
        var mainMenuButton = this.load.image('mainMenuButton', '../assets/images/mainMenuButton.png')

    }


    create(){

        game = this;
        
        
        var resumeButton = this.add.image('resumeButton', '../assets/images/resumeButton.png')
        var mainMenuButton = this.add.image('mainMenuButton', '../assets/images/mainMenuButton.png')
        var pausePopUp = this.add.image('pausePopUp', '../assets/images/pausePopUp.png')

        game.pausePopUp = game.add.image(phaser.config.width / 2, phaser.config.height / 2, 'pausePopUp');
        game.pausePopUp.setOrigin(0.5);
        game.resumeButton = game.add.image(phaser.config.width / 2, phaser.config.height / 2-20, 'resumeButton').setInteractive();
        game.mainMenuButton = game.add.image(phaser.config.width / 2, phaser.config.height / 2+150, 'mainMenuButton').setInteractive();

       
            game.resumeButton.on('pointerdown', function(){
                game.scene.resume('playGame');
                game.scene.sleep();
                console.log("resumed")
                })

            game.mainMenuButton.on('pointerdown', function(){
                // game.scene.launch('preload');
                game.scene.switch('preload');
                game.scene.stop('playGame');
                console.log("main menu")
                })
        }
    

  
}
