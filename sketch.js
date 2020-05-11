let IMGS = {};
let SOUNDS_AND_MUSIC = {};
let PAUSE_MANAGER;
let DIALOG_MANAGER;
let COLLISION_DETECTOR;
let GAME_OVER;
let MOUSE_X;
let MOUSE_Y;
let PLAYER_NAME;
let points = 0;
{
    let countBgStars = 100;
    let bgStars = [countBgStars];
    let ship;
    let enemies = [];
    let enemyShots = [];
    let playerShots = [];
    let asteroid = [];
    let levelStrategy = new LevelStrategy();

    function preload() {
        PAUSE_MANAGER = new PauseManager();
        DIALOG_MANAGER = new DialogsManager();
        COLLISION_DETECTOR = new CollisionDetector();

        // Tworzenie levelu 1
        // Stworzenie wrogow
        let enemies = [];
        for(let i = 0; i < 5; i++)
        {
            let enemy = new Enemy(100+(i*100), 100, 0.2, 2);
            enemies.push(enemy);
        }

        // Stworzenie stagow
        let stages = [];
        for(let i = 0; i < 3; i++){
            let stage = new Stage(enemies);
            stages.push(stage);
        }

        // Stworzenie levelu
        let level = new Level(stages);
        levelStrategy.setLevel(level);

        loadImgs();
        loadSoundsAndMusic();
        setupResParamas();
        scaleNameInputDialog();
        showNameInputDialog(SOUNDS_AND_MUSIC.too_soon);
    }

    function setup() {
        var canvas = createCanvas(RES_PARAMS.canvasWidth, RES_PARAMS.canvasHeight);
        canvas.parent('sketchHolder');

        pointerLockSetup();
        ship = new Ship(playerShots);
        COLLISION_DETECTOR.setupShip(ship, GAME_OVER)
        COLLISION_DETECTOR.setupPlayerShots(playerShots);
        prepareBgStars(bgStars, countBgStars);
        // prepareasteroid(asteroid, 100, 100, 1);
    }

    function keyPressed() {
        if (key == ' ') {
            if (!PAUSE_MANAGER.isGamePaused) {
                ship.shoot();
                SOUNDS_AND_MUSIC.shot.play();
            }
        }
    }

    function draw() {
        // - - - - MOVING AND DRAWING - - - -
        background(IMGS.bg1);
        moveAndDrawBgStars(bgStars, countBgStars);
        DIALOG_MANAGER.attemptDialog(true);

        playerActionFunction(ship, playerShots);
        if(!levelStrategy.run())
            console.log('strategy gameover')
        // @ @ @ @ END OF MOVING AND DRAWING @ @ @ @

        if(frameCount % 60 == 0) console.dir(levelStrategy);

        COLLISION_DETECTOR.detect();
        PAUSE_MANAGER.attemptShowPauseText();

    }

    GAME_OVER = function() {
       // PAUSE_MANAGER.pauseGame();
        console.log('no playerdown gameover');
    }
}
