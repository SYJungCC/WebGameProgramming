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
    var Yeah = /** @class */ (function (_super) {
        __extends(Yeah, _super);
        // Variables
        // Constructor
        function Yeah(assetManager) {
            var _this = _super.call(this, assetManager.getResult("yeah")) || this;
            _this.Start();
            return _this;
        }
        // Methods / Function
        Yeah.prototype.Start = function () {
            this.Reset();
        };
        Yeah.prototype.Reset = function () {
            this.x = 400;
            this.y = -3000;
        };
        Yeah.prototype.Show = function () {
            this.y = 70;
        };
        Yeah.prototype.Hide = function () {
            this.y = -3000;
        };
        return Yeah;
    }(createjs.Bitmap));
    objects.Yeah = Yeah;
})(objects || (objects = {}));
//# sourceMappingURL=yeah.js.map