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
    show() {
        image(IMGS.playerWeapon1, this.x, this.y, 20, 30);
    };

}
