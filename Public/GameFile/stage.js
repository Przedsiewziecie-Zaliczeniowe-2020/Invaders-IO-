class Coord {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class Stage {
    enemyShots = [];
    startingEnemyCords = []; // TODO to trzeba przenies do klasy enemy, jezeli maja dobrze latac, ewentualnie usuwac tutaj razem trafionymi enemy
    aliveEnemies;

    constructor(enemies) {
        this.enemies = enemies;
        this.aliveEnemies = this.enemies.length;
        for (let i = 0; i < this.enemies.length; i++) {
            this.startingEnemyCords.push(new Coord(this.enemies[i].x, this.enemies[i].y))
            this.enemies[i].y = -200;
        }

    }

    setupCollisionDetection() {
        COLLISION_DETECTOR.setupEnemies(this.enemies, this.enemyKilled, this);
        COLLISION_DETECTOR.setupEnemyShots(this.enemyShots);

        for (let i = 0; i < this.enemies.length; i++) {
            console.log(i)
            this.enemies[i].setupEnemyShots(this.enemyShots);
        }
    }

    enemyKilled(index) {
        // TODO animacja zniszczenia
        this.enemies[index].immobilizeAndNeutralize();
        this.enemies[index].isExploding = true;
        if (this.enemies[index].height > 200) // TODO, to jest tylko tymczasowe rozwiazanie, trzeba zrobic wlasciwosc, ktora bedzie okreslac jaki to typ moba
            SOUNDS_AND_MUSIC.enemyBossExplosion.play();
        else
            SOUNDS_AND_MUSIC.enemyExplosion.play();

    }

    clearDeadEnemy(index) {
        this.enemies.splice(index, 1);
        this.startingEnemyCords.splice(index, 1);
        this.aliveEnemies = this.aliveEnemies - 1;
    }

    animateEnemyExplosion(index) {
        if (this.enemies[index].isExploding) {
            if (this.enemies[index].explode()) {
                this.clearDeadEnemy(index)
            }
        }
    }

    // Dolatywanie na miejsce
    load() {
        if (this.aliveEnemies <= 0) return 'dead';
        let areAllEnemiesLoaded = true;
        for (let i = 0; i < this.enemies.length; i++) {
            if (!this.enemies[i].flyTo(this.startingEnemyCords[i].x, this.startingEnemyCords[i].y)) {
                areAllEnemiesLoaded = false;
            }
            this.enemies[i].show();
            this.enemies[i].showEnemyLife();
            this.animateEnemyExplosion(i);
        }
        if (areAllEnemiesLoaded === true)
            return 'live';
        else
            return 'loading';
    }

    // Krążenie w prawo i lewo i strzelanie
    live() {
        if (this.aliveEnemies <= 0) return 'dead';

        for (let i = 0; i < this.enemies.length; i++) {
            this.enemies[i].flyToRightAndBack(100, width-100-this.enemies[i].width);
            if (frameCount % 30 === 0) {
                this.enemies[i].attemptShooting();
            }
            this.enemies[i].show();
            this.enemies[i].showEnemyLife();
            this.animateEnemyExplosion(i);
        }
        for (let i = 0; i < this.enemyShots.length; i++) {
            this.enemyShots[i].move();
            this.enemyShots[i].show();
        }
        return 'live';
    }
}
