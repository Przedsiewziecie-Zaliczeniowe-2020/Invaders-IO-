class Shot {
    constructor(x, y) {
        this.x = x;
        this.y  = y;
        this.vy = 0;
    };


    boom()
    {
        this.vy = -60;

    };

    move() {
        this.y += this.vy;
    };
    update(x,y)
    {
        this.x=x+30;
        // this.y=y;
    }
    reload() {
 //this.x=ship.x+35;
        this.y=ship.y;

    };
    show() {
        fill (10, 255, 10);
        image(LaserImg,this.x, this.y, 20, 30);
    };

}
