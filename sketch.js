let SHIP_IMG;
let LAYER_IMG;
let LASER_IMG;
let LASER_ENEMY_IMG;
let ENEMY_ONE_SMALL;
let ASTEROID_IMG;
let points=0;
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
        SHIP_IMG = loadImage ('Models/Spaceships/PlayerOne.png');
        LAYER_IMG = loadImage ('Models/Layer/Layer 1.png');
        LASER_IMG = loadImage ('Models/Lazers/lazers1.png');
        BACKGROUND_MUSIC = loadSound ("Sound/General/Too Soon.mp3");
        SHOT_SOUND = loadSound ("Sound/Effects/Lazers1.mp3");
        ENEMY_ONE_SMALL = loadImage ('Models/Enemies/Pack1/Infantry/inf-a-7.png');
        LASER_ENEMY_IMG = loadImage ('Models/Lazers/lazers2.png');
        ASTEROID_IMG = loadImage ("Models/Asteroids/7.png");
    }

    function setup() {
        var div = document.getElementById ('gameBar');
        var canvas = createCanvas (div.offsetWidth, div.offsetHeight); // TODO naprawić i zapisać gdzies wielkosc canvasu
        canvas.parent ('gameBar');

        ship = new Ship (playerShots);

        prepareBgStars (bgStars, countBgStars);
       // prepareasteroid (asteroid, 100, 100, 1);

        BACKGROUND_MUSIC.loop ();
    }

    function keyPressed() {
        if (key == ' ') {
            ship.shoot ();
            SHOT_SOUND.play ();
        }
    }

    function draw() {

        StageOne(enemies,enemyShots);


        // - - - - moving and drawing - - - -
        background (LAYER_IMG);
        moveAndDrawBgStars (bgStars, countBgStars);

        // - - - - object actions - - - -
       enemyActionFunction (enemies, enemyShots);

        playerActionFunction (ship, playerShots);
        neutralActionFunction (asteroid);

        // kolizje
        enemyShotsCollisions (enemyShots, ship);
        playerShotsCollisions (playerShots, enemies);
        neutralObjestCollisions (asteroid, ship)
    }

}
