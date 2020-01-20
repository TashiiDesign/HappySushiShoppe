
class World {
    constructor(game) {
        
       

        this.bg = game.add.image(401, 300, 'background');
        this.bg.setOrigin(0.5);

        this.menuGirl = game.add.image(phaser.config.width / 2, phaser.config.height / 2 -20, 'menuGirl');
        this.menuGirl.setOrigin(0.5);

        this.settings = game.add.image(phaser.config.width / 2 +200, phaser.config.height / 2 +130, 'settingsButton');
        this.settings.setOrigin(0.5);

        this.start = game.add.image(phaser.config.width / 2-200, phaser.config.height / 2 +130, 'startButton').setInteractive();
        this.start.setOrigin(0.5);

        this.exit = game.add.image(phaser.config.width / 2+200, phaser.config.height / 2 +230, 'exitButton');
        this.exit.setOrigin(0.5);

        this.howTo = game.add.image(phaser.config.width / 2-200, phaser.config.height / 2 +230, 'howToPlayButton');
        this.howTo.setOrigin(0.5);

       
        }
        
        

    update() {
       
        

    }

    

}

