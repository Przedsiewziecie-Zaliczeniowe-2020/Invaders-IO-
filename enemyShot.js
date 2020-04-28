class enemyShot {
    constructor(x,y) {
this.y=y;
this.x=x+10;
        this.vy = 0;
    };


    boom()
    {
        this.vy = +15;

    };

    move() {
        this.y += this.vy;
    };
    update(x,y)
    {
      this.x=x+10;
     // this.y=y;
    }

    reload() {


        this.y=someEnemy.y;

    };
    show() {
        fill (10, 255, 10);
        rect (this.x,this.y, 10, 20);
    };

}
