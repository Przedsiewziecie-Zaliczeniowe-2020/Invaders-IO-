let SHIP_IMG;
let LAYER_IMG;
let LASER_IMG;
let LASER_ENEMY_IMG;
let ENEMY_ONE_SMALL;
let ASTEROID_IMG;
{
    let countBgStars = 100;
    let BACKGROUND_MUSIC;
    let SHOT_SOUND;
    let bgStars = [countBgStars];
    let ship;
    let enemies = [];
    let enemyShots = [];
    let playerShots = [];
    let asteroid = [];


    function preload() {
        SHIP_IMG = loadImage('Models/Spaceships/PlayerOne.png');
        LAYER_IMG = loadImage('Models/Layer/Layer 1.png');
        LASER_IMG = loadImage('Models/Lazers/lazers1.png');
        BACKGROUND_MUSIC=loadSound("Sound/General/Too Soon.mp3");
        SHOT_SOUND=loadSound("Sound/Effects/Lazers1.mp3");
        ENEMY_ONE_SMALL= loadImage('Models/Enemies/Pack1/Infantry/inf-a-7.png');
        LASER_ENEMY_IMG=loadImage('Models/Lazers/lazers2.png');
        ASTEROID_IMG=loadImage("Models/Asteroids/7.png");
    }

    function setup() {
        var div = document.getElementById('gameBar');
        var canvas = createCanvas(div.offsetWidth, div.offsetHeight); // TODO naprawić i zapisać gdzies wielkosc canvasu
        canvas.parent('gameBar');

        ship = new Ship(playerShots);
        prepareEnemies();
        prepareBgStars();
        prepareasteroid();


        BACKGROUND_MUSIC.loop();
    }

    function keyPressed() {
        if (key == ' ') {
            ship.shoot();
            SHOT_SOUND.play();
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
        for (let i = 0; i < asteroid.length; i++) {
        asteroid[i].show();
        asteroid[i].move();
        }

        // co pol sekundy triggeruj prawdopodobny strzal enenmy
        if (frameCount % 30 == 0) {
            for (let i = 0; i < enemies.length; i++)
                enemies[i].attemptShooting()

        }

        // kolizje
        enemyShotsCollisions();
        playerShotsCollisions();
        prepareasteroid(5);
        AsteroidCollisions()
    }
    function prepareasteroid(number) {
      var createAsteroid=  getRandomInt(1,40);
      console.log(createAsteroid);
        if (createAsteroid<=2&&asteroid.length===0)
        {
            for (let i = 0; i <number; i++) {
                if (createAsteroid===1)
                asteroid[i] = new Asteroid(2,random(height));
                if (createAsteroid===2)
                    asteroid[i] = new Asteroid(random(width),2);
            }
        }

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
        for (let i = 0; i < asteroid.length; i++) {
            let collision = asteroid[i].checkCollision(ship);

            if (collision == "player") {
                asteroid.splice(i, 1);
                i--;
                ship.y = -100; // tymczasowo
                // TODO tracenie zyc, respienie sie na srodku?

            } else if (collision == "wall") {
                asteroid.splice(i, 1);
                i--;
            }
        }
    }
    function AsteroidCollisions() {
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
