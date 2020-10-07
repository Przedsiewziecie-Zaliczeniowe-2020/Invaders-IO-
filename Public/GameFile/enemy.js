class Enemy {
    flyDirection = 'right';
    isExploding = false;
    explodeFrame = 0;

    constructor(x, y, shootProbability, speed, texture, width, height, hp) {
        this.x = x;
        this.y = y;
        this.shootProbability = shootProbability;
        this.texture = texture;
        this.width = width;
        this.height = height;
        this.vx = speed;
        this.vy = speed;
        this.hp = hp;
        this.startHp = hp;
        this.hitted = false;
        this.explosionXScale = (this.width * 1.75 - this.width);
        this.explosionYScale = (this.height * 1.75 - this.height)
    };

    setupEnemyShots(enemyShots) {
        this.enemyShots = enemyShots;
    }

    showEnemyLife() {
        if (this.hitted && this.hp !== 0) {

            fill (255, 0, 0);
            let hpLength = (this.hp/this.startHp) * this.width;
            rect ((this.x+this.width/2)-this.width/2, this.y, hpLength, 3);

        }
    }

    isHitted() {
        this.hp = (this.hp - 1 < 0) ? 0 : this.hp - 1;
        console.log("HP: " +this.hp)
        this.hitted = true;
        if (this.hp === 0) {
            console.log("true")
            return true;
        } else {
            console.log("false")
            return false;
        }
    }

    move() {
        this.y += this.vy;
        this.x += this.vx;
    };

    //zwraca prawde gdy dolecial, jezeli nie to leci i zwraca falsz
    flyTo(toX, toY) {
        if (this.isExploding === true)
            return true;

        if (this.x === toX && this.y === toY)
            return true;

        if (Math.abs(this.x - toX) < Math.abs(this.vx))
            this.x = toX;
        else {
            if ((this.x - toX) > 0)
                this.vx = (this.vx > 0) ? -this.vx : this.vx;
            else {
                this.vx = (this.vx > 0) ? this.vx : -this.vx;
            }
            this.x += this.vx;
        }

        if (Math.abs(this.y - toY) < Math.abs(this.vy))
            this.y = toY;
        else {
            if ((this.y - toY) > 0)
                this.vy = (this.vy > 0) ? -this.vy : this.vy;
            else {
                this.vy = (this.vy > 0) ? this.vy : -this.vy;
            }
            this.y += this.vy;
        }
        return false;
    }

    show() {
        //tint(255, this.Opacity) // ta funkcja zre za duzo mocy obliczeniowej
        if (this.explodeFrame < 18) {
            image(this.texture, this.x, this.y, this.width, this.height)
        }

    };

    attemptShooting() {
        let rand = random(); // random() bez argumentow zwraca float z przedzialu <0;1)
        if (rand < this.shootProbability) {
            this.shoot();

        }
    };

    shoot() {
        this.enemyShots.push (new EnemyShot (this.x +(this.width/2), this.y+(this.height/2), this.vx))
    };

    flyToRightAndBack(leftX, rightX) {
        if (this.flyDirection === 'right') {
            if (this.flyTo(rightX, this.y))
                this.flyDirection = 'left';
        }

        if (this.flyDirection === 'left') {
            if (this.flyTo(leftX, this.y)) {
                this.flyDirection = 'right';
            }
        }
    }

    immobilizeAndNeutralize() {
        this.vy = 0;
        this.vx = 0;
        this.shootProbability = 0;
    }

    explode() {
        if (this.explodeFrame === 48)
            return true;
        image(IMGS.explosions[this.explodeFrame], this.x - this.explosionXScale / 2, this.y - this.explosionYScale / 2, this.width + this.explosionXScale, this.height + this.explosionYScale)
        this.explodeFrame += 1;

        return false;
    }
}
module.exports=Enemy;
// exports.isHitted=isHitted;
