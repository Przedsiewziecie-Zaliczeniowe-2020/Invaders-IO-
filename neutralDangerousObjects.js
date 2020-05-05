class Asteroid {
    constructor(x, y) {
        this.y = y;
        this.x = x;


        this.vx = getRandomInt(-5,5);
        this.vy = getRandomInt(-5,5);
        this.width = 40;
        this.height = 40;
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
        image(ASTEROID_IMG, this.x, this.y, 20, 30);
    };
}