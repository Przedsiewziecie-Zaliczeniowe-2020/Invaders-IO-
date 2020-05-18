// TODO mozna pousuwac troche tych funkcji


function prepareBgStars(bgStars,countBgStars) {
    for (let i = 0; i < countBgStars; i++) {
        bgStars[i] = new BgStar();
    }
};



function moveAndDrawBgStars(bgStars,countBgStars) {
    for (let i = 0; i < countBgStars; i++) {
        bgStars[i].show();
        bgStars[i].move();
        bgStars[i].update();
    }
};




function playerActionFunction(ship,playerShots) {
    ship.show();
    ship.update();


    for (let i = 0; i < playerShots.length; i++) {
        playerShots[i].show();
        playerShots[i].move();
    }

}


