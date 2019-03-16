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
var objects;
(function (objects) {
    // export enum ePlayerMovment {
    //     down = 0,
    //     idle = 1,
    //     left = 3,
    //     right = 6,
    //     up = 9,
    // }
    var Player = /** @class */ (function (_super) {
        __extends(Player, _super);
        // Constructor
        function Player(assetManager) {
            var _this = _super.call(this, assetManager, "playerd1") || this;
            _this.moveSpritecount = 0;
            _this.maxSpriteX = 2;
            _this.maxSpriteY = 4;
            _this.scaleOfStepX = 8;
            _this.scaleOfStepY = 8;
            _this.posRight = 0;
            _this.posLeft = 0;
            _this.posUp = 0;
            _this.posDown = 0;
            _this.previousX = 0;
            _this.previousY = 0;
            _this.isHidePlayer = false;
            _this.Init(_this.maxSpriteX, _this.maxSpriteY);
            _this.Start();
            return _this;
        }
        // Methods / functions
        Player.prototype.Start = function () {
            // this.isDead = false;
            this.isShowImage = false;
            this.initPostion();
        };
        Player.prototype.initPostion = function () {
            this.x = 976;
            this.y = 48;
        };
        Player.prototype.Update = function () {
            this.Move();
            this.CheckBounds();
            // Game.logBoard.Logs = String("X : " + this.x + " Y : " + this.y);
        };
        Player.prototype.Reset = function () { };
        Player.prototype.Move = function () {
            // this.x = objects.Game.stage.mouseX; // objects.Game.stage is a global variable
            // Keyboard controls
            if (objects.Game.keyboardManager.moveLeft) {
                this.previousX = this.x;
                this.previousY = this.y;
                this.MoveLeft();
                if (!this.isHidePlayer) {
                    this.ChangeSprite("playerl" + this.moveSpritecount);
                    this.moveSpritecount++;
                }
            }
            else if (objects.Game.keyboardManager.moveRight) {
                this.previousX = this.x;
                this.previousY = this.y;
                this.MoveRight();
                if (!this.isHidePlayer) {
                    this.ChangeSprite("playerr" + this.moveSpritecount);
                    this.moveSpritecount++;
                }
            }
            else if (objects.Game.keyboardManager.moveUp) {
                this.previousX = this.x;
                this.previousY = this.y;
                this.MoveUp();
                if (!this.isHidePlayer) {
                    this.ChangeSprite("playeru" + this.moveSpritecount);
                    this.moveSpritecount++;
                }
            }
            else if (objects.Game.keyboardManager.moveDown) {
                this.previousX = this.x;
                this.previousY = this.y;
                this.MoveDown();
                if (!this.isHidePlayer) {
                    this.ChangeSprite("playerd" + this.moveSpritecount);
                    this.moveSpritecount++;
                }
            }
            else if (objects.Game.keyboardManager.space) {
                this.isShowImage = false;
            }
            if (this.moveSpritecount > this.maxSpriteX) {
                this.moveSpritecount = 0;
            }
            objects.Game.logBoard.Logs = "x : " + this.x + " y : " + this.y;
        };
        Player.prototype.hidePlayer = function () {
            this.isHidePlayer = true;
            this.moveSpritecount = 0;
            this.ChangeSprite("playerhide");
        };
        Player.prototype.MoveUp = function () {
            this.y -= this.scaleOfStepY;
            //  this.SpriteNumber(ePlayerMovment.up + this.moveSpritecount);
        };
        Player.prototype.MoveDown = function () {
            this.y += this.scaleOfStepY;
            //  this.SpriteNumber(ePlayerMovment.down + this.moveSpritecount);
            //  this.x = 100 - (kwidth * this.moveSpritecount);//( this.SpriteNumber(ePlayerMovment.down + this.moveSpritecount));
        };
        Player.prototype.MoveLeft = function () {
            this.x -= this.scaleOfStepX;
            // this.SpriteNumber(ePlayerMovment.left + this.moveSpritecount);
        };
        Player.prototype.MoveRight = function () {
            this.x += this.scaleOfStepX;
            //this.SpriteNumber(ePlayerMovment.right + this.moveSpritecount);
        };
        // public Idle()
        // {
        //     this.SpriteNumber(ePlayerMovment.idle);
        // } 
        Player.prototype.CheckBounds = function () {
            // Check right boundary
            if (this.x >= 1120 - this.halfW) {
                this.x = 1120 - this.halfW;
            }
            // Check left boundary
            if (this.x <= this.halfW) {
                this.x = this.halfW;
            }
            if (this.y <= this.halfH) {
                this.y = this.halfH;
            }
            if (this.y >= 638 - this.halfH) {
                this.y = 636 - this.halfH;
            }
        };
        return Player;
    }(objects.GameObject));
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=player.js.map