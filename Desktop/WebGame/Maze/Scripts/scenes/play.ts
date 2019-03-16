module scenes {
    export class PlayScene extends objects.Scene {
        
        // Variables
        private count : number;
        private background:objects.Background;
        private showImage:objects.Yeah;
        private player:objects.Player;
        //private enemies:objects.Enemy[];
        //private enemyNum:number;

       // private scoreBoard: managers.ScoreBoard;
        private logBoard: managers.LogBoard;

        private backgroundMusic:createjs.AbstractSoundInstance;

        private maps:objects.maps; 
        private brickList:objects.Box[];
     
        constructor(assetManager:createjs.LoadQueue) {
            super(assetManager);
            this.backgroundMusic = createjs.Sound.play("play_music");
            this.backgroundMusic.loop = -1; // Looping forever
            this.backgroundMusic.volume = 0.3;
            this.Start();
        }

        // Methods
        public Start(): void {
            
            //init Logs 
            this.logBoard = new managers.LogBoard(); 
            objects.Game.logBoard = this.logBoard;

            this.background = new objects.Background(this.assetManager);
            this.showImage = new objects.Yeah(this.assetManager);
            this.maps = new objects.maps(); 
            this.brickList = new Array<objects.Box>();

            this.count = 0;
            for(var i = 0; i < this.maps.mapSizeY  ; ++i) {
                for(var j = 0 ; j < this.maps.mapSizeX ; ++j)
                {
                    if(this.maps.wave1[this.count] != 11)
                    {
                        this.brickList[this.count] = new objects.Box(this.assetManager);
                        this.brickList[this.count].setSize( 32, 32);
                        this.brickList[this.count].countX = j; 
                        this.brickList[this.count].countY = i; 
                        this.brickList[this.count].setPosition(j * this.brickList[this.count].width, i * this.brickList[this.count].height);
                        this.brickList[this.count].setBrickType(this.maps.wave1[this.count]);
                    }
                    this.count++;
                }
            }

            this.player = new objects.Player(this.assetManager);
            // this.enemies = new Array<objects.Enemy>();
            // this.enemyNum = 10;
            // for(let i = 0; i < this.enemyNum; i++) {
            //     this.enemies[i] = new objects.Enemy(this.assetManager);
            // }

            // Initializing the scoreboard objects
            //this.scoreBoard = new managers.ScoreBoard();
            // Make scoreboard globally accessible
            //objects.Game.scoreBoard = this.scoreBoard; 

            this.Main();
        }

        public Update(): void {
            this.background.Update();
            this.player.Update(); 

            // this.enemies.forEach(enemy => {
            //     enemy.Update();

            //     this.player.isDead = managers.Collision.Check(this.player, enemy);

            //     if(this.player.isDead) {
            //         this.backgroundMusic.stop();
            //         objects.Game.currentScene = config.Scene.OVER;
            //     }
            // });   

            this.brickList.forEach(brick => {
                brick.Update();
               
                if(managers.Collision.AABBCheck(this.player, brick)) {
                    this.backgroundMusic.stop();
                    objects.Game.currentScene = config.Scene.OVER;
                }
            });   

            if(this.player.isShowImage)
            {
                this.showImage.Show();
            }
            else 
            {
                this.showImage.Hide();
            }
        }

        public Main(): void {
            this.addChild(this.background);
            this.addChild(this.player);

            // this.enemies.forEach(enemy => {
            //     this.addChild(enemy);
            // });

          //  this.addChild(this.scoreBoard.scoreLabel);
            this.addChild(this.logBoard.logLabel);
            this.brickList.forEach(brick => {
                this.addChild(brick);
            });

            this.addChild(this.showImage);

        }
    }
}