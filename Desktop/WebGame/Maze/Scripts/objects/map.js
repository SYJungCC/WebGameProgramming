var objects;
(function (objects) {
    var eBrickType;
    (function (eBrickType) {
        eBrickType[eBrickType["start"] = 0] = "start";
        eBrickType[eBrickType["goal"] = 1] = "goal";
        eBrickType[eBrickType["canWalk"] = 11] = "canWalk";
        eBrickType[eBrickType["canWalkbutHide"] = 22] = "canWalkbutHide";
        eBrickType[eBrickType["canWalkandShowHalf"] = 33] = "canWalkandShowHalf";
        eBrickType[eBrickType["showImage"] = 66] = "showImage";
        eBrickType[eBrickType["trap"] = 77] = "trap";
        eBrickType[eBrickType["cannotwalk"] = 99] = "cannotwalk";
    })(eBrickType = objects.eBrickType || (objects.eBrickType = {}));
    var maps = /** @class */ (function () {
        function maps() {
            this.mapSizeX = 35;
            this.mapSizeY = 20;
            this.wave1 = new Array(99, 99, 99, 66, 66, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 44, 99, 99, 99, 99, 99, 99, 99, 99, 77, 99, 11, 22, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 11, 99, 99, 0, 11, 11, 11, 99, 99, 11, 99, 11, 99, 99, 99, 11, 11, 11, 99, 11, 22, 22, 11, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 11, 99, 99, 99, 99, 99, 11, 99, 99, 11, 99, 11, 99, 99, 11, 22, 99, 22, 11, 11, 99, 99, 11, 99, 99, 99, 99, 99, 99, 99, 11, 22, 22, 11, 22, 22, 22, 22, 22, 11, 22, 22, 99, 99, 11, 99, 11, 11, 11, 22, 99, 99, 99, 99, 99, 99, 99, 22, 11, 99, 99, 99, 99, 99, 11, 22, 99, 99, 11, 99, 99, 99, 99, 99, 11, 99, 99, 99, 99, 11, 99, 11, 99, 11, 99, 99, 99, 99, 99, 99, 99, 99, 99, 22, 11, 99, 99, 99, 11, 22, 99, 99, 99, 11, 99, 99, 77, 99, 99, 11, 99, 99, 99, 99, 11, 99, 11, 99, 22, 11, 99, 99, 99, 99, 99, 99, 99, 99, 99, 22, 11, 99, 11, 22, 99, 99, 99, 99, 11, 99, 99, 11, 99, 99, 11, 99, 77, 99, 99, 11, 22, 22, 99, 99, 22, 22, 22, 22, 11, 99, 99, 99, 99, 99, 99, 22, 11, 22, 99, 99, 99, 77, 99, 11, 11, 11, 11, 99, 11, 11, 99, 11, 99, 99, 22, 99, 99, 99, 99, 99, 99, 99, 99, 22, 11, 99, 99, 99, 99, 99, 99, 11, 99, 99, 99, 99, 11, 99, 22, 22, 22, 22, 99, 22, 22, 99, 11, 99, 99, 99, 22, 11, 22, 99, 99, 99, 99, 99, 99, 11, 99, 99, 11, 99, 99, 99, 11, 99, 99, 99, 99, 11, 99, 99, 99, 99, 99, 99, 99, 99, 99, 11, 99, 99, 11, 99, 99, 99, 11, 99, 99, 99, 99, 99, 11, 99, 99, 11, 99, 99, 99, 11, 99, 99, 99, 99, 11, 11, 11, 22, 22, 22, 11, 11, 22, 22, 11, 99, 99, 11, 11, 11, 11, 11, 11, 99, 99, 99, 11, 22, 99, 99, 11, 99, 99, 99, 11, 99, 11, 22, 22, 11, 99, 11, 99, 99, 99, 22, 11, 99, 99, 11, 99, 99, 11, 99, 11, 99, 99, 22, 11, 11, 11, 22, 99, 99, 99, 11, 99, 99, 99, 22, 99, 22, 99, 99, 11, 99, 22, 22, 11, 99, 99, 11, 99, 11, 22, 99, 99, 11, 99, 11, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 11, 99, 99, 99, 99, 99, 99, 99, 99, 11, 99, 99, 99, 11, 99, 11, 22, 99, 11, 99, 99, 99, 11, 99, 11, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 11, 99, 99, 11, 22, 11, 11, 11, 11, 11, 99, 11, 11, 11, 99, 11, 99, 99, 22, 11, 99, 99, 11, 99, 11, 22, 22, 11, 99, 99, 99, 22, 22, 11, 22, 11, 99, 99, 11, 99, 11, 22, 99, 99, 11, 99, 11, 99, 99, 99, 11, 11, 99, 99, 11, 99, 99, 11, 99, 22, 99, 99, 22, 22, 22, 22, 99, 99, 11, 99, 11, 99, 99, 11, 99, 11, 99, 99, 99, 11, 99, 11, 99, 99, 99, 22, 22, 99, 99, 11, 99, 99, 11, 99, 99, 99, 99, 99, 99, 99, 99, 11, 22, 22, 99, 11, 99, 99, 11, 99, 11, 99, 99, 11, 11, 99, 11, 99, 99, 99, 99, 99, 99, 11, 22, 99, 99, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 99, 99, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 99, 22, 22, 22, 22, 99, 22, 22, 22, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 1, 99, 99);
        }
        return maps;
    }());
    objects.maps = maps;
})(objects || (objects = {}));
//# sourceMappingURL=map.js.map