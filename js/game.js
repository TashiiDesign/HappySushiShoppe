class Game extends Phaser.Scene {
    constructor() {
      super("playGame");
        
    }

  
    preload(){

        game = this;
      
        // load audio

        //load game scene
        var gameSceneBg = this.load.image('gameSceneBg', '../assets/images/gameSceneBg.png');
        var gameSceneTitle = this.load.image('gameSceneTitle', '../assets/images/gameSceneTitle.png');

        var sushiBoard = this.load.image('sushiBoard', '../assets/images/sushiBoard.png');
        var bellServe = this.load.image('bellServe', '../assets/images/bellServe.png');

        var orders1 = this.load.image('orders1', '../assets/images/orders1.png');
        var sushiList = this.load.image('sushiList', '../assets/images/sushiList.png');
        var timeScore = this.load.image('timeScore', '../assets/images/timeScore.png');
        var pauseButton = this.load.image('pauseButton', '../assets/images/pauseButton.png')
        var wrong = this.load.image('wrong', '../assets/images/wrong.png');
        var correct = this.load.image('correct', '../assets/images/correct.png');

        var selected = this.load.image('sushiSelected', '../assets/images/sushiSelected.png');


        //SUSHI TYPES SMALL
        var nigiriSM = this.load.image('nigiriSM', '../assets/images/nigiriSM.png');
        var twoSushiSM = this.load.image('2sushiSM', '../assets/images/2sushiSM.png');
        var threeSushiSM = this.load.image('3sushiSM', '../assets/images/3sushiSM.png');
        var sixSushiSM = this.load.image('6sushiSM', '../assets/images/6sushiSM.png');
        var fishEggSM = this.load.image('fishEggSM', '../assets/images/fishEggSM.png');
        var sashimiSM = this.load.image('sashimiSM', '../assets/images/sashimiSM.png');
        var tamagoSM = this.load.image('tamagoSM', '../assets/images/tamagoSM.png');
        var wrappedNigiriSM = this.load.image('wrappedNigiriSM', '../assets/images/wrappedNigiriSM.png');
        var completeOrderText = this.load.image('completeOrderText', '../assets/images/completeOrderText.png');
        return;
    }

    create() {
      console.log("running")
      


      //X + = RIGHT / Y + = DOWN
      //X - = LEFT / Y - = UP

        //selectors 

        player = prompt("Please enter a username", "name");
        localStorage.setItem("playerName", player);
        score = 600;
        highscore = 0;
    

      //INVISIBLE SUSHI
      this.wrappedNigiriSM = this.add.image(0,0,'wrappedNigiriSM').setVisible(false);

      this.twoSushiSM = this.add.image(0,0,'2sushiSM').setVisible(false);

      this.sashimiSM = this.add.image(0,0, 'sashimiSM').setVisible(false);

      this.sixSushiSM = this.add.image(0,0, '6sushiSM').setVisible(false);

      this.threeSushiSM = this.add.image(0,0,'3sushiSM').setVisible(false);

      this.tamagoSM = this.add.image(0,0,'tamagoSM').setVisible(false);

      this.fishEggSM = this.add.image(0,0,'fishEggSM').setVisible(false);

      this.nigiriSM = this.add.image(0,0,'nigiriSM').setVisible(false);

      this.gameSceneBg = this.add.image(400, 300, 'gameSceneBg');
      this.gameSceneBg.setOrigin(0.5);

      this.sushiBoard = this.add.image(phaser.config.width / 2+100, phaser.config.height / 2+180, 'sushiBoard');
      this.sushiBoard.setOrigin(0.5);

      this.gameSceneTitle = this.add.image(phaser.config.width / 2-220, phaser.config.height / 2-270, 'gameSceneTitle');
      this.gameSceneTitle.setOrigin(0.5);

      this.pauseButton = this.add.image(phaser.config.width / 2-370, phaser.config.height / 2-270, 'pauseButton').setInteractive();
      this.pauseButton.setOrigin(0.5);
      
      this.sushiList = this.add.image(phaser.config.width / 2-290, phaser.config.height / 2+110, 'sushiList');
      this.sushiList.setOrigin(0.5);

      this.bellServe = this.add.image(phaser.config.width / 2-50, phaser.config.height / 2+50, 'bellServe').setInteractive();
      this.bellServe.setOrigin(0.5);

      this.orders1 = this.add.image(phaser.config.width / 2+220, phaser.config.height / 2-216, 'orders1');
      this.orders1.setOrigin(0.5);

      this.timeScore = this.add.image(phaser.config.width / 2-290, phaser.config.height / 2-130, 'timeScore');
      this.timeScore.setOrigin(0.5);

      this.completeOrderText = this.add.image(phaser.config.width / 2+220, phaser.config.height / 2-280, 'completeOrderText');
      this.completeOrderText.setOrigin(0.5);

      this.selected0 = this.add.image(phaser.config.width /  2-276, phaser.config.height / 2+212, 'sushiSelected');
      this.selected1 = this.add.image(phaser.config.width /  2-370, phaser.config.height / 2+212, 'sushiSelected');
      this.selected2 = this.add.image(phaser.config.width /  2-277, phaser.config.height / 2+123, 'sushiSelected');
      this.selected3 = this.add.image(phaser.config.width /  2-370, phaser.config.height / 2+124, 'sushiSelected');
      this.selected4 = this.add.image(phaser.config.width /  2-277, phaser.config.height / 2+35, 'sushiSelected');
      this.selected5 = this.add.image(phaser.config.width /  2-370, phaser.config.height / 2+35, 'sushiSelected');
      this.selected6 = this.add.image(phaser.config.width /  2-276, phaser.config.height / 2-53, 'sushiSelected');
      this.selected7 = this.add.image(phaser.config.width /  2-370, phaser.config.height / 2-53, 'sushiSelected');

      //PAUSED GAME DISPLAY
      

      //PAUSE GAME

      console.log(this.scene);

 
      this.pauseButton.on('pointerdown', function(){
            game.scene.pause();
            console.log('paused');

            if (game.scene.isSleeping('paused')){
                game.scene.wake('paused');
                game.scene.launch('paused');
            }else{
                game.scene.launch('paused');
            }
    
      },)


      
      //SUSHI ARRAY
      let sushiTypesSM = [this.nigiriSM, this.twoSushiSM, this.threeSushiSM, this.sixSushiSM, this.fishEggSM, this.sashimiSM, this.tamagoSM, this.wrappedNigiriSM  ];
      let sushiBoard = [this.nigiriSM, this.twoSushiSM, this.threeSushiSM, this.sixSushiSM, this.fishEggSM, this.sashimiSM, this.tamagoSM, this.wrappedNigiriSM  ];

      //SUSHI LIST ITEMS 

      let sushi0 = sushiTypesSM[0].texture.key;
      let sushi1 = sushiTypesSM[1].texture.key;
      let sushi2 = sushiTypesSM[2].texture.key;
      let sushi3 = sushiTypesSM[3].texture.key;
      let sushi4 = sushiTypesSM[4].texture.key;
      let sushi5 = sushiTypesSM[5].texture.key;
      let sushi6 = sushiTypesSM[6].texture.key;
      let sushi7 = sushiTypesSM[7].texture.key;

      let sushi0Board = sushiBoard[0].texture.key;
      let sushi1Board = sushiBoard[1].texture.key;
      let sushi2Board = sushiBoard[2].texture.key;
      let sushi3Board = sushiBoard[3].texture.key;
      let sushi4Board = sushiBoard[4].texture.key;
      let sushi5Board = sushiBoard[5].texture.key;
      let sushi6Board = sushiBoard[6].texture.key;
      let sushi7Board = sushiBoard[7].texture.key;

      this.sushi0 = this.add.image(phaser.config.width / 2-242, phaser.config.height / 2+245, sushi0).setInteractive(); 
      this.sushi1 = this.add.image(phaser.config.width / 2-338, phaser.config.height / 2+245, sushi1).setInteractive();
      this.sushi2 = this.add.image(phaser.config.width / 2-242, phaser.config.height / 2+155, sushi2).setInteractive();
      this.sushi3 = this.add.image(phaser.config.width / 2-338, phaser.config.height / 2+155, sushi3).setInteractive();
      this.sushi4 = this.add.image(phaser.config.width / 2-242, phaser.config.height / 2+65, sushi4).setInteractive();
      this.sushi5 = this.add.image(phaser.config.width / 2-338, phaser.config.height / 2+65, sushi5).setInteractive();
      this.sushi6 = this.add.image(phaser.config.width / 2-242, phaser.config.height / 2-22, sushi6).setInteractive();
      this.sushi7 = this.add.image(phaser.config.width / 2-338, phaser.config.height / 2-22, sushi7).setInteractive();

      
      var newOrder = function(){

             //ORDER ITEMS

             
      function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    let randomSushiBucket = [];
    while(randomSushiBucket.length <= 4) {

            let itemNumber = getRandomInt(7);
            console.log(itemNumber);

            if (!randomSushiBucket.includes (itemNumber)){
                randomSushiBucket.push(itemNumber);
        
            }
        }


        var sushiRandom1 = sushiTypesSM[randomSushiBucket[0]].texture.key;
        var sushiRandom2 = sushiTypesSM[randomSushiBucket[1]].texture.key;
        var sushiRandom3 = sushiTypesSM[randomSushiBucket[2]].texture.key;
        var sushiRandom4 = sushiTypesSM[randomSushiBucket[3]].texture.key;
        



        game.add.image(phaser.config.width / 2+95, phaser.config.height / 2-220, sushiRandom1);
        game.add.image(phaser.config.width / 2+180, phaser.config.height / 2-220, sushiRandom2);
        game.add.image(phaser.config.width / 2+260, phaser.config.height / 2-220, sushiRandom3);
        game.add.image(phaser.config.width / 2+340, phaser.config.height / 2-220, sushiRandom4);


        return;

       }

       var destroyImages = function(){
           
        game.correct.destroy(true); 
        game.wrong.destroy(true); 

        game.sushiRandom1.destroy(true); 
        game.sushiRandom2.destroy(true); 
        game.sushiRandom3.destroy(true); 
        game.sushiRandom4.destroy(true); 
       }
       

       newOrder();

       var gameOver = function(){

        console.log(score);
        highscore = localStorage.getItem('highscore');
        
        if(highscore  === null) {    
            localStorage.setItem('highscore', 0);   
            highscore = 0;
        }
        else if(score > localStorage.getItem('highscore')){
        
        localStorage.setItem('highscore', highscore);
        console.log("Game Over " + localStorage.getItem('highscore'));
        
            }
        }

        var checkAnswers = function(){
            console.log();
            
        if (correct === 4 ){
            console.log("WIN");
            game.correct = game.add.image(phaser.config.width / 2+30, phaser.config.height / 2-218, 'correct');
            score +=50;
            scoreText.setText(score);
            //destroyImages(); 
            newOrder();

            //randomise orders again
    
        }else {
            console.log("LOSE");
            game.wrong = game.add.image(phaser.config.width / 2+30, phaser.config.height / 2-218, 'wrong');
           // destroyImages();
            gameOver();
            reset();
            //delete images after 1second
            //randomise orders again
            
        }
        console.log(player + " highscore = " + localStorage.getItem('highscore'))
    }

    var reset = function(){
        clicked = 0;
        correct = 0;
    }
    


      //Select Sushi

      var clicked = 0;
      var correct = 0; 
      
      console.log(clicked);
      console.log(correct);
      
      let nigiriClicked = false;
      let twoSushiClicked = false;
      let threeSushiClicked = false;
      let sixSushiClicked = false;
      let fishEggClicked = false;
      let tamagoClicked = false;
      let wrappedNigiriClicked = false;
      let sashimiClicked = false;

      //Timer Start

      let timer = 5;

      var timerText = this.add.text(phaser.config.width / 2-255, phaser.config.height / 2-165, timer, { font: "26px calibri", fill: "#7C0A02", align: "center" });

      

      this.sushi0.on('pointerdown', function(){
        if (clicked == 4){
          console.log("maximum reached")
          return; 
        }else{
          nigiriClicked = true;
          this.sushi0Board = this.add.image(phaser.config.width / 2, phaser.config.height / 2+100, sushi0Board);
          console.log("sushi0clicked");
          this.selected0.angle = 45;
          clicked++
        }
      }, this);


      this.sushi1.on('pointerdown', function(){
          if (clicked == 4){
              console.log("maximum reached")
              return;
          }
          else{
          
          twoSushiClicked = true;
          this.sushi1Board = this.add.image(phaser.config.width / 2+100, phaser.config.height / 2+170, sushi1Board)
          console.log("sushi1clicked");
          this.selected1.angle = 45;
          clicked++
          }

      }, this);

      this.sushi2.on('pointerdown', function(){
          if (clicked == 4){
              console.log("maximum reached")
              return;
          }
          else{
          threeSushiClicked = true;
          this.sushi2Board = this.add.image(phaser.config.width / 2, phaser.config.height / 2+180, sushi2Board)
          console.log("sushi2clicked");
          this.selected2.angle = 45;
          clicked++
          }
      }, this);

      this.sushi3.on('pointerdown', function(){

          if (clicked == 4){
              console.log("maximum reached")
              return;
          }
          else{
          sixSushiClicked = true;
          this.sushi3Board = this.add.image(phaser.config.width / 2+200, phaser.config.height / 2+100, sushi3Board)
          console.log("sushi3clicked");
          this.selected3.angle = 45;
          clicked++
          }
      }, this);
      
      this.sushi4.on('pointerdown', function(){

          if (clicked == 4){
              console.log("maximum reached")
              return;
          }
          else{
          fishEggClicked = true;
          this.sushi4Board = this.add.image(phaser.config.width / 2-50, phaser.config.height / 2+120, sushi4Board)
          console.log("sushi4clicked");
          this.selected4.angle = 45;
          clicked++
          }
      }, this);

      this.sushi5.on('pointerdown', function(){

          if (clicked == 4){
              console.log("maximum reached")
              return;
          }
          else{
          sashimiClicked = true;
          this.sushi5Board = this.add.image(phaser.config.width / 2+50, phaser.config.height / 2+130, sushi5Board)
          console.log("sushi5clicked");
          this.selected5.angle = 45;
          clicked++
          }
      }, this);

      this.sushi6.on('pointerdown', function(){
          if (clicked == 4){
              console.log("maximum reached")
              return;
          }
          else{
          tamagoClicked = true;
          this.sushi6Board = this.add.image(phaser.config.width / 2+230, phaser.config.height / 2+180, sushi6Board)
          console.log("sushi6clicked");
          this.selected6.angle = 45;
          clicked++
          }
      }, this);

      this.sushi7.on('pointerdown', function(){
          if (clicked == 4){
              console.log("maximum reached")
              return;
          }
          else{
          wrappedNigiriClicked = true;
          this.sushi7Board = this.add.image(phaser.config.width / 2+170, phaser.config.height / 2+150, sushi7Board)
          console.log("sushi7clicked");
          this.selected7.angle = 45;
          clicked++
          }

    
      }, this);

     

        //set score text 
        var scoreText = this.add.text(phaser.config.width / 2-260, phaser.config.height / 2-120, this.score, { font: "20px calibri", fill: "#ffff00", align: "center" });
        

      this.bellServe.on('pointerdown', function() {
          console.log('served');
  
      
          if (nigiriClicked != true){
              console.log("not selected")
  
          }else if(nigiriClicked != false && sushi0 === game.sushiRandom1 || sushi0 === game.sushiRandom2 || sushi0 === game.sushiRandom3 || sushi0 === game.sushiRandom4){
              console.log("correct");
              correct++;
  
          }else{
              console.log("wrong")
              
          };
  
          if (twoSushiClicked != true){
              console.log("not selected")
  
          }else if(twoSushiClicked != false && sushi1 === game.sushiRandom1 || sushi1 === game.sushiRandom2 || sushi1 === game.sushiRandom3 || sushi1 === game.sushiRandom4){
              console.log("correct");
              correct++;
              
          }else{
              console.log("wrong")
          };
  
          
          if (threeSushiClicked != true){
              console.log("not selected")
  
          }else if(threeSushiClicked != false && sushi2 === game.sushiRandom1 || sushi2 === game.sushiRandom2 || sushi2 === game.sushiRandom3 || sushi2 === game.sushiRandom4){
              console.log("correct");
              correct++;
              
          }else{
              console.log("wrong")
          };
  
          if (sixSushiClicked != true){
              console.log("not selected")
  
          }else if(sixSushiClicked != false && sushi3 === game.sushiRandom1 || sushi3 === game.sushiRandom2 || sushi3 === game.sushiRandom3 || sushi3 === game.sushiRandom4){
              console.log("correct");
              correct++;
              
          }else{
              console.log("wrong")
          };
      
          if (fishEggClicked != true){
              console.log("not selected")
  
          }else if(fishEggClicked != false && sushi4 === game.sushiRandom1 || sushi4 === game.sushiRandom2 || sushi4 === game.sushiRandom3 || sushi4 === game.sushiRandom4){
              console.log("correct");
              correct++;
              
          }else{
              console.log("wrong")
              
          };
  
          if (sashimiClicked != true){
              console.log("not selected")
  
          }else if(sashimiClicked != false && sushi5 === game.sushiRandom1 || sushi5 === game.sushiRandom2 || sushi5 === game.sushiRandom3 || sushi5 === game.sushiRandom4){
              console.log("correct");
              correct++;
              
          }else{
              console.log("wrong")
  
          };
  
          if (tamagoClicked != true){
              console.log("not selected")
  
          }else if(tamagoClicked != false && sushi6 === game.sushiRandom1 || sushi6 === game.sushiRandom2 || sushi6 === game.sushiRandom3 || sushi6 === game.sushiRandom4){
              console.log("correct");
              correct++;
              
          }else{
              console.log("wrong")
          };
  
          if (wrappedNigiriClicked != true){
              console.log("not selected")
  
          }else if(wrappedNigiriClicked != false && sushi7 === game.sushiRandom1 || sushi7 === game.sushiRandom2 || sushi7 === game.sushiRandom3 || sushi7 === game.sushiRandom4){
              console.log("correct");
              correct++;
              
              
          }else{
              console.log("wrong")

          };

          console.log(correct);
          console.log(clicked);
 
         checkAnswers();


          sushiBoard.forEach(function () {


            if(nigiriClicked != true){
                console.log()
            }else {
                this.sushi0Board.destroy();
                
            }

            if (twoSushiClicked != true){
                console.log()
               
            }else {
                this.sushi1Board.destroy();
               
            }

            if (threeSushiClicked != true){
                console.log()
               
            }else {
                this.sushi2Board.destroy();
               
            }

            if (sixSushiClicked != true){
                console.log()
               
            }else {
                this.sushi3Board.destroy();
               
            }
            
            if (fishEggClicked != true){
                console.log()
               
            }else {
                this.sushi4Board.destroy();
               
            }

            if (sashimiClicked != true){
            
               
            }else {
                this.sushi5Board.destroy();
               
            }

            if (tamagoClicked != true){
                
               
            }else {
                this.sushi6Board.destroy();
               
            }

            if (wrappedNigiriClicked != true){
                
               
            }else {
                this.sushi7Board.destroy();
               
            }

            this.selected0.angle = 0;
            this.selected1.angle = 0;
            this.selected2.angle = 0;
            this.selected3.angle = 0;
            this.selected4.angle = 0;
            this.selected5.angle = 0;
            this.selected6.angle = 0;
            this.selected7.angle = 0;



    
            return;
           
          }, this);


      }, this )

      
       
      

    
    

    }
}
