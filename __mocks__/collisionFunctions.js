const width = 200;
const height = 200;

function checkEnemyShotHitWall(enemyShot) {
    if (enemyShot.x >= width || enemyShot.x <= 0 || enemyShot.y >= height) {
        return true;
    }
    return false;
}

function checkEnemyShotHitShip(enemyShot, ship) {
    if (collideRectRect(ship.x, ship.y, ship.width, ship.height, enemyShot.x, enemyShot.y, enemyShot.width, enemyShot.height)) {
        return true;
    }
    return false;
}

function checkPlayerShotHitWall(shot) {
    if (shot.y <= 0) {
        return true;
    }
    return false;
}

function checkPlayerShotHitEnemy(shot, enemy) {
    if (collideRectRect(enemy.x, enemy.y, enemy.width, enemy.height, shot.x, shot.y, shot.width, shot.height)) {
        return true;
    }
    return false;
}

//sprawdza czy wylecial poza sciane
function checkNeutralObjectFlewOverWall(neutralObject) {
    if (neutralObject.x >= width + neutralObject.width || neutralObject.x <= 0 - neutralObject.width || neutralObject.y >= height + neutralObject.height || neutralObject.y <= 0 - neutralObject.height) {
        return true;
    }
    return false;
}

function checkNeutralObjectHitShip(neutralObject, ship) {
    if (collideRectRect(ship.x, ship.y, ship.width, ship.height, neutralObject.x, neutralObject.y, neutralObject.width, neutralObject.height)) {
        return true;
    }
    return false;
}


module.exports = checkEnemyShotHitWall;
module.exports.width = width;
module.exports.height = height;

