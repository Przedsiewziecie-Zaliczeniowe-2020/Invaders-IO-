let IMGS = {};
let SOUNDS_AND_MUSIC = {};
let PAUSE_MANAGER = new PauseManager();
let DIALOG_MANAGER = new DialogsManager();
let MOUSE_X;
let MOUSE_Y;
let PLAYER_NAME;
let points=0;
{
    let countBgStars = 100;
    let bgStars = [countBgStars];
    let ship;
    let enemies = [];
    let enemyShots = [];
    let playerShots = [];
    let asteroid = [];
    let lv1;
    let level;

    function preload() {
        // TODO zrobić funkcje do osobnego ładowania lvl
        lv1 = new Lv1 ();
        level = new Level ();

        ///////////////////////

        loadImgs ();
        loadSoundsAndMusic ();
        setupResParamas();
        scaleNameInputDialog();
        showNameInputDialog();
    }

    function setup() {
        var canvas = createCanvas (RES_PARAMS.canvasWidth, RES_PARAMS.canvasHeight);
        canvas.parent ('sketchHolder');

        pointerLockSetup ();
        ship = new Ship (playerShots);
        //prepareEnemies(enemies,enemyShots,7);
        prepareBgStars (bgStars, countBgStars);
        prepareasteroid (asteroid, 100, 100, 1);
        SOUNDS_AND_MUSIC.too_soon.loop ();
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
        DIALOG_MANAGER.attemptDialog(true);

        // var LoadLevel1   = new Level(Lv1Strategy);
        // LoadLevel1.level(enemies,enemyShots);


        // - - - - object actions - - - -
        enemyActionFunction (enemies, enemyShots);
        playerActionFunction (ship, playerShots);
        neutralActionFunction (asteroid);
        //  sprawdz czy pauza

        if (actualLevel === 1) {
            level.setStrategy (lv1);
            level.setLevel (enemies, enemyShots,deadEnemy);
        }
        console.log('przeciwnicy ogółem:'+countEnemies);
        console.log('zniszczeni przeciwnicy'+deadEnemy);

        // @ @ @ @ END OF MOVING AND DRAWING @ @ @ @

        // co pol sekundy triggeruj prawdopodobny strzal enenmy

        PAUSE_MANAGER.attemptShowPauseText();

        // kolizje
        enemyShotsCollisions (enemyShots, ship);
        playerShotsCollisions (playerShots, enemies);
        neutralObjestCollisions (asteroid, ship)

    }
}
