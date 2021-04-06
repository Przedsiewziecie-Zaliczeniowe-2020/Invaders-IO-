// Tutaj wlasciwie tworzenie leveli, czyli tylko tworzenie danych, ktore rownie dobrze mogly by byc wczytane z JSONA
// Beda tu funkcje jak ta Level1 a w nich tworzone dane z levelem
function Level1() {
    let stages = [];
    // Petle w ktorej tworzone sa 3 stage
    for(let i = 0; i < 3; i++){
        let enemies = [];
        //petle w ktorej do stage dodawani sa przeciwnicy
        for(let i = 0; i < 6; i++)
        {
            let enemy = new Enemy(100+(i*150), 100, 0.1, 2);
            enemies.push(enemy);
        }
        let stage = new Stage(enemies);
        stages.push(stage);
    }
   return new Level(stages);
}


// Stad kopiujcie sobie kod, tworzac nowy level
function LevelTemplate()
{

    let stages = [];

    // Stage 1(czyli inaczej to po prostu wave 1)
    let enemies_1 = [];
    CreateEnemy(100, 100, dataOfEnemyShoot.Small, dataOfEnemySpeed.Small,IMGS.enemyLvl1Small,dataOfEnemySize.W_small,dataOfEnemySize.H_small,dataOfEnemyLife.Small,enemies_1,5,100)
    stages.push(new Stage(enemies_1));

    // Stage 2
    let enemies_2 = [];
    enemies_2.push(new Enemy(100, 100, dataOfEnemyShoot.Small, 2.5,IMGS.enemyLvl1Small,dataOfEnemySize.W_small,dataOfEnemySize.H_small,dataOfEnemyLife.Small));
    enemies_2.push(new Enemy(250, 100, dataOfEnemyShoot.Medium, 2.5,IMGS.enemyLvl1Medium,dataOfEnemySize.W_Medium,dataOfEnemySize.H_Medium,dataOfEnemyLife.Medium));
    enemies_2.push(new Enemy(400, 100, dataOfEnemyShoot.Small, 2.5,IMGS.enemyLvl1Small,dataOfEnemySize.W_small,dataOfEnemySize.H_small,dataOfEnemyLife.Small));
    stages.push(new Stage(enemies_2));

    // Stage 3
    let enemies_3 = [];
    enemies_3.push(new Enemy(100, 100, dataOfEnemyShoot.Medium, 2.5,IMGS.enemyLvl1Medium,dataOfEnemySize.W_Medium,dataOfEnemySize.H_Medium,dataOfEnemyLife.Medium));
    enemies_3.push(new Enemy(250, 100, dataOfEnemyShoot.Medium, 2.5,IMGS.enemyLvl1Medium,dataOfEnemySize.W_Medium,dataOfEnemySize.H_Medium,dataOfEnemyLife.Medium));
    enemies_3.push(new Enemy(400, 100, dataOfEnemyShoot.Big, 2.5,IMGS.enemyLvl1Big,dataOfEnemySize.W_Big,dataOfEnemySize.H_Big,dataOfEnemyLife.Big));
    stages.push(new Stage(enemies_3));

    // Boss
    let boss = [];
    boss.push(new Enemy(100, 100, dataOfEnemyShoot.Boss, 2,IMGS.enemyLvl1Boss,dataOfEnemySize.W_Boss,dataOfEnemySize.H_Bos,dataOfEnemyLife.Boss));
    stages.push(new Stage(boss));


    //-----------------
    return new Level(stages);
}
function CreateEnemy(x, y, shootProbability, speed, texture, width, height, hp,enemies,amount,spaceBetween){
for ( j=0;j<amount;j++){
    enemies.push(new Enemy(x+j*spaceBetween, y, shootProbability, speed,texture,width,height,hp));
}
}