class Ship {
    constructor(playerShots) {
        this.playerShots = playerShots;

        this.y = height - 120;
        this.x = mouseX;
        this.width = 80;
        this.height= 90;
    };

    show() {
        image(IMGS.playership1, this.x, this.y, this.width, this.height);
    };

    update() {
        if(mouseX>10&&mouseX<width-80)
        this.x = mouseX;


    };

    shoot() {
        this.playerShots.push(new Shot(this.x+30, this.y)) //TODO zrobic by strzelal ze srodka
    };

}
