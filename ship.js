class Ship {
    constructor(playerShots) {
        this.playerShots = playerShots;
        this.hp=5;
        this.width = 80;
        this.height= 90;
        this.y = height - 120;
        MOUSE_X = width/2-(this.width/2);
        this.x = MOUSE_X;
    };

    show() {
        image(IMGS.playerShip, this.x, this.y, this.width, this.height);
        //image( this.x, this.y, this.width, this.height);
        //image(IMGS.enemyLvl1Small,this.x, this.y,60,60);
    };

    update() {
        if(MOUSE_X < 10) MOUSE_X = 10;
        if(MOUSE_X > width-80) MOUSE_X = width-80;

        // if(mouseX > 10&&mouseX<width-80)
        this.x = MOUSE_X;
    };

    isHitted() {
        this.hp--;
        this.hitted = true;
        if (this.hp === 0) {
            return true;
        } else {
            return false;
        }

    };
    shoot() {
        this.playerShots.push(new Shot(this.x+30, this.y))
    };

}
