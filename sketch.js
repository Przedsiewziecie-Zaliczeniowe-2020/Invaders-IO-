let ship;


function setup() {
    createCanvas(600,450)
ship=new Ship(0);
}
function keyPressed() {
    if(key==' ')
    {
       shot=new Shot(ship.x,ship.y);
       shot.show();
       shot.move();
    }

}



function draw() {
    background(120,55,55);
ship.show();
ship.update();
}
