
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


        console.log('clicked')

        //X + = RIGHT / Y + = DOWN
        //X - = LEFT / Y - = UP

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

        this.bellServe = game.add.image(phaser.config.width / 2-50, phaser.config.height / 2+50, 'bellServe');
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

        

        //PLACEHOLDER IMAGES

        //ORDER ITEMS
   



        //SUSHI LIST ITEMS 

        this.wrappedNigiriSM = game.add.image(phaser.config.width / 2-338, phaser.config.height / 2-22, 'wrappedNigiriSM');
        this.wrappedNigiriSM.setOrigin(0.5);


        this.twoSushiSM = game.add.image(phaser.config.width / 2-242, phaser.config.height / 2-22, '2sushiSM');
        this.twoSushiSM.setOrigin(0.5);

        this.sashimiSM = game.add.image(phaser.config.width / 2-338, phaser.config.height / 2+65, 'sashimiSM');
        this.sashimiSM.setOrigin(0.5);

        this.sixSushiSM = game.add.image(phaser.config.width / 2-242, phaser.config.height / 2+65, '6sushiSM');
        this.sixSushiSM.setOrigin(0.5);

        this.threeSushiSM = game.add.image(phaser.config.width / 2-338, phaser.config.height / 2+155, '3sushiSM');
        this.threeSushiSM.setOrigin(0.5);

        this.tamagoSM = game.add.image(phaser.config.width / 2-242, phaser.config.height / 2+155, 'tamagoSM');
        this.tamagoSM.setOrigin(0.5);

        this.fishEggSM = game.add.image(phaser.config.width / 2-338, phaser.config.height / 2+245, 'fishEggSM');
        this.fishEggSM.setOrigin(0.5);

        this.nigiriSM = game.add.image(phaser.config.width / 2-242, phaser.config.height / 2+245, 'nigiriSM').setInteractive();
        this.nigiriSM.setOrigin(0.5);

        let sushiTypesSM = [this.nigiriSM, this.twoSushiSM, this.threeSushiSM, this.sixSushiSM, this.fishEggSM, this.sashimiSM, this.tamagoSM, this.wrappedNigiriSM  ];
       
        let imageName = sushiTypesSM[getRandomInt(7)].texture.key;

        game.add.image(500, 100, imageName);

        // sushiTypesSM.forEach(s => {
        //     game.add.image(500, 100, s.texture.key);
        // });
        
        function display(){
            console.log(sushiTypesSM);
        };



      
        this.nigiriSM.on('pointerdown', nigiriClicked);
        
        function nigiriClicked(){
                world.start.selected.angle = 45;
        };

        if (nigiriClicked){
            world.start.selected.angle = 0;
        }else {
            world.start.selected.angle = 45;
        }

    //   var nigiriClicked = this.nigiriSM.on('pointerdown', function(){
    //         world.start.nigiriSelected.angle = 45; 
    //   });

    //     if (!nigiriClicked){
    //         this.nigiriSelected.angle = 45; 
    //     }else{
    //         this.nigiriSelected.angle = 0; 
    //     }
      


        //ON TABLE ITEMS

        // this.largePH = game.add.image(phaser.config.width / 2+200, phaser.config.height / 2+100, 'largePH');
        // this.largePH.setOrigin(0.5);

        // this.largePH = game.add.image(phaser.config.width / 2+100, phaser.config.height / 2+130, 'largePH');
        // this.largePH.setOrigin(0.5);

    });

    // this.timer = this.add.text(phaser.config.width / 2, phaser.config.height / 2, {
    //     font: '60px Cute Font',
    //     fill: 0xCCCCCC

    // });
    // this.timer.setOrigin(0.5);

    // // timedEvent = this.time.addEvent({ delay: 2000, callback: onEvent, callbackScope: this });
    // timedEvent = this.time.delayedCall(3000, onEvent, [], this);

    // function timerUpdate (){
    // this.timer.setText('Event.progress: ' + timedEvent.getProgress().toString().substr(0, 4));
    //     }

    // function onEvent (){
    //  timerUpdate();
    //     }

}



// function pauseGameForInput() {
//     game.paused = true;

    
// }

// function resumeGameFromInput() {
//     ui.hideLoadingText();

//     game.paused = false;
// }

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function update() {
    sushi.update();

    world.update();
    
    
}

// function setScore(value) {
//     game.score = value;
//     ui.updateScoreText(value);
// }

