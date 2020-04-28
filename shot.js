class Shot {
    constructor(x, y) {
        this.x = x;
        this.y  = y;
        this.vy = 0;
    };


    boom()
    {
        this.vy = -10;

    };

    move() {
        this.y += this.vy;
    };

    reload() {

        this.x=ship.x+35;
        this.y=ship.y;

    };
    show() {
        fill (10, 255, 10);
        rect (this.x, this.y, 10, 20);
    };

}
