const Enemy = require('./enemy');
const dataOfEnemyShoot =require('./DetailsOfSpecificEnemy');
const dataOfEnemySize =require('./DetailsOfSpecificEnemy');
const dataOfEnemyLife =require('./DetailsOfSpecificEnemy');
const IMGS =require('./loadFiles');
test('Enemy should not be destroyed', () => {
    const testEnemy=new Enemy(100, 100, dataOfEnemyShoot.Small, 2,IMGS.enemyLvl1Small,dataOfEnemySize.W_small,dataOfEnemySize.H_small,dataOfEnemyLife.Small);
    expect( testEnemy.isHitted()).toEqual(false);
});
test('Enemy should not be destroyed', () => {
    const testEnemy=new Enemy(250, 100, dataOfEnemyShoot.Medium, 2,IMGS.enemyLvl1Medium,dataOfEnemySize.W_Medium,dataOfEnemySize.H_Medium,dataOfEnemyLife.Medium);
    expect( testEnemy.isHitted()).toEqual(false);
});
test('Enemy should be destroyed', () => {
    const testEnemy=new Enemy(250, 100, dataOfEnemyShoot.Medium, 2,IMGS.enemyLvl1Medium,dataOfEnemySize.W_Medium,dataOfEnemySize.H_Medium,1);
    expect( testEnemy.isHitted()).toEqual(true);
});
