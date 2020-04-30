let ship;
let shot;
let star = [100];
let numberofShots = 20;
let shipImg;
let layerImg;
let numerofStarsinBackground = 100;
let someEnemy;
let enemyshoot;
let laserImg;

function preload() {
    shipImg = loadImage('Models/Spaceships/PlayerOne.png');
    layerImg = loadImage('Models/Layer/Layer 1.png');
    laserImg = loadImage('Models/Lazers/lazers1.png');
}

function setup() {
    var div = document.getElementById('gameBar')
    var canvas = createCanvas(div.offsetWidth, div.offsetHeight); // TODO naprawić i zapisać gdzies wielkosc canvasu
    canvas.parent('gameBar')

    ship = new Ship();
    someEnemy = new Enemy(random(width), random(height/2), 0.4 );

    enemyshoot = new enemyShot(someEnemy.x, someEnemy.y);

    shot = new Shot(ship.x + 35, ship.y);

    for (var s = 0; s < numerofStarsinBackground; s++) {
        star[s] = new Star();
    }

}

function keyPressed() {

    if (key == ' ') {

        shot.boom();

    }

}

function draw() {

    background(layerImg);


    shot.show();
    shot.move();

    for (var s = 0; s < numerofStarsinBackground; s++) {
        star[s].show();
        star[s].move();
        star[s].update();

    }
    someEnemy.show();
    someEnemy.update();
    someEnemy.move();

    enemyshoot.boom();
    enemyshoot.move();
    enemyshoot.update(someEnemy.x,someEnemy.y);

    shot.update(ship.x, ship.y);
    if (enemyshoot.y > height) {
        enemyshoot.reload();
    }
    if (shot.y < 0) {
        shot.vy = 0;
        shot.reload();
    }
    ship.show();
    ship.update();
    enemyshoot.show();

}
