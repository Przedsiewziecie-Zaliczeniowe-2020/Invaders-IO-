function loadImgs() {
    //players
    IMGS.playerShip = loadImage('Models/Spaceships/PlayerOne.png');
    IMGS.playership2 = loadImage('Models/Spaceships/PlayerTwo.png');

    //enemies
    IMGS.enemyLvl1Small = loadImage('Models/Enemies/Level1/Small.png');
    IMGS.enemyLvl1Medium = loadImage('Models/Enemies/Level1/Medium.png');
    IMGS.enemyLvl1Big = loadImage('Models/Enemies/Level1/Big.png');
    IMGS.enemyLvl1Boss = loadImage('Models/Enemies/Level1/Boss.png');

    //backgrounds
    IMGS.bg1 = loadImage('Models/Layer/Layer 1.png');

    //playerweapons
    IMGS.playerWeapon1 = loadImage('Models/Lazers/lazers1.png');

    //enemy weapons
    IMGS.enemyWeapon1 = loadImage('Models/Lazers/lazers2.png');
    //neural object
    IMGS.asteroid = loadImage('Models/Asteroids/7.png');

}

function loadSoundsAndMusic()
{
    SOUNDS_AND_MUSIC.too_soon = loadSound("Sound/General/Too Soon.mp3");
    SOUNDS_AND_MUSIC.shot = loadSound("Sound/Effects/Lazers1.mp3");
}