let IMGS = {};
let SOUNDS_AND_MUSIC = {};
//resolution parameters
let RES_PARAMS = {
    canvasWidth: null,
    canvasHeight: null,
    canvasOriginX: null,
    canvasOriginY: null,
    scalingFactorHeight: null,
    scalingFactorWidth: null
}
let IS_GAME_PAUSED = false; //
let IS_GAME_DIALOG_ON = false;
let MOUSE_X;
let MOUSE_Y;
let PLAYER_NAME;
{
    let countBgStars = 100;
    let bgStars = [countBgStars];
    let ship;
    let enemies = [];
    let enemyShots = [];
    let playerShots = [];
    let asteroid = [];

    function preload() {
        loadImgs ();
        loadSoundsAndMusic ();

        let div = document.getElementById ('sketchHolder');

        // TODO mozna by je przenies do osobnej funkcji, tylko nie wiem w jakim pliku ja dac
        RES_PARAMS.canvasWidth = div.offsetWidth;
        RES_PARAMS.canvasHeight = div.offsetHeight;
        RES_PARAMS.canvasOriginX = div.offsetLeft;
        RES_PARAMS.canvasOriginY = div.offsetTop;
        RES_PARAMS.scalingFactorHeight = 937 / RES_PARAMS.canvasHeight; // przyjalem 937 jako referencyjna wysokosc canvasu, jak nie wiesz o co cho to zapytaj mnie na msg
        RES_PARAMS.scalingFactorWidth = 1405 / RES_PARAMS.canvasWidth; // przyjalem 1405 jako referencyjna szerokosc canvasu, jak nie wiesz o co cho to zapytaj mnie na msg
    }

    function setup() {
        var canvas = createCanvas (RES_PARAMS.canvasWidth, RES_PARAMS.canvasHeight);
        canvas.parent ('sketchHolder');
        canvas.width = RES_PARAMS.canvasWidth;
        canvas.height = RES_PARAMS.canvasHeight;

        pointerLockSetup ();

        ship = new Ship (playerShots);
        prepareEnemies(enemies,enemyShots,7);
        prepareBgStars(bgStars,countBgStars);
        prepareasteroid(asteroid,100,100,1);
        SOUNDS_AND_MUSIC.too_soon.loop ();

        setupNameInput ();
    }

    function keyPressed() {
        if (key == ' ') {
            ship.shoot ();
            SOUNDS_AND_MUSIC.shot.play ();
        }
    }

    function draw() {
        // - - - - MOVING AND DRAWING - - - -
        background (IMGS.bg1);
        moveAndDrawBgStars (bgStars, countBgStars);
        // - - - - object actions - - - -
        enemyActionFunction (enemies, enemyShots);
        playerActionFunction (ship, playerShots);
        neutralActionFunction (asteroid);
        //  sprawdz czy pauza
        {
            if (IS_GAME_PAUSED) {
                noLoop ();
                if (!IS_GAME_DIALOG_ON) {
                    background (0, 0, 0, 70);
                    fill (255, 255, 255);
                    textSize (50);
                    textAlign (CENTER, CENTER);
                    text ('game paused', RES_PARAMS.canvasWidth / 2, RES_PARAMS.canvasHeight / 2);

                }
            }
        }

        // @ @ @ @ END OF MOVING AND DRAWING @ @ @ @

        // co pol sekundy triggeruj prawdopodobny strzal enenmy

        // kolizje
        enemyShotsCollisions (enemyShots, ship);
        playerShotsCollisions (playerShots, enemies);
        neutralObjestCollisions (asteroid, ship)
    }

}
