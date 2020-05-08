let countEnemies;
let numberofEnemies=0;
function StageOne(enemies, enemyShots) {
    numberofEnemies=1;
    if (enemies.length===0)
        prepareEnemies (enemies, enemyShots,numberofEnemies);

}
function StageTwo(enemies,enemyShots) {
    numberofEnemies=4;
    if (enemies.length===0)

        prepareEnemies (enemies, enemyShots,numberofEnemies);
}

function StageThree(enemies,enemyShots) {
    numberofEnemies=9;
    if (enemies.length===0)

        prepareEnemies (enemies, enemyShots,numberofEnemies);
}