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

    // wykrywa kolizje z sciana lub graczem.
    checkCollision(ship) {

        // sprawdz czy nastapila kolizja z boczynmi lub dolna sciana
        if(this.x >= width || this.x <= 0 || this.y >= height ) {
            return "wall";
        }
        // sprawdz czy nastapila kolizja ze statkiem
        if(collideRectRect(ship.x, ship.y, ship.width, ship.height, this.x, this.y, this.width, this.height)){
            return "player";
        }

        return "nope";
    };

    show() {
        image(IMGS.enemyWeapon1, this.x, this.y, 20, 30);
    };

}
