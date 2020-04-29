let ship;
let shot;
let star = [100];
let i = 0;
let numberofShots = 20;
let shipImg;
let LayerImg;
let numerofStarsinBackground = 100;
let someEnemy;
let enemyshoot;
let  LaserImg ;

function preload() {
    shipImg = loadImage ('Models/Spaceships/PlayerOne.png');
    LayerImg = loadImage ('Models/Layer/Layer 1.png');
    LaserImg = loadImage ('Models/Lazers/lazers1.png');
}

function setup() {
    createCanvas (window.screen.width * window.devicePixelRatio * 0.582, window.screen.height * window.devicePixelRatio * 0.713);
    ship = new Ship ();
    for (var i = 0; i < numberofShots; i++) {
        someEnemy = new Enemy ();
    }
    enemyshoot = new enemyShot (someEnemy.x, someEnemy.y);

        shot = new Shot (ship.x+35, ship.y);

    for (var s = 0; s < numerofStarsinBackground; s++) {
        star[s] = new Star ();
    }

}

function keyPressed() {

    if (key == ' ') {

        shot.boom ();

    }

}

function draw() {

    background (LayerImg);


        shot.show ();
        shot.move ();

    for (var s = 0; s < numerofStarsinBackground; s++) {
        star[s].show ();
        star[s].move ();
        star[s].update ();

    }
    someEnemy.show ();
    someEnemy.movePath ();
    someEnemy.move ();

    enemyshoot.boom ();
    // enemyshoot.update(someEnemy.x,someEnemy.y);
    enemyshoot.move ();

    enemyshoot.update (someEnemy.x, someEnemy.y);
    shot.update (ship.x, ship.y);
    if (enemyshoot.y > height) {
        enemyshoot.reload ();
    }
   if (shot.y < 0) {
       shot.vy=0;
          shot.reload ();
    }
    ship.show ();
    ship.update ();
    enemyshoot.show ();

    // someEnemy.update();
}
