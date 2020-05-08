var Level = function() {
    this.level = "";
};

Level.prototype = {
    setStrategy: function(level) {
        this.company = level;
    },

    setLevel: function(enemies,enemyShots,deadEnemy) {
        return this.company.setLevel(enemies,enemyShots,deadEnemy);
    }
};

var Lv1 = function() {
    this.setLevel = function(enemies,enemyShots,deadEnemy) {
console.log(deadEnemy);
        if (deadEnemy===0)
       StageOne(enemies,enemyShots);
        if (deadEnemy===countEnemies)
            StageTwo(enemies,enemyShots);
        if (deadEnemy===countEnemies)
            StageThree(enemies,enemyShots)
//TODO Zrobić żeby stage się zmieniały, bo wpada w pętle przy 2 stage'u, albo inaczej sprawdzać zmiane stagu, albo ustawić zamiast 'countEnemies' sztywne wartosci zależne od ilości przeiwnikow w stagu.


// if (deadEnemy===koncowailosc)
        //     actualLevel++;
    }
};


