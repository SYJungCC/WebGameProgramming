module objects {
    export class GameObject extends createjs.Bitmap {
        // Variables
        protected speedX: number;
        protected speedY: number;

        private spriteNumberX:number;
        private spriteNumberY:number;
        
        public width:number;
        public height:number;
        public halfW:number;
        public halfH:number;
        public isColliding:boolean;
        public numberOfWidth:number; 
        public numberOfHeight:number;
        private assetManager: createjs.LoadQueue;
     
        public setPosition(x:number,y:number)
        {
            this.x = x; 
            this.y = y; 
        }
      
        public setSize(sizeX:number,sizeY:number)
        {
            this.width =sizeX; 
            this.height = sizeY;
        }


        // Constructor
        constructor(assetManager: createjs.LoadQueue, imageString:string) {
            super(assetManager.getResult(imageString)); 
            this.assetManager = assetManager;
            this.name = imageString;
        }

        // Methods / Functions
        protected Init(numberOfWidth:number = 1, numberOfHeight:number = 1):void {
            this.numberOfWidth = numberOfWidth;
            this.numberOfHeight = numberOfHeight;
            /*
            this.width = this.getBounds().width / this.numberOfWidth;
            this.height = this.getBounds().height / this.numberOfHeight;
            */
            
           this.width = this.getBounds().width;
           this.height = this.getBounds().height;

            this.halfW = this.width * 0.5;
            this.halfH = this.height * 0.5;
            
            this.regX = this.halfW;
            this.regY = this.halfH;
            this.isColliding = false;
        }
       
        public SpriteNumber(spriteNumber:number)
        {  
            this.spriteNumberX = Math.floor( spriteNumber % this.numberOfWidth);
            this.spriteNumberY = Math.floor(spriteNumber / this.numberOfWidth);
            this.cache(this.spriteNumberX * this.width, this.spriteNumberY * this.height,  this.width , this.height );
            Game.logBoard.Logs = "wedith : " + this.getBounds().width + " height : " + this.getBounds().height; 

        }

        public ChangeSprite(imageString:string)
        {
            let replaceImage = new createjs.Bitmap(this.assetManager.getResult(imageString));
            this.image = replaceImage.image;
            this.name = imageString;
        }

        public Start():void {}
        public Update():void {}
        public Reset():void {}
        public CheckBounds():void {}
        public Move():void {}
    }
}