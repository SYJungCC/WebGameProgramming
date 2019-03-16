/// <reference path="_references.ts"/>
// IIFE - Immediate Invoked Fucntion Expression
/*
    Closure
    Calls an anonympous self-executing function
    Anything in braces is in a closure. Won't go to global namespace.
*/
(function () {
    // Global Game Variables
    var canvas = document.getElementById("canvas");
    var stage;
    var assetManager;
    var assetManifest; // Basically a "struct". Placeholder for now.\
    var currentScene;
    var currentState;
    var keyboardManager;
    assetManifest = [
        { id: "startButton", src: "./Assets/Images/PlayButton.png" },
        { id: "backButton", src: "./Assets/Images/BackButton.png" },
        { id: "background", src: "./Assets/Images/Background.png" },
        { id: "playeru0", src: "./Assets/Images/Wallace/u0.png" },
        { id: "playeru1", src: "./Assets/Images/Wallace/u1.png" },
        { id: "playeru2", src: "./Assets/Images/Wallace/u2.png" },
        { id: "playerd0", src: "./Assets/Images/Wallace/d0.png" },
        { id: "playerd1", src: "./Assets/Images/Wallace/d1.png" },
        { id: "playerd2", src: "./Assets/Images/Wallace/d2.png" },
        { id: "playerl0", src: "./Assets/Images/Wallace/l0.png" },
        { id: "playerl1", src: "./Assets/Images/Wallace/l1.png" },
        { id: "playerl2", src: "./Assets/Images/Wallace/l2.png" },
        { id: "playerr0", src: "./Assets/Images/Wallace/r0.png" },
        { id: "playerr1", src: "./Assets/Images/Wallace/r1.png" },
        { id: "playerr2", src: "./Assets/Images/Wallace/r2.png" },
        { id: "playerhide", src: "./Assets/Images/Wallace/hide.png" },
        { id: "yeah", src: "./Assets/Images/YEAH.png" },
        { id: "brick", src: "./Assets/Images/brickTemp.png" },
        { id: "play_music", src: "./Assets/Audio/play_music.ogg" }
    ];
    function Init() {
        console.log("Initialization start");
        assetManager = new createjs.LoadQueue(); // Creates the container used for the queue.
        assetManager.installPlugin(createjs.Sound); // Necessary to use sounds in our game. 
        assetManager.loadManifest(assetManifest); // Loads the manifest defined above
        assetManager.on("complete", Start, this); // Calls the start function when the assetManager is loaded
        // Start();
    }
    function Start() {
        console.log("Starting Application...");
        // Initialize CreateJS
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20); // Frequency of checks. Computationally expensive function. Checks every frame for every image. In menu, turn on. In game, turn off.
        createjs.Ticker.framerate = 60; // 60 FPS
        createjs.Ticker.on("tick", Update);
        objects.Game.stage = stage;
        objects.Game.currentScene = config.Scene.START;
        currentState = config.Scene.START;
        keyboardManager = new managers.Keyboard();
        objects.Game.keyboardManager = keyboardManager;
        Main();
    }
    function Update() {
        if (currentState != objects.Game.currentScene) {
            console.log(objects.Game.currentScene);
            Main();
        }
        currentScene.Update();
        stage.update();
    }
    function Main() {
        switch (objects.Game.currentScene) {
            case config.Scene.START:
                stage.removeAllChildren();
                currentScene = new scenes.StartScene(assetManager);
                stage.addChild(currentScene);
                break;
            case config.Scene.GAME:
                stage.removeAllChildren();
                currentScene = new scenes.PlayScene(assetManager);
                stage.addChild(currentScene);
                break;
            case config.Scene.OVER:
                stage.removeAllChildren();
                currentScene = new scenes.GameOverScene(assetManager);
                stage.addChild(currentScene);
                break;
        }
        currentState = objects.Game.currentScene;
        stage.addChild(currentScene);
    }
    window.onload = Init;
})();
//# sourceMappingURL=game.js.map