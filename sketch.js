let IMGS = {};
let SOUNDS_AND_MUSIC = {};
let PAUSE_MANAGER;
let DIALOG_MANAGER;
let COLLISION_DETECTOR;
let GAME_OVER;
let MOUSE_X;
let MOUSE_Y;
let PLAYER_NAME;
{
    let countBgStars = 100;
    let bgStars = [countBgStars];
    let ship;
    let playerShots = [];
    let levelStrategy = new LevelStrategy();
    let levels = [];
    let actualLevel;

    function preload() {
        PAUSE_MANAGER = new PauseManager();
        DIALOG_MANAGER = new DialogsManager();
        COLLISION_DETECTOR = new CollisionDetector();

        loadImgs();
        loadSoundsAndMusic();
        setupResParamas();
        scaleNameInputDialog();

    }

    function setup() {
        showNameInputDialog(SOUNDS_AND_MUSIC.too_soon);
        var canvas = createCanvas(RES_PARAMS.canvasWidth, RES_PARAMS.canvasHeight);
        canvas.parent('sketchHolder');

        pointerLockSetup();

        for (let i = 0; i < 1; i++) {
            levels.push(LevelTemplate()) // narazie robie 2 razy ten sam level
        }
        levelStrategy.setLevel(levels[0]);
        levels[0].setupCollisionDetection();
        actualLevel = 0;

        ship = new Ship(playerShots);

        COLLISION_DETECTOR.setupShip(ship, GAME_OVER, this)
        COLLISION_DETECTOR.setupPlayerShots(playerShots);
        prepareBgStars(bgStars, countBgStars);
        // prepareasteroid(asteroid, 100, 100, 1);
    }

    function mouseClicked() {

            if (!PAUSE_MANAGER.isGamePaused) {
                ship.shoot();
                SOUNDS_AND_MUSIC.shot.play();
            }

    }

    function draw() {
        // - - - - MOVING AND DRAWING - - - -
        background(IMGS.bg1);
        moveAndDrawBgStars(bgStars, countBgStars);
        DIALOG_MANAGER.attemptDialog(true);

        playerActionFunction(ship, playerShots);




        if(frameCount % 30 == 0) console.dir(levelStrategy);

        if (!levelStrategy.run()) // jesli skonczyly sie stage
        {
            // jesli jest nastepny poziom to zmien na niego
            // Tutaj nastepuje zmiana levelu, wiec mozna by zrobic jakies wodostryksi xD
            if (actualLevel + 1 < levels.length) {
                actualLevel += 1;
                levelStrategy.setLevel(levels[actualLevel]);
                levels[actualLevel].setupCollisionDetection();
            }
            // gracz ukonczyl gre
            else {
                console.log('gracz ukonczyl gre');
            }
        }
        // @ @ @ @ END OF MOVING AND DRAWING @ @ @ @

        COLLISION_DETECTOR.detect();
        PAUSE_MANAGER.attemptShowPauseText();
    }

    GAME_OVER = function () {
        // PAUSE_MANAGER.pauseGame();
        ship.y = - 200;
        // TODO zrobic napis game over i pause i wgl wszystko xd
        console.log('no playerdown gameover');
    }
}
