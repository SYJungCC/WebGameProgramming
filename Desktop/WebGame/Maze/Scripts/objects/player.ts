module objects {
    // export enum ePlayerMovment {
    //     down = 0,
    //     idle = 1,
    //     left = 3,
    //     right = 6,
    //     up = 9,
    // }
    export class Player extends objects.GameObject {
        // Variables
        //public isDead:boolean;
        public isShowImage:boolean; 
 
        private moveSpritecount:number = 0; 
        private maxSpriteX:number = 2; 
        private maxSpriteY:number = 4; 
        private scaleOfStepX:number = 8; 
        private scaleOfStepY:number = 8; 

        public posRight:number = 0; 
        public posLeft:number = 0; 
        public posUp:number = 0; 
        public posDown:number = 0; 

        public previousX = 0; 
        public previousY = 0; 

        public isHidePlayer = false; 
        // Constructor
        constructor(assetManager:createjs.LoadQueue) {
            super(assetManager, "playerd1");

            this.Init(this.maxSpriteX,this.maxSpriteY);
            this.Start();
        }
        // Methods / functions
        public Start():void {
           // this.isDead = false;
            this.isShowImage= false; 
            this.initPostion();
        }

        public initPostion()
        {
            this.x = 976;
            this.y = 48;
        }

        public Update():void {
            this.Move();
            this.CheckBounds();

           // Game.logBoard.Logs = String("X : " + this.x + " Y : " + this.y);
        }

        public Reset():void {}

        public Move():void {
            // this.x = objects.Game.stage.mouseX; // objects.Game.stage is a global variable
            // Keyboard controls

            if(objects.Game.keyboardManager.moveLeft) {
                this.previousX = this.x;
                this.previousY = this.y;
        
                this.MoveLeft();
                if(!this.isHidePlayer)
                {
                    this.ChangeSprite("playerl"+ this.moveSpritecount);
                    this.moveSpritecount++;
                }
            }
            else if(objects.Game.keyboardManager.moveRight) {
                this.previousX = this.x;
                this.previousY = this.y;
        
                this.MoveRight();
                if(!this.isHidePlayer)
                {
                    this.ChangeSprite("playerr"+ this.moveSpritecount);
                    this.moveSpritecount++;
                }
    
            }
            else if(objects.Game.keyboardManager.moveUp) {
                this.previousX = this.x;
                this.previousY = this.y;
        
                this.MoveUp();
                if(!this.isHidePlayer)
                {
                    this.ChangeSprite("playeru"+ this.moveSpritecount);
                    this.moveSpritecount++;
                }
            }
            else if(objects.Game.keyboardManager.moveDown) {
                this.previousX = this.x;
                this.previousY = this.y;
        
                this.MoveDown()
                if(!this.isHidePlayer)
                {
                    this.ChangeSprite("playerd"+ this.moveSpritecount);
                    this.moveSpritecount++;
                }
            }
            else if(objects.Game.keyboardManager.space) {
                this.isShowImage = false; 
            }

            if(this.moveSpritecount  > this.maxSpriteX )
            {
                this.moveSpritecount = 0;
            }
            Game.logBoard.Logs = "x : " + this.x + " y : " + this.y;

        }

        public hidePlayer()
        {
            this.isHidePlayer = true; 
            this.moveSpritecount = 0;
            this.ChangeSprite("playerhide");
        }
        
        public MoveUp()
        {
            this.y -= this.scaleOfStepY;
          //  this.SpriteNumber(ePlayerMovment.up + this.moveSpritecount);
        }
        
        public MoveDown()
        {
            this.y += this.scaleOfStepY;
          //  this.SpriteNumber(ePlayerMovment.down + this.moveSpritecount);
          //  this.x = 100 - (kwidth * this.moveSpritecount);//( this.SpriteNumber(ePlayerMovment.down + this.moveSpritecount));
        }

        public MoveLeft()
        {
            this.x -= this.scaleOfStepX;
           // this.SpriteNumber(ePlayerMovment.left + this.moveSpritecount);
        }

        public MoveRight()
        {
            this.x += this.scaleOfStepX;
            //this.SpriteNumber(ePlayerMovment.right + this.moveSpritecount);
        }

        // public Idle()
        // {
        //     this.SpriteNumber(ePlayerMovment.idle);
        // } 
        public CheckBounds():void {
         
            // Check right boundary
            if(this.x >= 1120 - this.halfW) {
                this.x = 1120 - this.halfW;
            }

            // Check left boundary
            if(this.x <= this.halfW) {
                this.x = this.halfW;
            }

            if(this.y <= this.halfH) {
                this.y = this.halfH;
            }

            if(this.y >= 638 - this.halfH) {
                this.y = 636 - this.halfH;
            }
        }
    }
}