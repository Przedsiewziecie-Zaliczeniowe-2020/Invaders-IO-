function prepareasteroid(x,y,number,asteroid) {
    for (let i = 0; i <number; i++) {

        asteroid[i] = new Asteroid(x,y,ASTEROID_IMG);
    }

}
function prepareBgStars(bgStars,countBgStars) {
    for (let i = 0; i < countBgStars; i++) {
        bgStars[i] = new BgStar();
    }
};

function prepareEnemies(enemies,enemyShots) {
    for (let i = 0; i < 6; i++) {
        enemies.push(new Enemy(100 + (i * 150), 100, 0.1, enemyShots))
    }
};

function moveAndDrawBgStars(bgStars,countBgStars) {
    for (let i = 0; i < countBgStars; i++) {
        bgStars[i].show();
        bgStars[i].move();
        bgStars[i].update();
    }
};

function neutralObjestCollisions(object,ship) {
    for (let i = 0; i < object.length; i++) {
        let collision = object[i].checkCollision(ship);

        if (collision == "player") {
            object.splice(i, 1);
            i--;
            ship.y = -100; // tymczasowo
            // TODO tracenie zyc, respienie sie na srodku?

        } else if (collision == "wall") {
            object.splice(i, 1);
            i--;
        }
    }
}
function enemyShotsCollisions(enemyShots,ship) {
    for (let i = 0; i < enemyShots.length; i++) {
        let collision = enemyShots[i].checkCollision(ship);

        if (collision == "player") {
            enemyShots.splice(i, 1);
            i--;
            ship.y = -100; // tymczasowo
            // TODO tracenie zyc, respienie sie na srodku?

        } else if (collision == "wall") {
            enemyShots.splice(i, 1);
            i--;
        }
    }
}

function playerShotsCollisions(playerShots,enemies) {
    for (let i = 0; i < playerShots.length; i++) {
        let collision = playerShots[i].checkCollision(enemies);

        if (collision == -99) continue;
        if (collision == -1) {
            playerShots.splice(i, 1);
            i--;

        } else {
            playerShots.splice(i, 1);
            enemies.splice(collision, 1);
            i--;
        }
    }
}