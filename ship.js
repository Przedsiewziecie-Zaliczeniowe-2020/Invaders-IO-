
 class Ship {
    constructor() {
        this.y = height-120;
        this.x = mouseX;

        this.update = function () {

            this.x = mouseX;
        };
    };
    show() {
        fill (255);
        image(shipImg,this.x, this.y, 80, 90);
    };


}
