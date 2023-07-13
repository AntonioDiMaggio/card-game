namespace DankEngine
{
    export class Engine
    {
        private tick: number = 0;
        private previousTime: number = performance.now();
        private timeTillFPSUpdate: number = 0.25;
        private currentTimeTillFPSUpdate: number = this.timeTillFPSUpdate;

        public Engine()
        {

        }

        public start(): void
        {
            this.loop();
        }

        private loop(): void
        {
            let deltaTime = performance.now() - this.previousTime;
            deltaTime *= 0.001;
            let fps = 1 / deltaTime;
            if(this.timeTillFPSUpdate < this.currentTimeTillFPSUpdate)
            {
                document.body.innerHTML = Math.round(fps).toString();
                this.currentTimeTillFPSUpdate = 0;
            }
            this.previousTime = performance.now();
            this.tick++;
            this.currentTimeTillFPSUpdate += deltaTime;
            requestAnimationFrame(this.loop.bind(this));
        }
    }
}

window.onload = function()
{
    let gameEngine = new DankEngine.Engine();
    gameEngine.start();
}