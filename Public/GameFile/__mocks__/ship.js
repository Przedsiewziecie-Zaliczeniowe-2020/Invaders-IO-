const height= ()=>{
    return 200;
};
const MOUSE_X= ()=>{
    return Promise.resolve(500);
};

class Ship {
    explodeFrame = 0;
    isSpawnProtected = false;

    constructor(playerShots) {
        // this.id=getRandomInt(1,200);
        this.playerShots = playerShots;
        this.hp = 3;
        this.width = 80;
        this.height = 90;
        this.y = height() - 120;


        this.x = MOUSE_X;

        this.explosionXScale = (this.width * 1.75 - this.width);
        this.explosionYScale = (this.height * 1.75 - this.height);
    };
postitionY (){
    return this.y;
}}
module.exports=Ship;
exports.height=height;
//exports.postitionY=postitionY;
exports.MOUSE_X=MOUSE_X;

