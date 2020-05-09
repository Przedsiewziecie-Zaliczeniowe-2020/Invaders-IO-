class PauseManager {
    isGamePaused = false;
    isPauseTextOn = false;

    pauseGame() {
        this.isGamePaused = true;
        noLoop();
    }

    unPauseGame() {
        this.isGamePaused = false;
        loop();
    }

    pauseGameAndSetPauseTextFlag() {
        this.pauseGame();
        this.isPauseTextOn = true;
    }

    attemptShowPauseText()
    {
        if(this.isPauseTextOn){
            this.isPauseTextOn = false;
            background(0, 0, 0, 70);
            fill(255, 255, 255);
            textSize(50);
            textAlign(CENTER, CENTER);
            text('game paused', RES_PARAMS.canvasWidth / 2, RES_PARAMS.canvasHeight / 2);
        }
    }

}