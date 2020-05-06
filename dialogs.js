function setupNameInput() {
    let div = document.getElementById('nameInput');
    div.style.height = RES_PARAMS.canvasHeight + 'px';
    div.style.width = RES_PARAMS.canvasWidth + 'px';
    div.style.top = 0+ 'px';
    div.style.left = RES_PARAMS.canvasOriginX + 'px';
    div.style.visibility = 'visible';


    let button = document.getElementById('btnEnterName')
    button.addEventListener('click', function() {

        div.style.visibility = 'collapse';
        IS_GAME_PAUSED = false;
        IS_GAME_DIALOG_ON = false;
        document.querySelector('canvas').requestPointerLock();
        loop();
    }, false);
}





