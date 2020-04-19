class Ship {
    constructor() {
        this.x = mouseX;
        this.y = height - 60;
        this.update = function () {

            this.x = mouseX;
        };
    };
    show() {
        fill (255);
        rect (this.x, this.y, 30, 50);
    };
}
