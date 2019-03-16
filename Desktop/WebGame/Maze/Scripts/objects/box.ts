module objects {
    export class Box extends objects.GameObject {
        // Variables
        public brickType : eBrickType;
        public countX : number; 
        public countY : number; 

        public getBrickType()
        {
            return this.brickType;
        }
        public setBrickType(type :eBrickType) 
        {
            this.brickType = type; 
        }


        // Constructor
        constructor(assetManager:createjs.LoadQueue) {
            super(assetManager, "brick");
            this.Start();
        }
        // Method / Functions
        public Start():void {
        }


        public Update():void {
            this.CheckBounds();
        }
        public Reset():void {}
        public CheckBounds():void {

        }
    }
}