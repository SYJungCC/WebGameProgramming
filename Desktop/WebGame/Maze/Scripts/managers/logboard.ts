module managers {
    export class LogBoard {
        // Variables
        public logLabel: objects.Label;

        // Public properties
        private logs: string;

      // Public properties
         get Logs():string {
            return this.logs;
        }
         set Logs(newLogs:string) {
            this.logs = "Logs: " + newLogs;
            this.logLabel.text = this.logs;
        }

        // Constructor
        constructor() {
            this.Init();
        }
        
        // Methods
        private Init():void {
            this.logLabel = new objects.Label("Logs: ", "20px", "Consolas", "#FF0000", 10, 40, false);
        }
    }
}