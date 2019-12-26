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
    constructor() {

        
        this.loadingText = game.add.text(phaser.config.width / 2, phaser.config.height / 2 +60 , 'Loading', {
            font: '60px Cute Font',
            fill: '#fff'
        });
        this.loadingText.setOrigin(0.5, 0.5);

       
        }

   showLoadingText() {
        this.loadingText.visible = true;
    }

    hideLoadingText() {
        this.loadingText.visible = false;
    }
    


}
