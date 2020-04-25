let ship;
let shot = [10];
let star=[100];
let i = 0;
let numberofShots=20;
let shipImg;
let LayerImg;
let numerofStarsinBackground=100;
let someEnemy;
function preload()
{
shipImg= loadImage('Models/Spaceships/PlayerOne.png');
LayerImg= loadImage('Models/Layer/Layer 1.png');
}

function setup() {
    createCanvas (window.screen.width*window.devicePixelRatio*0.582, window.screen.height*window.devicePixelRatio*0.713);
    ship = new Ship ();
    someEnemy = new Enemy ();
    for (var i = 0; i < numberofShots; i++) {
        shot[i] = new Shot (-999, -999);
    }
    for (var s = 0; s < numerofStarsinBackground; s++) {
        star[s] = new Star ();
    }

}
function keyPressed() {

    if (key == ' ') {

        shot[i].boom ();
        shot[i].reload ();
    }
}
function draw() {

    background (LayerImg);

    for (var k = 0; k < numberofShots; k++) {
       shot[i].show ();
        shot[i].move ();

    }
    for (var s = 0; s < numerofStarsinBackground; s++) {
        star[s].show ();
        star[s].move ();
        star[s].update();

    }
    someEnemy.show();
    someEnemy.move();
    ship.show ();
    ship.update ();

   // someEnemy.update();
}
