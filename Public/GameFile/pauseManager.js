class PauseManager {
    isGamePaused = false;
    pauseTextType = 'none';

    pauseGame() {
         this.isGamePaused = true;
         noLoop();
    }

    unPauseGame() {
        this.isGamePaused = false;
       loop();
    }

    pauseGameAndSetPauseTextFlag(pauseType) {
        this.pauseGame();
       this.pauseTextType = pauseType;
    }

    attemptShowPauseText()
    {
        if(this.pauseTextType === 'none') return;

        if(this.pauseTextType === 'pause'){
            this.pauseTextType = 'none';
            this.showGamePausedText();
            return;
        }
        if(this.pauseTextType === 'game over'){
            this.pauseTextType = 'none';
            this.showGameOverText();
            return;
        }
    }

    showGamePausedText(){
        let info ='click to resume';
        background(0, 0, 0, 150);
        fill(0, 249, 255);
        textSize(50);
        textAlign(CENTER, CENTER);
        text('Game Paused', RES_PARAMS.canvasWidth / 2, RES_PARAMS.canvasHeight / 2);
        fill(230, 230, 230);
        textSize(20);
        textAlign(CENTER, CENTER);
        text(info, RES_PARAMS.canvasWidth/2, RES_PARAMS.canvasHeight/2+50);

    }

    showGameOverText(){
        background(0, 0, 0, 150);
        fill(240, 0, 0);
        textSize(50);
        textAlign(CENTER, CENTER);
        text('Game Over', RES_PARAMS.canvasWidth / 2, RES_PARAMS.canvasHeight / 2);
        fill(230, 230, 230);
        textSize(20);
        textAlign(CENTER, CENTER);
        text('click to play again', RES_PARAMS.canvasWidth/2, RES_PARAMS.canvasHeight/2+50);
    }

}
