class CollisionDetector {
    ship = null;
    enemies = new Array(0);
    enemyShots = new Array(0);
    playerShots = new Array(0);
    neutralObjects = new Array(0);

    setupShip(ship, callbackShip) {
        this.ship = ship;
        this.callbackShip = callbackShip;  //TODO usunac callbackShip wszedzie bo jest niepotrzebny

    }

    setupEnemies(enemies, callbackEnemies, myCaller) {
        this.enemies = enemies;
        this.callbackEnemies = callbackEnemies;
        this.callbackEnemiesCaller = myCaller;
    }

    setupEnemyShots(enemyShots) {
        this.enemyShots = enemyShots;
    }

    setupPlayerShots(playerShots) {
        this.playerShots = playerShots;
    }

    setupNeutralObjects(neutralObjects) {
        this.neutralObjects = neutralObjects;
    }


    detect() {
        //playerShots
        if (this.playerShots.length > 0) {
            for (let i = 0; i < this.playerShots.length; i++) {
                if (checkPlayerShotHitWall(this.playerShots[i])) {
                    this.playerShots.splice(i, 1);
                    i--; // TODO przetestowac to w sandboxie jak to dzial przy splice w takiej petli
                    continue;
                }
                if (this.enemies.length > 0) {
                    for (let j = 0; j < this.enemies.length; j++) {
                        if (checkPlayerShotHitEnemy(this.playerShots[i], this.enemies[j],false)) {
                            this.playerShots.splice(i, 1);
                            i--;

                            if (this.enemies[j].isHitted() && this.enemies[j].isExploding === false)
                                socket.broadcast.emit('enemyAttacked',j);
                                this.callbackEnemies.call(this.callbackEnemiesCaller, j);
                            break;
                        }
                    }
                }
            }
        }
        //enemyShots
        if (this.ship != null && this.enemyShots.length > 0) {
            for (let i = 0; i < this.enemyShots.length; i++) {
                if (checkEnemyShotHitWall(this.enemyShots[i])) {
                    this.enemyShots.splice(i, 1);
                    i--;
                    continue;
                }
                if (checkEnemyShotHitShip(this.enemyShots[i], this.ship)) {
                    this.enemyShots.splice(i, 1);
                    i--;
                    if(this.ship.isHitted())
                         // this.callbackShip();
                    break;

                }
            }
        }
        //neutral objects
        if (this.ship != null && this.neutralObjects.length > 0) {
            for (let i = 0; i < this.neutralObjects.length; i++) {
                if (checkNeutralObjectFlewOverWall(this.neutralObjects[i])) {
                    this.neutralObjects.splice(i, 1);
                    i--;
                    continue;
                }
                if (checkNeutralObjectHitShip(this.neutralObjects[i], this.ship)) {
                    this.neutralObjects.splice(i, 1);
                    i--;
                    // this.callbackShip();
                }
            }
        }
    }
}
