module managers {
    export class Keyboard {
        public moveUp: boolean;
        public moveDown: boolean;
        public moveLeft: boolean;
        public moveRight: boolean;
        public space: boolean;
        public shoot: boolean;
        public enabled: boolean;
        public pause: boolean;
        public pressed: boolean = false;
        public prevKeyCode:config.Keys = config.Keys.SPACE;

        // Constructor
        constructor() {
            document.addEventListener("keydown", this.onKeyDown.bind(this), false);
            document.addEventListener("keyup", this.onKeyUp.bind(this), false);
        }

        // Methods
        public onKeyDown(event:KeyboardEvent):void { 

            switch(event.keyCode) {
                case config.Keys.W:
                case config.Keys.UP_ARROW:
                    this.moveUp = true;
                break;
                case config.Keys.A:
                case config.Keys.LEFT_ARROW:
                    this.moveLeft = true;
                break;
                case config.Keys.S:
                case config.Keys.DOWN_ARROW:
                    this.moveDown = true;
                break;
                case config.Keys.D:
                case config.Keys.RIGHT_ARROW:
                    this.moveRight = true;
                break;
                case config.Keys.SPACE:
                        this.space = true; 
                        // objects.Game.currentScene = config.Scene.OVER;
                    break;
            }
        }

        public onKeyUp(event:KeyboardEvent):void {
          //  this.pressed = false;

            switch(event.keyCode) {
                case config.Keys.W:
                case config.Keys.UP_ARROW:
                    this.moveUp = false;
                break;
                case config.Keys.A:
                case config.Keys.LEFT_ARROW:
                    this.moveLeft = false;
                break;
                case config.Keys.S:
                case config.Keys.DOWN_ARROW:
                    this.moveDown = false;
                break;
                case config.Keys.D:
                case config.Keys.RIGHT_ARROW:
                    this.moveRight = false;
                break;
                case config.Keys.SPACE:
                     this.space = false; 
                break;
            }
        }
    }
}