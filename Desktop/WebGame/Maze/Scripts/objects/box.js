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
    var Box = /** @class */ (function (_super) {
        __extends(Box, _super);
        // Constructor
        function Box(assetManager) {
            var _this = _super.call(this, assetManager, "brick") || this;
            _this.Start();
            return _this;
        }
        Box.prototype.getBrickType = function () {
            return this.brickType;
        };
        Box.prototype.setBrickType = function (type) {
            this.brickType = type;
        };
        // Method / Functions
        Box.prototype.Start = function () {
        };
        Box.prototype.Update = function () {
            this.CheckBounds();
        };
        Box.prototype.Reset = function () { };
        Box.prototype.CheckBounds = function () {
        };
        return Box;
    }(objects.GameObject));
    objects.Box = Box;
})(objects || (objects = {}));
//# sourceMappingURL=box.js.map