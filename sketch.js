let SHIP_IMG;
let LAYER_IMG;
let LASER_IMG;
{
    let countBgStars = 100;
    let backgroundMusic;
    let shotSound;
    let bgStars = [countBgStars];
    let ship;
    let enemies = [];
    let enemyShots = [];
    let playerShots = [];


    function preload() {
        SHIP_IMG = loadImage('Models/Spaceships/PlayerOne.png');
        LAYER_IMG = loadImage('Models/Layer/Layer 1.png');
        LASER_IMG = loadImage('Models/Lazers/lazers1.png');
        backgroundMusic=loadSound("Sound/General/Too Soon.mp3");
        shotSound=loadSound("Sound/Effects/Lazers1.mp3");
    }

    function setup() {
        var div = document.getElementById('gameBar');
        var canvas = createCanvas(div.offsetWidth, div.offsetHeight); // TODO naprawić i zapisać gdzies wielkosc canvasu
        canvas.parent('gameBar');

        ship = new Ship(playerShots);
        prepareEnemies();
        prepareBgStars();


        backgroundMusic.loop();
    }

    function keyPressed() {
        if (key == ' ') {
            ship.shoot();
            shotSound.play();
        }
    }

    function draw() {
        // - - - - moving and drawing - - - -
        background(LAYER_IMG);
        moveAndDrawBgStars();
        for (let i = 0; i < enemies.length; i++) {
            enemies[i].show();
            enemies[i].update();
            enemies[i].move();
        }

        ship.show();
        ship.update();

        for (let i = 0; i < enemyShots.length; i++) {
            enemyShots[i].show();
            enemyShots[i].move();
        }
        for (let i = 0; i < playerShots.length; i++) {
            playerShots[i].show();
            playerShots[i].move();
        }

        // co pol sekundy triggeruj prawdopodobny strzal enenmy
        if (frameCount % 30 == 0) {
            for (let i = 0; i < enemies.length; i++)
                enemies[i].attemptShooting()

        }

        // kolizje
        enemyShotsCollisions();
        playerShotsCollisions();

    }

    function prepareBgStars() {
        for (let i = 0; i < countBgStars; i++) {
            bgStars[i] = new BgStar();
        }
    };

    function prepareEnemies() {
        for (let i = 0; i < 6; i++) {
            enemies.push(new Enemy(100 + (i * 150), 100, 0.1, enemyShots))
        }
    };

    function moveAndDrawBgStars() {
        for (let i = 0; i < countBgStars; i++) {
            bgStars[i].show();
            bgStars[i].move();
            bgStars[i].update();
        }
    };

    function enemyShotsCollisions() {
        for (let i = 0; i < enemyShots.length; i++) {
            let collision = enemyShots[i].checkCollision(ship);

            if (collision == "player") {
                enemyShots.splice(i, 1);
                i--;
                ship.y = -100; // tymczasowo
                // TODO tracenie zyc, respienie sie na srodku?

            } else if (collision == "wall") {
                enemyShots.splice(i, 1);
                i--;
            }
        }
    }

    function playerShotsCollisions() {
        for (let i = 0; i < playerShots.length; i++) {
            let collision = playerShots[i].checkCollision(enemies);

            if (collision == -99) continue;
            if (collision == -1) {
                playerShots.splice(i, 1);
                i--;

            } else {
                playerShots.splice(i, 1);
                enemies.splice(collision, 1);
                i--;
            }
        }
    }

}
