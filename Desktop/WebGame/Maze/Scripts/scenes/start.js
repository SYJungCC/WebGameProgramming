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
    var StartScene = /** @class */ (function (_super) {
        __extends(StartScene, _super);
        // Constructors
        function StartScene(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.Start();
            return _this;
        }
        // Methods
        StartScene.prototype.startButtonClick = function () {
            objects.Game.currentScene = config.Scene.GAME;
        };
        // Use start function to create objects
        StartScene.prototype.Start = function () {
            this.background = new objects.Background(this.assetManager);
            this.welcomeLabel = new objects.Label("Maze : I need to rest", "60px", "Consolas", "#FFFFFF", 565, 240, true);
            this.welcomeLabel1 = new objects.Label("Maze : I need to rest", "60px", "Consolas", "#000000", 560, 237, true);
            this.nameLabel = new objects.Label("SeoYoung Jung(300981742)", "30px", "Consolas", "#000000", 550, 300, true);
            this.nameLabel1 = new objects.Label("SeoYoung Jung(300981742)", "30px", "Consolas", "#FFFFFF", 548, 298, true);
            this.startButton = new objects.Button(this.assetManager, "startButton", 550, 450);
            this.Main();
        };
        StartScene.prototype.Update = function () {
            this.background.Update();
        };
        StartScene.prototype.Main = function () {
            this.addChild(this.background);
            this.addChild(this.welcomeLabel);
            this.addChild(this.welcomeLabel1);
            this.addChild(this.nameLabel);
            this.addChild(this.nameLabel1);
            this.addChild(this.startButton);
            this.startButton.on("click", this.startButtonClick);
        };
        return StartScene;
    }(objects.Scene));
    scenes.StartScene = StartScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=start.js.map