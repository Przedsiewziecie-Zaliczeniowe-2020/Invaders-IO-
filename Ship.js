class Ship
{
  constructor(x){
    this.x=x;
    this.y=height-60;


    this.update = function () {
      var posX = mouseX - width / 2;
    //  posX.setMag (2.1);

      this.x=posX;
  };

//     this.shot=function () {
// rect(this.x,this.y,5,10);
// rect.y+=10;
//     }


};

  show(){
    fill(255);
    rect(this.x,this.y,30,50);

  };
}
class Shot{
  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.vy = 0;
  }
    update(){
      this.vy=-5;
    }
   move() {
      this.y+=this.vy;

    }

  show(){
    fill(10,255,10 );
    rect(this.x,this.y,10,20);

  };

}
