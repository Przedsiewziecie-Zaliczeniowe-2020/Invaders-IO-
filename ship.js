class Ship {
    constructor() {
        this.y = height - 120;
        this.x = mouseX;
        this.width = 80;
        this.height= 90;
    };

    show() {
        image(shipImg, this.x, this.y, this.width, this.height);
    };

    update() {
        this.x = mouseX;

        // TODO zrobić tu ifa by nie wyjezdal poza ekran
    };

}
