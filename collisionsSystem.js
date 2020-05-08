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
            deadEnemy++;
        }
    }
}