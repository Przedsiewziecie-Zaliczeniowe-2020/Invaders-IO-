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
        if (deadEnemy===1)
            StageTwo(enemies,enemyShots);
        if (deadEnemy===5)
            StageThree(enemies,enemyShots)
//TODO Zrobić coś żeby przychodziła liczba przeciwników po zabicu stag'a  żeby do wyboru stage nie używać jak wyżej 0,1,5

// if (deadEnemy===koncowailosc)
        //     actualLevel++;
    }
};


