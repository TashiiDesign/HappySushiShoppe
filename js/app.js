
let game;
let phaser;
let world;
let input;
let ui;
let audio;

function main() {
    console.log("main()");

    //Game config
    var config = {
        type   : Phaser.AUTO,
        parent : 'phaser-app',
        title  : 'Room Designer',
        width  : 800,
        height : 600,
        backgroundColor : '#fff',
        scene  : 
        {
        preload: preload,
        create: create,
        update: update,
        }
        
    };

    //Game app

    phaser = new Phaser.Game(config);

    //Globals

    phaser.IS_DEV   = this.IS_DEV;
    phaser.VERSION  = this.VERSION;

    phaser.CONFIG   = {
        width   : config.width,
        height  : config.height,
        centerX : Math.round(0.5 * config.width),
        centerY : Math.round(0.5 * config.height),
        tile    : 16,

    };

    //Sound

    phaser.sound_on = true;


};

function preload() {
    console.log("preload()");

    //console.log(this.scene);
    
    game = this;
    game.time;
    game.score;
    var score;
    var timer;
    var maxWidth = 320;
    var numThingsLoaded = 0;
    var numThingsToLoad = 4;
    // var progressNumber;
   
    

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

    var startButton = this.load.image('startButton', '../assets/images/start.png');
    
    progressBar.fillRect(240, 270, progress(), 50);

    this.load.image('exitButton', '../assets/images/exit.png');
  
    progressBar.fillRect(240, 270, progress(), 50);

    this.load.image('howToPlayButton', '../assets/images/howtoplay.png');

    progressBar.fillRect(240, 270, progress(), 50);

    this.load.image('settingsButton', '../assets/images/settings.png');
    
    progressBar.fillRect(240, 270, progress(), 50);

    

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

    //SUSHI TYPES SMALL
    var nigiriSM = this.load.image('nigiriSM', '../assets/images/nigiriSM.png');
    var selected = this.load.image('sushiSelected', '../assets/images/sushiSelected.png');

    var twoSushiSM = this.load.image('2sushiSM', '../assets/images/2sushiSM.png');
    var threeSushiSM = this.load.image('3sushiSM', '../assets/images/3sushiSM.png');
    var sixSushiSM = this.load.image('6sushiSM', '../assets/images/6sushiSM.png');
    var fishEggSM = this.load.image('fishEggSM', '../assets/images/fishEggSM.png');
    var sashimiSM = this.load.image('sashimiSM', '../assets/images/sashimiSM.png');
    var tamagoSM = this.load.image('tamagoSM', '../assets/images/tamagoSM.png');
    var wrappedNigiriSM = this.load.image('wrappedNigiriSM', '../assets/images/wrappedNigiriSM.png');

    //SUSHI TYPES LARGE

    var nigirLG = this.load.image('nigiriLG', '../assets/images/nigiriLG.png');
    var twoSushiLG = this.load.image('2sushiLG', '../assets/images/2sushiLG.png');
    var threeSushiLG = this.load.image('3sushiLG', '../assets/images/3sushiLG.png');
    var sixSushiLG = this.load.image('6sushiLG', '../assets/images/6sushiLG.png');
    var fishEggLG = this.load.image('fishEggLG', '../assets/images/fishEggLG.png');
    var sashimiLG = this.load.image('sashimiLG', '../assets/images/sashimiLG.png');
    var tamagoLG = this.load.image('tamagoLG', '../assets/images/tamagoLG.png');
    var wrappedNigiriLG = this.load.image('wrappedNigiriLG', '../assets/images/wrappedNigiriLG.png');


    var completeOrderText = this.load.image('completeOrderText', '../assets/images/completeOrderText.png');


return;
}

function create() {
    console.log("create()");

    world = new World(game);

    // sushi = new Sushi();
    ui = new UI();
    audio = new Audio();

   
    world.start.on('pointerdown', function(){

        var menuClear = game.add.graphics();

        menuClear.fillStyle('#fff', 1);
        menuClear.fillRect(0, 0, 800, 600);

        world.start.visible = false;
        console.log('clicked')


        //X + = RIGHT / Y + = DOWN
        //X - = LEFT / Y - = UP

        //INVISIBLE SUSHI
        this.wrappedNigiriSM = game.add.image(0,0,'wrappedNigiriSM').setVisible(false);

        this.twoSushiSM = game.add.image(0,0,'2sushiSM').setVisible(false);

        this.sashimiSM = game.add.image(0,0, 'sashimiSM').setVisible(false);

        this.sixSushiSM = game.add.image(0,0, '6sushiSM').setVisible(false);

        this.threeSushiSM = game.add.image(0,0,'3sushiSM').setVisible(false);

        this.tamagoSM = game.add.image(0,0,'tamagoSM').setVisible(false);

        this.fishEggSM = game.add.image(0,0,'fishEggSM').setVisible(false);

        this.nigiriSM = game.add.image(0,0,'nigiriSM').setVisible(false);

        this.gameSceneBg = game.add.image(400, 300, 'gameSceneBg');
        this.gameSceneBg.setOrigin(0.5);

        this.sushiBoard = game.add.image(phaser.config.width / 2+100, phaser.config.height / 2+180, 'sushiBoard');
        this.sushiBoard.setOrigin(0.5);

        this.gameSceneTitle = game.add.image(phaser.config.width / 2-220, phaser.config.height / 2-270, 'gameSceneTitle');
        this.gameSceneTitle.setOrigin(0.5);

        this.pauseButton = game.add.image(phaser.config.width / 2-370, phaser.config.height / 2-270, 'pauseButton');
        this.pauseButton.setOrigin(0.5);
        
        this.sushiList = game.add.image(phaser.config.width / 2-290, phaser.config.height / 2+110, 'sushiList');
        this.sushiList.setOrigin(0.5);

        this.bellServe = game.add.image(phaser.config.width / 2-50, phaser.config.height / 2+50, 'bellServe').setInteractive();
        this.bellServe.setOrigin(0.5);

        this.orders1 = game.add.image(phaser.config.width / 2+220, phaser.config.height / 2-216, 'orders1');
        this.orders1.setOrigin(0.5);
    
        this.timeScore = game.add.image(phaser.config.width / 2-290, phaser.config.height / 2-130, 'timeScore');
        this.timeScore.setOrigin(0.5);

        this.completeOrderText = game.add.image(phaser.config.width / 2+220, phaser.config.height / 2-280, 'completeOrderText');
        this.completeOrderText.setOrigin(0.5);

        this.selected = game.add.image(phaser.config.width /  2-276, phaser.config.height / 2+212, 'sushiSelected');
        this.selected.setOrigin(0.5);
        

        //SUSHI ARRAY
        let sushiTypesSM = [this.nigiriSM, this.twoSushiSM, this.threeSushiSM, this.sixSushiSM, this.fishEggSM, this.sashimiSM, this.tamagoSM, this.wrappedNigiriSM  ];

        //SUSHI LIST ITEMS 

        let sushi0 = sushiTypesSM[0].texture.key;
        let sushi1 = sushiTypesSM[1].texture.key;
        let sushi2 = sushiTypesSM[2].texture.key;
        let sushi3 = sushiTypesSM[3].texture.key;
        let sushi4 = sushiTypesSM[4].texture.key;
        let sushi5 = sushiTypesSM[5].texture.key;
        let sushi6 = sushiTypesSM[6].texture.key;
        let sushi7 = sushiTypesSM[7].texture.key;

    

        this.sushi0 = game.add.image(phaser.config.width / 2-242, phaser.config.height / 2+245, sushi0).setInteractive(); 
        this.sushi1 = game.add.image(phaser.config.width / 2-338, phaser.config.height / 2+245, sushi1).setInteractive();
        this.sushi2 = game.add.image(phaser.config.width / 2-242, phaser.config.height / 2+155, sushi2).setInteractive();
        this.sushi3 = game.add.image(phaser.config.width / 2-338, phaser.config.height / 2+155, sushi3).setInteractive();
        this.sushi4 = game.add.image(phaser.config.width / 2-242, phaser.config.height / 2+65, sushi4).setInteractive();
        this.sushi5 = game.add.image(phaser.config.width / 2-338, phaser.config.height / 2+65, sushi5).setInteractive();
        this.sushi6 = game.add.image(phaser.config.width / 2-242, phaser.config.height / 2-22, sushi6).setInteractive();
        this.sushi7 = game.add.image(phaser.config.width / 2-338, phaser.config.height / 2-22, sushi7).setInteractive();

        this.sushiBoard0 = game.add.image(phaser.config.width / 2-242, phaser.config.height / 2+45, sushi0);


        //ORDER ITEMS

        function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
        }

        // let randomSushiBucket = [4]
        // while (!done) {
        //      let itemNumber = getRandomInt(7);
        //      if (randomSushiBucket does not contain itemNumber) {
        //         then add itemNumber to randomSushiBucket
        //      }
        //     done = when randomSushiBucket has 4 items
        // }

        // let randomSushiBucket = [4];
        // let done;
        // while(!done) {

        //     let itemNumber = getRandomInt(7);
        //     console.log(itemNumber);

        //     if (randomSushiBucket !== itemNumber){
        //         var sum = itemNumber + randomSushiBucket;
        //         console.log(sum)
        //     }
            
        // }




        // let sushiRandom1 = sushiTypesSM[randomSushiBucket[0]].texture.key;
        // let sushiRandom2 = sushiTypesSM[randomSushiBucket[1]].texture.key;
        // let sushiRandom3 = sushiTypesSM[randomSushiBucket[2]].texture.key;
        // let sushiRandom4 = sushiTypesSM[randomSushiBucket[3]].texture.key;

        let sushiRandom1 = sushiTypesSM[getRandomInt(7)].texture.key;   console.log(sushiRandom1);
        let sushiRandom2 = sushiTypesSM[getRandomInt(7)].texture.key;   console.log(sushiRandom2);
        let sushiRandom3 = sushiTypesSM[getRandomInt(7)].texture.key;   console.log(sushiRandom3);
        let sushiRandom4 = sushiTypesSM[getRandomInt(7)].texture.key;   console.log(sushiRandom4);

        // game.add.image(phaser.config.width / 2+95, phaser.config.height / 2-220, sushiRandom1);
        // game.add.image(phaser.config.width / 2+180, phaser.config.height / 2-220, sushiRandom2);
        // game.add.image(phaser.config.width / 2+260, phaser.config.height / 2-220, sushiRandom3);
        // game.add.image(phaser.config.width / 2+340, phaser.config.height / 2-220, sushiRandom4);


    
        // order1
        // no duplicates

        function orderSet(){
       
        if (sushiRandom1 == sushiRandom2 || sushiRandom1 == sushiRandom3 || sushiRandom1 == sushiRandom4){
            return getRandomInt()
            console.log("same");
        } 
        else
        {
            game.add.image(phaser.config.width / 2+95, phaser.config.height / 2-220, sushiRandom1);
            console.log("different");

        }

        if (sushiRandom2 == sushiRandom1 || sushiRandom2 == sushiRandom3 || sushiRandom2 == sushiRandom4){
            return getRandomInt()
            console.log("same");
        } 
        else
        {

            game.add.image(phaser.config.width / 2+180, phaser.config.height / 2-220, sushiRandom2);
            console.log("different");
        }

        if (sushiRandom3 == sushiRandom1 || sushiRandom3 == sushiRandom2 || sushiRandom3 == sushiRandom4){
            return getRandomInt()
            console.log("same");
        } 
        else
        {

            game.add.image(phaser.config.width / 2+260, phaser.config.height / 2-220, sushiRandom3);
            console.log("different");
        }

        if (sushiRandom4 == sushiRandom1 || sushiRandom4 == sushiRandom2 || sushiRandom4 == sushiRandom3){
            return getRandomInt()
            console.log("same");
        } 
        else
        {
            
            game.add.image(phaser.config.width / 2+340, phaser.config.height / 2-220, sushiRandom4);
            console.log("different");
        }
        
        }

        orderSet();


        let nigiriClicked = false;
        let twoSushiClicked = false;
        let threeSushiClicked = false;
        let sixSushiClicked = false;
        let fishEggClicked = false;
        let tamagoClicked = false;
        let wrappedNigiriClicked = false;
        let sashimiClicked = false;

        
        //X + = RIGHT / Y + = DOWN
        //X - = LEFT / Y - = UP

        var sushi0Board;

        this.sushi0.on('pointerdown', sushi0Clicked);
        
        function sushi0Clicked(){
            
            nigiriClicked = true;

            game.add.image(phaser.config.width / 2, phaser.config.height / 2+100, sushi0);
            
            console.log(sushi0);
            
        
        };


        for (sushi in sushiTypesSushi) { sushi.onClick()   }

        this.sushi1.on('pointerdown', sushi1Clicked);


        function sushi1Clicked(){
            if (clicked == 3){
                console.log("maximum reached")
                return;
            }
            else{
            
            twoSushiClicked = true;
            game.add.image(phaser.config.width / 2+100, phaser.config.height / 2+170, sushi1)
            console.log("sushi1clicked");
            clicked++
            }

        };

        this.sushi2.on('pointerdown', sushi2Clicked);

        function sushi2Clicked(){

            if (clicked == 3){
                console.log("maximum reached")
                return;
            }
            else{
            threeSushiClicked = true;
            game.add.image(phaser.config.width / 2, phaser.config.height / 2+180, sushi2)
            console.log("sushi2clicked");
            clicked++
            }
        };

        this.sushi3.on('pointerdown', sushi3Clicked);
        
        function sushi3Clicked(){

            if (clicked == 3){
                console.log("maximum reached")
                return;
            }
            else{
            sixSushiClicked = true;
            game.add.image(phaser.config.width / 2+200, phaser.config.height / 2+100, sushi3)
            console.log("sushi3clicked");
            clicked++
            }
        };
        
        this.sushi4.on('pointerdown', sushi4Clicked);
        
        function sushi4Clicked(){

            if (clicked == 3){
                console.log("maximum reached")
                return;
            }
            else{
            fishEggClicked = true;
            game.add.image(phaser.config.width / 2-50, phaser.config.height / 2+120, sushi4)
            console.log("sushi4clicked");
            clicked++
            }
        };

        this.sushi5.on('pointerdown', sushi5Clicked);
        
        function sushi5Clicked(){

            if (clicked == 3){
                console.log("maximum reached")
                return;
            }
            else{
            sashimiClicked = true;
            game.add.image(phaser.config.width / 2+50, phaser.config.height / 2+130, sushi5)
            console.log("sushi5clicked");
            clicked++
            }
        };

        this.sushi6.on('pointerdown', sushi6Clicked);
        
        function sushi6Clicked(){
            if (clicked == 3){
                console.log("maximum reached")
                return;
            }
            else{
            tamagoClicked = true;
            game.add.image(phaser.config.width / 2+230, phaser.config.height / 2+180, sushi6)
            console.log("sushi6clicked");
            clicked++
            }
        };

        this.sushi7.on('pointerdown', sushi7Clicked);
        
        function sushi7Clicked(){
            if (clicked == 3){
                console.log("maximum reached")
                return;
            }
            else{
            wrappedNigiriClicked = true;
            game.add.image(phaser.config.width / 2+170, phaser.config.height / 2+150, sushi7)
            console.log("sushi7clicked");
            clicked++
            }
        };
          
       
        // if (nigiriClicked){
        //     world.start.selected.angle = 0;
        // }else {
        //     world.start.selected.angle = 45;
        // }

      

   

    this.bellServe.on('pointerdown', serveSushi);

    function serveSushi(){
        console.log('served');

    
        if (nigiriClicked != true){
            console.log("not selected")

        }else if(nigiriClicked != false && sushi0 === sushiRandom1 || sushi0 === sushiRandom2 || sushi0 === sushiRandom3 || sushi0 === sushiRandom4){
            console.log("correct");
            
            correct++;

        }else{
            console.log("wrong")
            
        };

        if (twoSushiClicked != true){
            console.log("not selected")

        }else if(twoSushiClicked != false && sushi1 === sushiRandom1 || sushi1 === sushiRandom2 || sushi1 === sushiRandom3 || sushi1 === sushiRandom4){
            console.log("correct");
            correct++;
            
        }else{
            console.log("wrong")
        };

        
        if (threeSushiClicked != true){
            console.log("not selected")

        }else if(threeSushiClicked != false && sushi2 === sushiRandom1 || sushi2 === sushiRandom2 || sushi2 === sushiRandom3 || sushi2 === sushiRandom4){
            console.log("correct");
            correct++;
            
        }else{
            console.log("wrong")
        };

        if (sixSushiClicked != true){
            console.log("not selected")

        }else if(sixSushiClicked != false && sushi3 === sushiRandom1 || sushi3 === sushiRandom2 || sushi3 === sushiRandom3 || sushi3 === sushiRandom4){
            console.log("correct");
            correct++;
            
        }else{
            console.log("wrong")
        };
    
        if (fishEggClicked != true){
            console.log("not selected")

        }else if(fishEggClicked != false && sushi4 === sushiRandom1 || sushi4 === sushiRandom2 || sushi4 === sushiRandom3 || sushi4 === sushiRandom4){
            console.log("correct");
            correct++;
            
        }else{
            console.log("wrong")
            
        };

        if (sashimiClicked != true){
            console.log("not selected")

        }else if(sashimiClicked != false && sushi5 === sushiRandom1 || sushi5 === sushiRandom2 || sushi5 === sushiRandom3 || sushi5 === sushiRandom4){
            console.log("correct");
            correct++;
            
        }else{
            console.log("wrong")

        };

        if (tamagoClicked != true){
            console.log("not selected")

        }else if(tamagoClicked != false && sushi6 === sushiRandom1 || sushi6 === sushiRandom2 || sushi6 === sushiRandom3 || sushi6 === sushiRandom4){
            console.log("correct");
            correct++;
            
        }else{
            console.log("wrong")
        };

        if (wrappedNigiriClicked != true){
            console.log("not selected")

        }else if(wrappedNigiriClicked != false && sushi7 === sushiRandom1 || sushi7 === sushiRandom2 || sushi7 === sushiRandom3 || sushi7 === sushiRandom4){
            console.log("correct");
            correct++;
            
            
        }else{
            console.log("wrong")
        };

        checkAnswers();
        

    }

  
        
      
 });

}


function resetSelection(){
    correct=0;
    clicked=0
}

var clicked = 0;
var correct = 0;

function checkAnswers(){
    console.log(correct);
    
    if (correct === 4 ){
        console.log("WIN");
        this.correct = game.add.image(phaser.config.width / 2+30, phaser.config.height / 2-218, 'correct');
        // this.correct.destroy(); -- removes image from screen

    }else {
        console.log("LOSE");
        this.wrong = game.add.image(phaser.config.width / 2+30, phaser.config.height / 2-218, 'wrong');
    }
    

    

}



// function pauseGameForInput() {
//     game.paused = true;

    
// }

// function resumeGameFromInput() {
//     ui.hideLoadingText();

//     game.paused = false;
// }



function update() {
   
    world.update();
    
    
}


