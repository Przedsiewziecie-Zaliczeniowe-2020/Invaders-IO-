function StageOne(enemies, enemyShots) {

    numberofEnemies = 1;

    if (enemies.length === 0)
        prepareEnemies(enemies, enemyShots, numberofEnemies,IMGS.enemyLvl1Small,100 + (numberofEnemies * 150), 100);


}

function StageTwo(enemies, enemyShots) {

    numberofEnemies = 4;
    if (enemies.length === 0)
        prepareEnemies(enemies, enemyShots, numberofEnemies,IMGS.enemyLvl1Small,100 + (numberofEnemies * 150), 100);

}

function StageThree(enemies, enemyShots) {

    numberofEnemies = 9;
    if (enemies.length === 0)
        prepareEnemies(enemies, enemyShots, numberofEnemies,IMGS.enemyLvl1Small,100 + (numberofEnemies * 150), 100);

}