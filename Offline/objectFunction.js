
function prepareBgStars(bgStars, countBgStars) {
    for (let i = 0; i < countBgStars; i++) {
        bgStars[i] = new BgStar();
    }
};

function showPlayerLives(livesAmount) {
    fill(0, 159, 232, 150)
    strokeWeight(3);
    stroke(0, 159, 232)
    rect(width - 148, 0, 150, 50, 0, 0, 0, 15)
    noStroke();

    if (livesAmount === 0 || PAUSE_MANAGER.pauseTextType === 'game over') {
        return
    }
    if (livesAmount === 1) {
        image(IMGS.playerShip, (width - 148) + 15, 5, 31, 35);
        return;
    }
    if (livesAmount === 2) {
        image(IMGS.playerShip, (width - 148) + 15, 5, 31, 35);
        image(IMGS.playerShip, (width - 148) + 56, 5, 31, 35);
        return;
    }

    if (livesAmount === 3) {
        image(IMGS.playerShip, (width - 148) + 15, 5, 31, 35);
        image(IMGS.playerShip, (width - 148) + 56, 5, 31, 35);
        image(IMGS.playerShip, (width - 148) + 97, 5, 31, 35);
        return;
    }
}


function moveAndDrawBgStars(bgStars, countBgStars) {
    for (let i = 0; i < countBgStars; i++) {
        bgStars[i].show();
        bgStars[i].move();
        bgStars[i].update();
    }
};


function playerActionFunction(ship, playerShots) {
    ship.show();
    ship.update();


    for (let i = 0; i < playerShots.length; i++) {
        playerShots[i].show();
        playerShots[i].move();
    }

}


