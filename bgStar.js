class BgStar {
    constructor() {
        this.x = random(width);
        this.y = random(height);
        this.vy = +2;
    };
    update()
    {
        if (this.y>height)
        {
            this.y=0;
            this.x=random(width);
        }
    }

    move() {
        this.y += this.vy;

    };

   show() {
       fill (255, 255, 255);
       ellipse (this.x, this.y, 5,5);
    };

}