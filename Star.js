class Star {
    constructor() {
        this.x = random(width);
        this.y = random(height);
        this.vy = -2;
    };
    update()
    {
        if (this.y<0)
        {
            this.y=height;

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