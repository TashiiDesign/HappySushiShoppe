
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

    sushi = new Sushi();
    ui = new UI();
    audio = new Audio();

    ui.showLoadingText();

    ui.hideLoadingText();

   
    world.start.on('pointerdown', function(){

        var menuClear = game.add.graphics();

        menuClear.fillStyle('#fff', 1);
        menuClear.fillRect(0, 0, 800, 600);

        world.start.visible = false;
        console.log('clicked')

        //X + = RIGHT / Y + = DOWN
        //X - = LEFT / Y - = UP

        //INVISIBLE SUSHI
        this.wrappedNigiriSM = game.add.image(0,0,'wrappedNigiriSM');

        this.twoSushiSM = game.add.image(0,0,'2sushiSM');

        this.sashimiSM = game.add.image(0,0, 'sashimiSM');

        this.sixSushiSM = game.add.image(0,0, '6sushiSM');

        this.threeSushiSM = game.add.image(0,0,'3sushiSM');

        this.tamagoSM = game.add.image(0,0,'tamagoSM');

        this.fishEggSM = game.add.image(0,0,'fishEggSM');

        this.nigiriSM = game.add.image(0,0,'nigiriSM').setInteractive();

        this.wrappedNigiriLG = game.add.image(0,0,'wrappedNigiriLG');

        this.twoSushiLG = game.add.image(0,0,'2sushiLG');

        this.sashimiLG = game.add.image(0,0, 'sashimiLG');

        this.sixSushiLG = game.add.image(0,0, '6sushiLG');

        this.threeSushiLG = game.add.image(0,0,'3sushiLG');

        this.tamagoLG = game.add.image(0,0,'tamagoLG');

        this.fishEggLG = game.add.image(0,0,'fishEggLG');

        this.nigiriLG = game.add.image(0,0,'nigiriLG').setInteractive();


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

        this.orders1 = game.add.image(phaser.config.width / 2+220, phaser.config.height / 2-130, 'orders1');
        this.orders1.setOrigin(0.5);
    
        this.timeScore = game.add.image(phaser.config.width / 2-290, phaser.config.height / 2-130, 'timeScore');
        this.timeScore.setOrigin(0.5);

        this.completeOrderText = game.add.image(phaser.config.width / 2+220, phaser.config.height / 2-280, 'completeOrderText');
        this.completeOrderText.setOrigin(0.5);

        this.selected = game.add.image(phaser.config.width /  2-276, phaser.config.height / 2+212, 'sushiSelected');
        this.selected.setOrigin(0.5);




        //ONLY WHEN CALLED

        // this.wrong = game.add.image(phaser.config.width / 2, phaser.config.height / 2, 'wrong');
        // this.wrong.setOrigin(0.5);

        // this.correct = game.add.image(phaser.config.width / 2, phaser.config.height / 2, 'correct');
        // this.correct.setOrigin(0.5);

        //SUSHI ARRAY
        let sushiTypesSM = [this.nigiriSM, this.twoSushiSM, this.threeSushiSM, this.sixSushiSM, this.fishEggSM, this.sashimiSM, this.tamagoSM, this.wrappedNigiriSM  ];
        // let sushiTypesLG = [this.nigiriLG, this.twoSushiLG, this.threeSushiLG, this.sixSushiLG, this.fishEggLG, this.sashimiLG, this.tamagoLG, this.wrappedNigiriLG  ]
           // sushiTypesSM.forEach(s => {
        //     game.add.image(500, 100, s.texture.key);
        // });

        //SUSHI LIST ITEMS 

        let sushi0 = sushiTypesSM[0].texture.key;
        let sushi1 = sushiTypesSM[1].texture.key;
        let sushi2 = sushiTypesSM[2].texture.key;
        let sushi3 = sushiTypesSM[3].texture.key;
        let sushi4 = sushiTypesSM[4].texture.key;
        let sushi5 = sushiTypesSM[5].texture.key;
        let sushi6 = sushiTypesSM[6].texture.key;
        let sushi7 = sushiTypesSM[7].texture.key;

        
        //SUSHI BOARD ITEMS 

        // let sushiBoard0 = sushiTypesLG[0].texture.key;
        // let sushiBoard1 = sushiTypesLG[1].texture.key;
        // let sushiBoard2 = sushiTypesLG[2].texture.key;
        // let sushiBoard3 = sushiTypesLG[3].texture.key;
        // let sushiBoard4 = sushiTypesLG[4].texture.key;
        // let sushiBoard5 = sushiTypesLG[5].texture.key;
        // let sushiBoard6 = sushiTypesLG[6].texture.key;
        // let sushiBoard7 = sushiTypesLG[7].texture.key;

        this.sushi0 = game.add.image(phaser.config.width / 2-242, phaser.config.height / 2+245, sushi0).setInteractive(); 
        this.sushi1 = game.add.image(phaser.config.width / 2-338, phaser.config.height / 2+245, sushi1).setInteractive();
        this.sushi2 = game.add.image(phaser.config.width / 2-242, phaser.config.height / 2+155, sushi2).setInteractive();
        this.sushi3 = game.add.image(phaser.config.width / 2-338, phaser.config.height / 2+155, sushi3).setInteractive();
        this.sushi4 = game.add.image(phaser.config.width / 2-242, phaser.config.height / 2+65, sushi4).setInteractive();
        this.sushi5 = game.add.image(phaser.config.width / 2-338, phaser.config.height / 2+65, sushi5).setInteractive();
        this.sushi6 = game.add.image(phaser.config.width / 2-242, phaser.config.height / 2-22, sushi6).setInteractive();
        this.sushi7 = game.add.image(phaser.config.width / 2-338, phaser.config.height / 2-22, sushi7).setInteractive();

        // this.sushi0.on('pointerdown', sushi0Select);
        // this.sushi1.on('pointerdown', sushi1Selected);

        // function checkSelected(){
        //     if (!clicked == true){
        //         sushi0Selected();

        //     }else {
        //         game.image.destroy();
        //     }
        // }

 

        // function sushi1Selected(){
        //     game.add.image(phaser.config.width / 2, phaser.config.height / 2, sushiBoard1)
        // }
        //ORDER ITEMS

        function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
        }

        //order1
        let sushiRandom1 = sushiTypesSM[getRandomInt(7)].texture.key;   console.log(sushiRandom1);
        let sushiRandom2 = sushiTypesSM[getRandomInt(7)].texture.key;   console.log(sushiRandom2);
        let sushiRandom3 = sushiTypesSM[getRandomInt(7)].texture.key;   console.log(sushiRandom3);
        let sushiRandom4 = sushiTypesSM[getRandomInt(7)].texture.key;   console.log(sushiRandom4);

        //order2
        let sushiRandom5 = sushiTypesSM[getRandomInt(7)].texture.key;   console.log(sushiRandom5);
        let sushiRandom6 = sushiTypesSM[getRandomInt(7)].texture.key;   console.log(sushiRandom6);
        let sushiRandom7 = sushiTypesSM[getRandomInt(7)].texture.key;   console.log(sushiRandom7);
        let sushiRandom8 = sushiTypesSM[getRandomInt(7)].texture.key;   console.log(sushiRandom8);

        //order3
        let sushiRandom9 = sushiTypesSM[getRandomInt(7)].texture.key;   console.log(sushiRandom9);
        let sushiRandom10 = sushiTypesSM[getRandomInt(7)].texture.key;   console.log(sushiRandom10);
        let sushiRandom11 = sushiTypesSM[getRandomInt(7)].texture.key;   console.log(sushiRandom11);
        let sushiRandom12 = sushiTypesSM[getRandomInt(7)].texture.key;   console.log(sushiRandom12);

        game.add.image(phaser.config.width / 2+95, phaser.config.height / 2-220, sushiRandom1);
        game.add.image(phaser.config.width / 2+180, phaser.config.height / 2-220, sushiRandom2);
        game.add.image(phaser.config.width / 2+260, phaser.config.height / 2-220, sushiRandom3);
        game.add.image(phaser.config.width / 2+340, phaser.config.height / 2-220, sushiRandom4);

        game.add.image(phaser.config.width / 2+95, phaser.config.height / 2-135, sushiRandom5);
        game.add.image(phaser.config.width / 2+180, phaser.config.height / 2-135, sushiRandom6);
        game.add.image(phaser.config.width / 2+260, phaser.config.height / 2-135, sushiRandom7);
        game.add.image(phaser.config.width / 2+340, phaser.config.height / 2-135, sushiRandom8);

        game.add.image(phaser.config.width / 2+95, phaser.config.height / 2-45, sushiRandom9);
        game.add.image(phaser.config.width / 2+180, phaser.config.height / 2-45, sushiRandom10);
        game.add.image(phaser.config.width / 2+260, phaser.config.height / 2-45, sushiRandom11);
        game.add.image(phaser.config.width / 2+340, phaser.config.height / 2-45, sushiRandom12);


        let nigiriClicked = false;
        let twoSushiClicked = false;
        let threeSushiClicked = false;
        let sixSushiClicked = false;
        let fishEggClicked = false;
        let tamagoClicked = false;
        let wrappedNigiriClicked = false;
        let sashimiClicked = false;
      
        this.sushi0.on('pointerdown', sushi0Clicked);
        
        function sushi0Clicked(){
            nigiriClicked = true;
            game.add.image(phaser.config.width / 2, phaser.config.height / 2+100, sushi0)
            console.log(sushi0);
            
        };

        this.sushi1.on('pointerdown', sushi1Clicked);
        
        function sushi1Clicked(){
            twoSushiClicked = true;
            game.add.image(phaser.config.width / 2+190, phaser.config.height / 2+170, sushi1)
            console.log("sushi1clicked");
        };

        this.sushi2.on('pointerdown', sushi2Clicked);

        function sushi2Clicked(){
            threeSushiClicked = true;
            game.add.image(phaser.config.width / 2, phaser.config.height / 2+180, sushi2)
            console.log("sushi2clicked");
        };

        this.sushi3.on('pointerdown', sushi3Clicked);
        
        function sushi3Clicked(){
            sixSushiClicked = true;
            game.add.image(phaser.config.width / 2+200, phaser.config.height / 2+100, sushi3)
            console.log("sushi3clicked");
        };
        
        this.sushi4.on('pointerdown', sushi4Clicked);
        
        function sushi4Clicked(){
            fishEggClicked = true;
            game.add.image(phaser.config.width / 2+200, phaser.config.height / 2+100, sushi4)
            console.log("sushi4clicked");
        };

        this.sushi5.on('pointerdown', sushi5Clicked);
        
        function sushi5Clicked(){
            sashimiClicked = true;
            game.add.image(phaser.config.width / 2+200, phaser.config.height / 2+100, sushi5)
            console.log("sushi5clicked");
        };

        this.sushi6.on('pointerdown', sushi6Clicked);
        
        function sushi6Clicked(){
            tamagoClicked = true;
            game.add.image(phaser.config.width / 2+200, phaser.config.height / 2+100, sushi6)
            console.log("sushi6clicked");
        };

        this.sushi7.on('pointerdown', sushi7Clicked);
        
        function sushi7Clicked(){
            wrappedNigiriClicked = true;
            game.add.image(phaser.config.width / 2+200, phaser.config.height / 2+100, sushi7)
            console.log("sushi7clicked");
        };


        function isSushiClicked (boolean, sushiType){
           

         
          }
          
       
        // if (nigiriClicked){
        //     world.start.selected.angle = 0;
        // }else {
        //     world.start.selected.angle = 45;
        // }

    //   var nigiriClicked = this.nigiriSM.on('pointerdown', function(){
    //         world.start.nigiriSelected.angle = 45; 
    //   });

    //     if (!nigiriClicked){
    //         this.nigiriSelected.angle = 45; 
    //     }else{
    //         this.nigiriSelected.angle = 0; 
    //     }

    this.bellServe.on('pointerdown', serveSushi);

    function serveSushi(){
        console.log('served');
        isSushiClicked(nigiriClicked, sushi0)


        
        
        // if(sushiRandom1 === sushi0 || sushiRandom2 === sushi0 || sushiRandom3 === sushi0 || sushiRandom4 === sushi0){
        //     console.log("same")

        // }else {
        //     console.log("different")
        // }

    }
        
      
 });

}



// function pauseGameForInput() {
//     game.paused = true;

    
// }

// function resumeGameFromInput() {
//     ui.hideLoadingText();

//     game.paused = false;
// }



function update() {
    sushi.update();

    world.update();
    
    
}

// function setScore(value) {
//     game.score = value;
//     ui.updateScoreText(value);
// }

