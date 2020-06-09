jest.mock('./collisionFunctions.js')

const checkPlayerShotHitWall = require('./collisionFunctions');
const checkPlayerShotHitEnemy = require('./collisionFunctions');


test('Checking Player Schoots', () => {
    let shot = {y:100};
    expect(checkPlayerShotHitWall(shot)).toBe(false);

    shot = {y:0};
    expect(checkPlayerShotHitWall(shot)).toBe(false);

    shot = {y:-100};
    expect(checkPlayerShotHitWall(shot)).toBe(false);
});

test('Checking Player Hit Enemy', () => {
    let shot = {x: 101, y:101, vx:0,width:50,
        height:50};
    
    let enemy = {x:100, y:100, width:100, height:100}
    expect(checkPlayerShotHitEnemy(shot, enemy)).toBe(false);

    shot = {x: 80, y:70, vx:0};
    enemy = {x:100, y:100, width:100, height:100}
    expect(checkPlayerShotHitEnemy(shot, enemy)).toBe(false);

    shot = {x: 79, y:69, vx:0};
    enemy = {x:100, y:100, width:100, height:100}
    expect(checkPlayerShotHitEnemy(shot, enemy)).toBe(false);
});
