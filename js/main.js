function runApp ()
{
    'use strict';

    //Init the Phaser Game App
    let app = new App();
    app.start();

}

window.onload = function()
{
    

    //check es6

    try
    {
        eval('let i=0;');
        eval('const_dev = true');


    }
    catch(e)
    {
        alert('This browser is not supported');
        return false

    }

    //launch game
    runApp();
    
};