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