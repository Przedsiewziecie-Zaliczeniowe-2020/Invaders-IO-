jest.mock('./collisionFunctions.js')
const checkEnemyShotHitWall = require('./collisionFunctions');
const checkEnemyShotHitShip = require('./collisionFunctions');
const checkPlayerShotHitWall = require('./collisionFunctions');
const checkPlayerShotHitEnemy = require('./collisionFunctions');




test('checkEnemyShotHitWall', () => {
    let shot = {x: 100, y:100, vx:0};
    expect(checkEnemyShotHitWall(shot)).toBe(false);

    shot = {x: 200, y:200, vx:0};
    expect(checkEnemyShotHitWall(shot)).toBe(true);

    shot = {x: 201, y:201, vx:0};
    expect(checkEnemyShotHitWall(shot)).toBe(true);
});

test('checkEnemyShotHitShip', () => {
    let shot = {x: 101, y:101, vx:0}; // width 20, height 30
    let enemy = {x:100, y:100, width:100, height:100}
    expect(checkEnemyShotHitShip(shot, enemy)).toBe(false);

    shot = {x: 80, y:70, vx:0};
    enemy = {x:100, y:100, width:100, height:100}
    expect(checkEnemyShotHitShip(shot, enemy)).toBe(false);

    shot = {x: 79, y:69, vx:0};
    enemy = {x:100, y:100, width:100, height:100}
    expect(checkEnemyShotHitShip(shot, enemy)).toBe(false);
});



