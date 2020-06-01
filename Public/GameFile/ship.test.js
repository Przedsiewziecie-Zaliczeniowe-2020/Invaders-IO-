const Ship = require('./ship');

jest.mock('./ship.js');

test('ship y position  is number', () => {
    const testShip=new Ship();
    expect(typeof testShip.y).toEqual('number');
});
test('ship  is in the bottom part of canvasu 1 ', () => {
    const testShip=new Ship();
    expect(testShip.y).toBeLessThan(400);
});
test('ship  is in the bottom part of canvasu2 ', () => {
    const testShip=new Ship();
    expect(testShip.y).toBeGreaterThan(30);
});
