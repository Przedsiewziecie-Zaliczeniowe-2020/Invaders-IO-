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
    enemies_1.push(new Enemy(100, 100, 0.1, 2,IMGS.enemyLvl1Small,dataOfEnemySize.W_small,dataOfEnemySize.H_small));
    enemies_1.push(new Enemy(250, 100, 0.1, 2,IMGS.enemyLvl1Small,dataOfEnemySize.W_small,dataOfEnemySize.H_small));
    enemies_1.push(new Enemy(400, 100, 0.1, 2,IMGS.enemyLvl1Small,dataOfEnemySize.W_small,dataOfEnemySize.H_small));
    enemies_1.push(new Enemy(550, 100, 0.1, 2,IMGS.enemyLvl1Small,dataOfEnemySize.W_small,dataOfEnemySize.H_small));
    enemies_1.push(new Enemy(700, 100, 0.1, 2,IMGS.enemyLvl1Small,dataOfEnemySize.W_small,dataOfEnemySize.H_small));
    stages.push(new Stage(enemies_1));

    // Stage 2
    let enemies_2 = [];
    enemies_2.push(new Enemy(100, 100, 0.1, 2,IMGS.enemyLvl1Small,dataOfEnemySize.W_small,dataOfEnemySize.H_small));
    enemies_2.push(new Enemy(250, 100, 0.1, 2,IMGS.enemyLvl1Medium,dataOfEnemySize.W_Medium,dataOfEnemySize.H_Medium));
    enemies_2.push(new Enemy(400, 100, 0.1, 2,IMGS.enemyLvl1Small,dataOfEnemySize.W_small,dataOfEnemySize.H_small));
    stages.push(new Stage(enemies_2));

    // Stage 3
    let enemies_3 = [];
    enemies_3.push(new Enemy(100, 100, 0.1, 2,IMGS.enemyLvl1Medium,dataOfEnemySize.W_Medium,dataOfEnemySize.H_Medium));
    enemies_3.push(new Enemy(250, 100, 0.1, 2,IMGS.enemyLvl1Medium,dataOfEnemySize.W_Medium,dataOfEnemySize.H_Medium));
    enemies_3.push(new Enemy(400, 100, 0.1, 2,IMGS.enemyLvl1Big,dataOfEnemySize.W_Big,dataOfEnemySize.H_Big));
    stages.push(new Stage(enemies_3));

    // Boss
    let boss = [];
    boss.push(new Enemy(500, 100, 0.1, 2,IMGS.enemyLvl1Boss,dataOfEnemySize.W_Boss,dataOfEnemySize.H_Bos));
    stages.push(new Stage(boss));


    //-----------------
    return new Level(stages);
}
