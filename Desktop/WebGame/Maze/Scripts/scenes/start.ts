module scenes {
    export class StartScene extends objects.Scene {
        // Variables
        private welcomeLabel: objects.Label;
        private welcomeLabel1: objects.Label;
        private nameLabel: objects.Label;
        private nameLabel1: objects.Label;
        private startButton: objects.Button;
        private background: objects.Background;

        // Constructors
        constructor(assetManager: createjs.LoadQueue) {
            super(assetManager);

            this.Start();
        }
        // Methods
        private startButtonClick():void {
            objects.Game.currentScene = config.Scene.GAME;
        }

        // Use start function to create objects
        public Start(): void {
            this.background = new objects.Background(this.assetManager);
            this.welcomeLabel = new objects.Label("Maze : I need to rest", "60px", "Consolas", "#FFFFFF", 565, 240, true);
            this.welcomeLabel1 = new objects.Label("Maze : I need to rest", "60px", "Consolas", "#000000", 560, 237, true);
            this.nameLabel = new objects.Label("SeoYoung Jung(300981742)", "30px", "Consolas", "#000000", 550, 300, true);
            this.nameLabel1 = new objects.Label("SeoYoung Jung(300981742)", "30px", "Consolas", "#FFFFFF", 548,298, true);
            this.startButton = new objects.Button(this.assetManager, "startButton", 550, 450);
            this.Main();
        }

        public Update(): void {
            this.background.Update();
        }

        public Main(): void {
            this.addChild(this.background);
            this.addChild(this.welcomeLabel);
            this.addChild(this.welcomeLabel1);
            this.addChild(this.nameLabel);
            this.addChild(this.nameLabel1);

            this.addChild(this.startButton);
            this.startButton.on("click", this.startButtonClick);
        }
    }
}