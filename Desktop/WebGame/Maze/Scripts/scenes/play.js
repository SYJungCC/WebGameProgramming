var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var PlayScene = /** @class */ (function (_super) {
        __extends(PlayScene, _super);
        function PlayScene(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.backgroundMusic = createjs.Sound.play("play_music");
            _this.backgroundMusic.loop = -1; // Looping forever
            _this.backgroundMusic.volume = 0.3;
            _this.Start();
            return _this;
        }
        // Methods
        PlayScene.prototype.Start = function () {
            //init Logs 
            this.logBoard = new managers.LogBoard();
            objects.Game.logBoard = this.logBoard;
            this.background = new objects.Background(this.assetManager);
            this.showImage = new objects.Yeah(this.assetManager);
            this.maps = new objects.maps();
            this.brickList = new Array();
            this.count = 0;
            for (var i = 0; i < this.maps.mapSizeY; ++i) {
                for (var j = 0; j < this.maps.mapSizeX; ++j) {
                    if (this.maps.wave1[this.count] != 11) {
                        this.brickList[this.count] = new objects.Box(this.assetManager);
                        this.brickList[this.count].setSize(32, 32);
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
        };
        PlayScene.prototype.Update = function () {
            var _this = this;
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
            this.brickList.forEach(function (brick) {
                brick.Update();
                if (managers.Collision.AABBCheck(_this.player, brick)) {
                    _this.backgroundMusic.stop();
                    objects.Game.currentScene = config.Scene.OVER;
                }
            });
            if (this.player.isShowImage) {
                this.showImage.Show();
            }
            else {
                this.showImage.Hide();
            }
        };
        PlayScene.prototype.Main = function () {
            var _this = this;
            this.addChild(this.background);
            this.addChild(this.player);
            // this.enemies.forEach(enemy => {
            //     this.addChild(enemy);
            // });
            //  this.addChild(this.scoreBoard.scoreLabel);
            this.addChild(this.logBoard.logLabel);
            this.brickList.forEach(function (brick) {
                _this.addChild(brick);
            });
            this.addChild(this.showImage);
        };
        return PlayScene;
    }(objects.Scene));
    scenes.PlayScene = PlayScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map