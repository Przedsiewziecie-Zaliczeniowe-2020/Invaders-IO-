class Coord{
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }
}

class Stage {
    enemyShots = [];
    startingCords = [];
    aliveEnemies;

    constructor(enemies) {
        this.enemies = enemies;
        this.aliveEnemies = this.enemies.length;
        for (let i = 0; i < this.enemies.length; i++) {
            this.enemies[i].setupEnemyShots(this.enemyShots);
            this.startingCords.push(new Coord(this.enemies[i].x, this.enemies[i].y))
            this.enemies[i].y = -200;
        }

    }

    setupCollisionDetection() {
        COLLISION_DETECTOR.setupEnemies(this.enemies, this.enemyKilled)
        COLLISION_DETECTOR.setupEnemyShots(this.enemyShots);
    }

    enemyKilled(index) {
        // TODO animacja zniszczenia
        this.enemies.splice(index, 1);
        this.aliveEnemies -= 1;
    }

    load() {
        if(this.aliveEnemies <= 0) return 'dead';
        let flyStatus;
        for(let i = 0; i < this.enemies.length; i++)
        {
            if(!this.enemies[i].flyTo(this.startingCords[i].x, this.startingCords[i].y)){
                this.enemies[i].show();
                flyStatus = 'loading';
            }
            else
            {
                this.enemies[i].show();
                flyStatus = 'live';
            }
        }
        return flyStatus;
    }

    live() {
        if(this.aliveEnemies <= 0) return 'dead';
        let flyStatus;
        if(this.flyRight()){
            this.flyLeft();
        }
        for(let i = 0; i < this.enemies.length; i++) this.enemies[i].attemptShooting();
            flyStatus = 'live';

        return flyStatus;
    }

    flyRight(){
        let flystatus;
        for(let i = 0; i < this.enemies.length; i++){
            if(!this.enemies[i].flyTo(this.startingCords[i].x+100, this.startingCords[i].y)){
                this.enemies[i].show();
                flystatus = false;
            }
            else
            {
                this.enemies[i].show();
                flystatus = true;
            }
        }
        return flystatus;
    }

    flyLeft(){
        let flystatus;
        for(let i = 0; i < this.enemies.length; i++){
            if(!this.enemies[i].flyTo(this.startingCords[i].x, this.startingCords[i].y)){
                this.enemies[i].show();
                flystatus = false;
            }
            else
            {
                this.enemies[i].show();
                flystatus = true;
            }
        }
        return flyStatus;
    }
}