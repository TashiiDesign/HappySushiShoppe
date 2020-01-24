class LeaderBoard extends Phaser.Scene {
    constructor() {
      super("leaderboard");
    }

    preload(){

        var leaderboardScene = this.load.image('leaderboardScene', '../assets/images/leaderboardScene.png')
        var backToMenuButton = this.load.image('backToMenuButton', '../assets/images/backToMenuButton.png')
    }

    create(){

        var leaderboardScene = this.add.image('leaderboardScene', '../assets/images/leaderboardScene.png')
        this.leaderboardScene = game.add.image(phaser.config.width / 2, phaser.config.height / 2, 'leaderboardScene');

        var backToMenuButton = this.add.image('backToMenuButton', '../assets/images/backToMenuButton.png')
        this.backToMenuButton = game.add.image(phaser.config.width / 2-280, phaser.config.height / 2-265, 'backToMenuButton').setInteractive();

        this.backToMenuButton.on('pointerdown', function(){
            this.scene.launch('preload');
            }, this)



        localStorage.getItem("playerName");
        console.log(player)


        // https://www.html5gamedevs.com/topic/17410-localstorage-in-phaser/


       highscore = localStorage.getItem('highscore');


        var highscoreText = game.add.text(phaser.config.width / 2+245, phaser.config.height / 2+190, highscore, { font: "30px Calibri", fill: "#ffff00", align: "center" })
        
        console.log(player + " highscore = " + localStorage.getItem('highscore'))
        highscoreText.setText(highscore);
        

        if (player == null ) {
            var playerText = game.add.text(phaser.config.width / 2-130, phaser.config.height / 2+193, 'NONE', { font: "30px Calibri", fill: "#ffff00", align: "center" });
        }else {
            var playerText = game.add.text(phaser.config.width / 2-130, phaser.config.height / 2+193, player, { font: "30px Calibri", fill: "#ffff00", align: "center" });
            playerText.setText(player);
        }
       
    }
}
  