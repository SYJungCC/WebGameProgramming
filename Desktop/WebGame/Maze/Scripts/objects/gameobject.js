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
    var GameObject = /** @class */ (function (_super) {
        __extends(GameObject, _super);
        // Constructor
        function GameObject(assetManager, imageString) {
            var _this = _super.call(this, assetManager.getResult(imageString)) || this;
            _this.assetManager = assetManager;
            _this.name = imageString;
            return _this;
        }
        GameObject.prototype.setPosition = function (x, y) {
            this.x = x;
            this.y = y;
        };
        GameObject.prototype.setSize = function (sizeX, sizeY) {
            this.width = sizeX;
            this.height = sizeY;
        };
        // Methods / Functions
        GameObject.prototype.Init = function (numberOfWidth, numberOfHeight) {
            if (numberOfWidth === void 0) { numberOfWidth = 1; }
            if (numberOfHeight === void 0) { numberOfHeight = 1; }
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
        };
        GameObject.prototype.SpriteNumber = function (spriteNumber) {
            this.spriteNumberX = Math.floor(spriteNumber % this.numberOfWidth);
            this.spriteNumberY = Math.floor(spriteNumber / this.numberOfWidth);
            this.cache(this.spriteNumberX * this.width, this.spriteNumberY * this.height, this.width, this.height);
            objects.Game.logBoard.Logs = "wedith : " + this.getBounds().width + " height : " + this.getBounds().height;
        };
        GameObject.prototype.ChangeSprite = function (imageString) {
            var replaceImage = new createjs.Bitmap(this.assetManager.getResult(imageString));
            this.image = replaceImage.image;
            this.name = imageString;
        };
        GameObject.prototype.Start = function () { };
        GameObject.prototype.Update = function () { };
        GameObject.prototype.Reset = function () { };
        GameObject.prototype.CheckBounds = function () { };
        GameObject.prototype.Move = function () { };
        return GameObject;
    }(createjs.Bitmap));
    objects.GameObject = GameObject;
})(objects || (objects = {}));
//# sourceMappingURL=gameobject.js.map