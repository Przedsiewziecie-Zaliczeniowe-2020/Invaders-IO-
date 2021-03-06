class Ship {
    explodeFrame = 0;
    isSpawnProtected = false;

    constructor(playerShots) {
        // this.id=getRandomInt(1,200);
        this.playerShots = playerShots;
        this.hp = 3;
        this.width = 80;
        this.height = 90;
        this.y = height - 120;

        MOUSE_X = width / 2 - (this.width / 2);
        this.x = MOUSE_X;

        this.explosionXScale = (this.width * 1.75 - this.width)
        this.explosionYScale = (this.height * 1.75 - this.height)
    };

    show() {
        this.attemptExplode();
        if(this.hp <= 0) GAME_OVER();
        if (this.explodeFrame < 18) {
            image(IMGS.playerShip, this.x, this.y, this.width, this.height);
            return;
        }
        if (this.explodeFrame > 78) {
            image(IMGS.playerShipSpawnProtected, this.x, this.y, this.width, this.height);
            return;
        }
    };

    update() {
        if (this.explodeFrame > 0 && this.explodeFrame <= 78) return; // If exploded, immobilize

        if (MOUSE_X < 10) MOUSE_X = 10;
        if (MOUSE_X > width - 80) MOUSE_X = width - 80;

        this.x = MOUSE_X;
    };

    isHitted() {
        if (this.isSpawnProtected === true) return;

        this.hp--;
        this.isSpawnProtected = true;
        this.explodeFrame = 0;
        SOUNDS_AND_MUSIC.shipExplossion.play();
        return false;
    };

    shoot() {
        if (this.explodeFrame > 0 && this.explodeFrame <= 78) return;
        this.playerShots.push(new Shot(this.x + 30, this.y));
        SOUNDS_AND_MUSIC.shot.play();
    };

    attemptExplode() {
        if (!this.isSpawnProtected)
            return;

        if (this.explodeFrame > 47 && this.explodeFrame < 198) {
            this.explodeFrame += 1;
            return
        }

        if (this.explodeFrame >= 198) {
            this.explodeFrame = 0;
            this.isSpawnProtected = false;
            return;
        }

        image(IMGS.explosions[this.explodeFrame], this.x - this.explosionXScale / 2, this.y - this.explosionYScale / 2, this.width + this.explosionXScale, this.height + this.explosionYScale)
        this.explodeFrame += 1;
    }

}
module.exports=Ship;
