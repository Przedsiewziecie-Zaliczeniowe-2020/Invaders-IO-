function loadImgs() {
    //players
    IMGS.playerShip = loadImage('Models/Spaceships/PlayerOne.png');
    IMGS.playerShipSpawnProtected = loadImage('Models/Spaceships/PlayerOne65Opacity.png');
    IMGS.playerShip2 = loadImage('Models/Spaceships/PlayerTwo.png');

    //enemies
    IMGS.enemyLvl1Small = loadImage('Models/Enemies/Level1/Small.png');
    IMGS.enemyLvl1Medium = loadImage('Models/Enemies/Level1/Medium.png');
    IMGS.enemyLvl1Big = loadImage('Models/Enemies/Level1/Big.png');
    IMGS.enemyLvl1Boss = loadImage('Models/Enemies/Level1/Boss.png');

    //backgrounds
    IMGS.bg1 = loadImage('Models/Layer/Layer 1.png');

    //playerweapons
    IMGS.playerWeapon1 = loadImage('Models/Lazers/Level1/lazers1.png');

    //enemy weapons
    IMGS.enemyWeapon1 = loadImage('Models/Lazers/Level1/enemyLazers1.png');
    //neural object
    IMGS.asteroid = loadImage('Models/Asteroids/Level1/1.png');

    // E X P L O S I O N  youtube.com/watch?v=wEvUHknyFng
    IMGS.explosions = [] //48 ich jest
    for(let i = 1; i <= 6; i++){
        for(let j = 1; j <=8; j++){
            IMGS.explosions.push(loadImage('Models/Explosions/explosion'+i+'x'+j+'.png'));
        }
    }
}

function loadSoundsAndMusic()
{
    // SOUNDS_AND_MUSIC.too_soon = loadSound("Sound/General/Too Soon.mp3");
    // SOUNDS_AND_MUSIC.shot = loadSound("Sound/Effects/Lazers1.mp3");

    SOUNDS_AND_MUSIC.too_soon = new Howl({
        src: ['Sound/General/Too Soon.mp3'],
        loop: true,
        volume: 0.5,
    });

    SOUNDS_AND_MUSIC.shot = new Howl({
        src: ['Sound/Effects/Lazers1.mp3'],
        volume: 0.3,
    });

    SOUNDS_AND_MUSIC.enemyExplosion = new Howl({
        src: ['Sound/Effects/spaceExplosionSmall.wav'],
        volume: 0.5,
        rate: 0.5,
    });

    SOUNDS_AND_MUSIC.enemyBossExplosion = new Howl({
        src: ['Sound/Effects/spaceExplosionBig.wav'],
        volume: 1,
        rate: 0.9,
    });

    SOUNDS_AND_MUSIC.shipExplossion = new Howl({
        src: ['Sound/Effects/spaceExplosionBig.wav'],
        volume: 1,
        rate: 2,
    });



}
