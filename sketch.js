let ship;
let shot = [10];
let i = 0;
let numberofShots=10;
let shipImg;

function preload()
{
shipImg= loadImage('Models/Spaceships/PlayerOne.png')
}

function setup() {
    createCanvas (1000, 750);
    ship = new Ship ();
    for (var i = 0; i < numberofShots; i++) {
        shot[i] = new Shot (-999, -999);
    }
}
function keyPressed() {

    if (key == ' ') {
        shot[i].boom ();
        shot[i].reload ();
    }
}
function draw() {
    background (00, 00, 00);
    for (var k = 0; k < numberofShots; k++) {
       shot[i].show ();
        shot[i].move ();

    }

    ship.show ();
    ship.update ();
}
