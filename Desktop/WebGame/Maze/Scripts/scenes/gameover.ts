module scenes {
    export class GameOverScene extends objects.Scene {
        // Variables
        private gameOverLabel: objects.Label[];
        private background : objects.Background;
        private backButton: objects.Button;

        // Constructor
        constructor(assetManager: createjs.LoadQueue) {
            super(assetManager);

            this.Start();
        }
        // Methods
        // Button Event Handlers
        private backButtonClick():void {
            objects.Game.currentScene = config.Scene.START;
        }


        public Start():void {

            this.gameOverLabel = new Array<objects.Label>();


            this.background = new objects.Background(this.assetManager);
            this.gameOverLabel[0] = new objects.Label("SeoYoung Jung(300981742)", "30px", "Consolas", "#FFFFFF", 548,298, true);
            this.gameOverLabel[5] = new objects.Label("SeoYoung Jung(300981742)", "30px", "Consolas", "#000000", 548,300, true);

            this.gameOverLabel[1]  = new objects.Label("Congratuation!", "60px", "Consolas", "#000000", 565, 140, true);
            this.gameOverLabel[2] = new objects.Label("Congratuation!", "60px", "Consolas", "#FFFFFF", 565, 135, true);
            this.gameOverLabel[3]  = new objects.Label("you finally came out the maze!", "40px", "Consolas", "#FFFFFF", 560, 240, true);
            this.gameOverLabel[4]  = new objects.Label("you finally came out the maze!", "40px", "Consolas", "#000000", 556, 235, true);

            this.backButton = new objects.Button(this.assetManager, "backButton",550, 450);
            this.Main();
        }

        public Update(): void {

        }

        public Main(): void {
            this.addChild(this.background);
            this.gameOverLabel.forEach(lebel => {
                this.addChild(lebel);
            });
            this.addChild(this.backButton);
            this.backButton.on("click", this.backButtonClick);
        }
    }
}