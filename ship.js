class Ship {
    constructor(playerShots) {
        this.playerShots = playerShots;

        this.y = height - 120;
        this.x = mouseX;
        this.width = 80;
        this.height= 90;
    };

    show() {
        image(SHIP_IMG, this.x, this.y, this.width, this.height);
    };

    update() {
        this.x = mouseX;

        // TODO zrobić tu ifa by nie wyjezdal poza ekran
    };

    shoot() {
        this.playerShots.push(new Shot(this.x, this.y)) //TODO zrobic by strzelal ze srodka
    };

}
