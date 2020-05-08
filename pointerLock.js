function pointerLockSetup(){
    let canvas = document.querySelector('canvas');
    canvas.onclick = function(){
        canvas.requestPointerLock();
    };
    canvas.requestPointerLock = canvas.requestPointerLock || canvas.mozRequestPointerLock;

    document.addEventListener('pointerlockchange', lockChangeAlert, false);
    document.addEventListener('mozpointerlockchange', lockChangeAlert, false);
}

function lockChangeAlert() {
    if (document.pointerLockElement === canvas || document.mozPointerLockElement === canvas) {
        document.addEventListener("mousemove", updatePosition, false);
        pointerLock = true;
        IS_GAME_PAUSED = false;
        loop();
    } else {
        document.removeEventListener("mousemove", updatePosition, false);
        pointerLock = false;
        IS_GAME_PAUSED = true;
    }
}

function updatePosition(e){
    if(MOUSE_X < width-80 && e.movementX > 0){
        MOUSE_X += e.movementX;
    }
    if(MOUSE_X > 10 && e.movementX < 0){
        MOUSE_X += e.movementX;
    }

    if(MOUSE_Y < height && e.movementY > 0){
        MOUSE_Y += e.movementY;
    }
    if(MOUSE_Y > 0 && e.movementY < 0){
        MOUSE_Y += e.movementY;
    }
}