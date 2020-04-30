let SHIP_IMG;
let LAYER_IMG;
let LASER_IMG;
{
    let countBgStars = 100;

    let bgStars = [countBgStars];
    let ship;
    let enemies = [];
    let enemyShoots = [];


    function preload() {
        SHIP_IMG = loadImage('Models/Spaceships/PlayerOne.png');
        LAYER_IMG = loadImage('Models/Layer/Layer 1.png');
        LASER_IMG = loadImage('Models/Lazers/lazers1.png');
    }

    function setup() {
        var div = document.getElementById('gameBar')
        var canvas = createCanvas(div.offsetWidth, div.offsetHeight); // TODO naprawić i zapisać gdzies wielkosc canvasu
        canvas.parent('gameBar')

        ship = new Ship();


        shot = new Shot(ship.x + 35, ship.y);



    }

    function keyPressed() {

        if (key == ' ') {

            shot.boom();

        }

    }

    function draw() {
        background(LAYER_IMG);

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
        enemyshoot.update(someEnemy.x, someEnemy.y);

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

    function prepareBgStars() {
        for (let i = 0; i < countBgStars; i++) {
            bgStars[s] = new BgStar();
        }
    }


}
