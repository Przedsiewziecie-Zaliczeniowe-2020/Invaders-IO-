let IMGS = {};
let SOUNDS_AND_MUSIC = {};
//resolution parameters
let RES_PARAMS = { canvasWidth:null, canvasHeight:null, canvasOriginX:null, canvasOriginY:null, scalingFactorHeight:null, scalingFactorWidth:null }
{
    let countBgStars = 100;
    let bgStars = [countBgStars];
    let ship;
    let enemies = [];
    let enemyShots = [];
    let playerShots = [];

    function preload() {
        loadImgs();
        loadSoundsAndMusic()
        var div = document.getElementById('sketchHolder');
        RES_PARAMS.canvasWidth = div.offsetWidth;
        RES_PARAMS.canvasHeight = div.offsetHeight;
        RES_PARAMS.canvasOriginX = div.offsetLeft;
        RES_PARAMS.canvasOriginY = div.offsetTop;
        RES_PARAMS.scalingFactorHeight = 937 / RES_PARAMS.canvasHeight; // przyjalem 937 jako referencyjna wysokosc canvasu, jak nie wiesz o co cho to zapytaj mnie na msg
        RES_PARAMS.scalingFactorWidth = 1405 / RES_PARAMS.canvasWidth; // przyjalem 937 jako referencyjna szerokosc canvasu, jak nie wiesz o co cho to zapytaj mnie na msg
    }

    function setup() {
        var canvas = createCanvas(RES_PARAMS.canvasWidth, RES_PARAMS.canvasHeight);
        canvas.parent('sketchHolder');

        ship = new Ship(playerShots);
        prepareEnemies();
        prepareBgStars();
        SOUNDS_AND_MUSIC.too_soon.loop();
    }

    function keyPressed() {
        if (key == ' ') {
            ship.shoot();
            SOUNDS_AND_MUSIC.shot.play();
        }
    }

    function draw() {
        // - - - - moving and drawing - - - -
        background(IMGS.bg1);
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
