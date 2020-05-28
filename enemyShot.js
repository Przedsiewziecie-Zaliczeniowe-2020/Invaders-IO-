class EnemyShot {
    constructor(x, y, vx) {
        this.y = y;
        this.x = x;
        this.vx = vx;

        this.vy = 15;
        this.width = 10;
        this.height = 20;
    };

    move() {
        this.y += this.vy;
        this.x += this.vx;
    };

    show() {
        image(IMGS.enemyWeapon1, this.x, this.y, 20, 30);
    };

}
