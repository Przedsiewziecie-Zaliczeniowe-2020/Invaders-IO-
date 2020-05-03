class Enemy {
    constructor(x, y, shootProbability, enemyShots) {
        this.x = x;
        this.y = y;
        this.shootProbability = shootProbability;
        this.enemyShots = enemyShots;

        this.width = 40;
        this.height = 40;
        this.startX = this.x;
        this.moveDirection = "right";
        this.moveRange = 100;
        this.vx = 0;
        this.vy = 0;
    };

    update() {
        if (this.x < this.startX + this.moveRange && this.moveDirection == "right") {
            this.vx = +2;
        }
        if (this.x > this.startX - this.moveRange && this.moveDirection == "left") {
            this.vx = -2;
        }

        // jesli dolecial do prawego konca trasy, zmien kierunek na lewo
        if (this.x >= this.startX + 200) {
            this.moveDirection = "left";
        }
        // analogicznie..
        if (this.x <= this.startX) {
            this.moveDirection = "right";
        }
    };

    move() {
        this.y += this.vy;
        this.x += this.vx;
    };

    show() {
        image(ENEMY_ONE_SMALL,this.x, this.y,60,60)
    };

    attemptShooting() {
        let rand = random(); // random() bez argumentow zwraca float z przedzialu <0;1)
        if (rand < this.shootProbability) {
            this.shoot();
        }
    };

    shoot() {
        this.enemyShots.push(new EnemyShot(this.x+35, this.y, this.vx))

    };

}