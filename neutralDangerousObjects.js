class Asteroid {
    constructor(x, y,texture) {
        this.y = y;
        this.x = x;
        this.texture=texture;

        this.vx = getRandomInt(-5,5);
        this.vy = getRandomInt(-5,5);
        this.width = 40;
        this.height = 40;
    };
    move() {
        this.y += this.vy;
        this.x += this.vx;
    };

    show() {
        image(this.texture, this.x, this.y, 20, 30);
    };
}