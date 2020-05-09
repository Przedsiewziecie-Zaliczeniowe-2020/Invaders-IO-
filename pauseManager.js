class PauseManager {
    isGamePaused = false;

    pauseGame() {
        this.isGamePaused = true;
        noLoop();
    }

    unPauseGame() {
        this.isGamePaused = false;
        loop();
    }

    pauseGameAndShowText() {
        this.pauseGame();

        background(0, 0, 0, 70);
        fill(255, 255, 255);
        textSize(50);
        textAlign(CENTER, CENTER);
        text('game paused', RES_PARAMS.canvasWidth / 2, RES_PARAMS.canvasHeight / 2);
    }

}