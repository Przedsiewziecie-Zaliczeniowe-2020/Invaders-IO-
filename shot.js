class Shot {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vy = -40;
        this.width = 20;
        this.height = 30;

    };

    move() {
        this.y += this.vy;
    };

    checkCollision(enemies) { // zwraca -99 gdy brak kolizji, -1 gdy kolizja z sciana lub indeks wroga z ktorym nastapila kolizja
        // sprawdz czy nastapila kolizja z gorna sciana
        if (this.y <= 0) {
            return -1;
        }
        // sprawdz czy nastapila kolizja ze wrogiem
        for (let i = 0; i < enemies.length; i++) {
            if (collideRectRect(enemies[i].x, enemies[i].y, enemies[i].width, enemies[i].height, this.x, this.y, this.width, this.height)) {
                return i;
            }
        }
        return -99;
    };

    show() {
        image(IMGS.playerWeapon1, this.x, this.y, 20, 30);
    };

}
