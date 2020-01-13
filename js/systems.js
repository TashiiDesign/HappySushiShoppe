class Audio {
    constructor() {
      
    }
}

class Sushi {
    constructor() {

    }

    update() {
            
    }

}

class UI {
    constructor(value) {

        
        this.loadingText = game.add.text(phaser.config.width / 2, phaser.config.height / 2 +60 , 'Loading', {
            font: '60px Cute Font',
            fill: '#fff'
        });
        this.loadingText.setOrigin(0.5, 0.5);

        this.scoreText = game.add.text(phaser.config.width / 2-200, phaser.config.height / 2+200, value, {
            font: '50px Cute Font',
            fill: '#fff'
        });
       
        }

   showLoadingText() {
        this.loadingText.visible = true;
    }

    hideLoadingText() {
        this.loadingText.visible = false;
    }

    showScoreText() {
        this.scoreText.visible = true;
    }

    hideScoreText() {
        this.scoreText.visible = false;
    }


    


}
