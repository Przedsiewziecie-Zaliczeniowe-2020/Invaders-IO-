let StartX;
let StartY;
class Enemy {
    constructor() {
        this.x = random(width);
        this.y = random(height/2);
      StartX= this.x+200;
       //  StartY= this.y+10;
         this.vx=0;
         this.vy=0;
    };
    movePath()
    {

        if (StartX<this.x-100) {

            this.vx = -2;

    }
       else if (StartX>this.x+100){

            this.vx = +2;

        }
    }

    move() {
        // this.y += getRandomInt(-1,1);
        // this.x += getRandomInt(-1,1);


        this.y += this.vy;
        this.x += this.vx;

    };


    show() {
        fill (255,0,0);
        rect(this.x,this.y, 40, 40);
    };


}