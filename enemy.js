class Enemy {
    flyDirection = 'right';

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
    };

    setupEnemyShots(enemyShots) {
        this.enemyShots = enemyShots;
    }

    showEnemyLife() {
        if (this.hitted && this.hp !== 0) {
            fill (255, 0, 0);
            rect (this.x, this.y, this.hp * 100 / this.startHp, 3);
        }
    }

    isHitted() {
        this.hp--;
        this.hitted = true;
        if (this.hp === 0) {
            return true;
        } else {
            return false;
        }

    }

    move() {
        this.y += this.vy;
        this.x += this.vx;
    };

    //zwraca prawde gdy dolecial, jezeli nie to leci i zwraca falsz
    flyTo(toX, toY) {
        if (this.x === toX && this.y === toY)
            return true;

        if (Math.abs (this.x - toX) < Math.abs (this.vx))
            this.x = toX;
        else {
            if ((this.x - toX) > 0)
                this.vx = (this.vx > 0) ? -this.vx : this.vx;
            else {
                this.vx = (this.vx > 0) ? this.vx : -this.vx;
            }
            this.x += this.vx;
        }

        if (Math.abs (this.y - toY) < Math.abs (this.vy))
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
        image (this.texture, this.x, this.y, this.width, this.height)
    };

    attemptShooting() {
        let rand = random (); // random() bez argumentow zwraca float z przedzialu <0;1)
        if (rand < this.shootProbability) {
            this.shoot ();

        }
    };

    shoot() {
        this.enemyShots.push (new EnemyShot (this.x + 35, this.y, this.vx))
    };

    flyToRightAndBack(leftX, rightX) {
        if (this.flyDirection === 'right') {
            if (this.flyTo (rightX, this.y))
                this.flyDirection = 'left';
        }

        if (this.flyDirection === 'left') {
            if (this.flyTo (leftX, this.y)) {
                this.flyDirection = 'right';
            }
        }
    }
}
