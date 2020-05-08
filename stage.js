
function StageOne(enemies, enemyShots) {
    if (enemies.length===0)
        prepareEnemies (enemies, enemyShots,1);

}
function StageTwo(enemies,enemyShots) {
    if (enemies.length===0)
        prepareEnemies (enemies, enemyShots,4);
}

function StageThree(enemies,enemyShots) {
    if (enemies.length===0)
        prepareEnemies (enemies, enemyShots,9);
}