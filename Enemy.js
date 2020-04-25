
class Enemy {
    constructor() {
        this.x = random(width);
        this.y = random(height);

    };
    move() {
        this.y += getRandomInt(-1,1);
        this.x += getRandomInt(-1,1);
    };
    show() {
        fill (255,0,0);
        rect(this.x,this.y, 40, 40);
    };


}