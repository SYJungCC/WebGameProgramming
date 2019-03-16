var managers;
(function (managers) {
    var Collision = /** @class */ (function () {
        function Collision() {
        }
        Collision.Check = function (obj1, obj2) {
            // Create 2 temporary Vec2 objects used for collision detections
            var p1 = new math.Vec2(obj1.x, obj1.y);
            var p2 = new math.Vec2(obj2.x, obj2.y);
            if (math.Vec2.Distance(p1, p2) < (obj1.halfH + obj2.halfH)) {
                if (!obj2.isColliding) {
                    // console.log("Colliding with " + obj2.name);
                    switch (obj2.name) {
                        case "enemy":
                            this.explodeSFX = createjs.Sound.play("explode");
                            this.explodeSFX.volume = 0.1;
                            objects.Game.scoreBoard.Score += 50;
                            break;
                    }
                    obj2.isColliding = true;
                }
                return true;
            }
            else {
                obj2.isColliding = false;
                return false;
            }
        };
        Collision.AABBCheck = function (obj1, obj2) {
            if (obj1.x - obj1.halfW < (obj2.x + obj2.width) && (obj1.x + obj1.halfW) > obj2.x &&
                obj1.y - obj1.halfH < (obj2.y + obj2.height) && (obj1.y + obj1.halfH) > obj2.y) {
                objects.Game.logBoard.Logs = "Player X : " + obj1.x + " Player Y" + obj1.y
                    + "\n\nBrick X : " + obj2.x + " Brick Y" + obj2.y
                    + "\n\nBrick Type : " + obj2.brickType;
                switch (obj2.getBrickType()) {
                    case objects.eBrickType.goal: return true;
                    case objects.eBrickType.canWalkbutHide:
                        obj1.hidePlayer();
                        break;
                    case objects.eBrickType.canWalkandShowHalf:
                        break;
                    case objects.eBrickType.showImage:
                        if (!obj1.isShowImage) //show image
                            obj1.isShowImage = true;
                        break;
                    case objects.eBrickType.trap:
                        obj1.initPostion();
                        break;
                    case objects.eBrickType.cannotwalk:
                        obj1.x = obj1.previousX;
                        obj1.y = obj1.previousY;
                        return false;
                }
            }
            obj1.isHidePlayer = false;
            return false;
        };
        return Collision;
    }());
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collisions.js.map