module objects {
    export class Yeah extends createjs.Bitmap {
        // Variables
        // Constructor
        constructor(assetManager: createjs.LoadQueue) {
            super(assetManager.getResult("yeah"));

            this.Start();
        }
        // Methods / Function
        public Start():void {
            this.Reset();
        }

 
        private Reset():void {
            this.x = 400;
            this.y = -3000;
        }

        public Show():void
        {
            this.y = 70;
        }

        public Hide():void{
            this.y = -3000;
        }
 
    }
}