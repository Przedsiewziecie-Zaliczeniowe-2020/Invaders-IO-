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
            var info ='(click the screen to play)';
            textFont(FONTS.sairaFont);
            background(0, 0, 0, 150);
            fill(0, 249, 255);
            textSize(50);
            textAlign(CENTER, CENTER);
            text('Game Paused', RES_PARAMS.canvasWidth / 2, RES_PARAMS.canvasHeight / 2);
            textSize(30);
            fill(255, 255, 255);
            text(info, RES_PARAMS.canvasWidth/2, RES_PARAMS.canvasHeight/2+50);



        }
    }

}
