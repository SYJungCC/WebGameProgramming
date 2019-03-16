var managers;
(function (managers) {
    var LogBoard = /** @class */ (function () {
        // Constructor
        function LogBoard() {
            this.Init();
        }
        Object.defineProperty(LogBoard.prototype, "Logs", {
            // Public properties
            get: function () {
                return this.logs;
            },
            set: function (newLogs) {
                this.logs = "Logs: " + newLogs;
                this.logLabel.text = this.logs;
            },
            enumerable: true,
            configurable: true
        });
        // Methods
        LogBoard.prototype.Init = function () {
            this.logLabel = new objects.Label("Logs: ", "20px", "Consolas", "#FF0000", 10, 40, false);
        };
        return LogBoard;
    }());
    managers.LogBoard = LogBoard;
})(managers || (managers = {}));
//# sourceMappingURL=logboard.js.map