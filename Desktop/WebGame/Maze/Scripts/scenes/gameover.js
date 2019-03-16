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
    var GameOverScene = /** @class */ (function (_super) {
        __extends(GameOverScene, _super);
        // Constructor
        function GameOverScene(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.Start();
            return _this;
        }
        // Methods
        // Button Event Handlers
        GameOverScene.prototype.backButtonClick = function () {
            objects.Game.currentScene = config.Scene.START;
        };
        GameOverScene.prototype.Start = function () {
            this.gameOverLabel = new Array();
            this.background = new objects.Background(this.assetManager);
            this.gameOverLabel[0] = new objects.Label("SeoYoung Jung(300981742)", "30px", "Consolas", "#FFFFFF", 548, 298, true);
            this.gameOverLabel[5] = new objects.Label("SeoYoung Jung(300981742)", "30px", "Consolas", "#000000", 548, 300, true);
            this.gameOverLabel[1] = new objects.Label("Congratuation!", "60px", "Consolas", "#000000", 565, 140, true);
            this.gameOverLabel[2] = new objects.Label("Congratuation!", "60px", "Consolas", "#FFFFFF", 565, 135, true);
            this.gameOverLabel[3] = new objects.Label("you finally came out the maze!", "40px", "Consolas", "#FFFFFF", 560, 240, true);
            this.gameOverLabel[4] = new objects.Label("you finally came out the maze!", "40px", "Consolas", "#000000", 556, 235, true);
            this.backButton = new objects.Button(this.assetManager, "backButton", 550, 450);
            this.Main();
        };
        GameOverScene.prototype.Update = function () {
        };
        GameOverScene.prototype.Main = function () {
            var _this = this;
            this.addChild(this.background);
            this.gameOverLabel.forEach(function (lebel) {
                _this.addChild(lebel);
            });
            this.addChild(this.backButton);
            this.backButton.on("click", this.backButtonClick);
        };
        return GameOverScene;
    }(objects.Scene));
    scenes.GameOverScene = GameOverScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=gameover.js.map