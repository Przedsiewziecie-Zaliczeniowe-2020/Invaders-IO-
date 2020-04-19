let ship;
let shot = [10];
let i = 0;
let numberofShots=10;

function setup() {
    createCanvas (600, 450);
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
    background (120, 55, 55);
    for (var k = 0; k < numberofShots; k++) {
       shot[i].show ();
        shot[i].move ();

    }

    ship.show ();
    ship.update ();
}
