function setupNameInput() {
    let div = document.getElementById('nameInput');
    div.style.height = RES_PARAMS.canvasHeight + 'px';
    div.style.width = RES_PARAMS.canvasWidth + 'px';
    div.style.top = 0+ 'px';
    div.style.left = RES_PARAMS.canvasOriginX + 'px';
    div.style.visibility = 'visible';
    IS_GAME_PAUSED = true;
    IS_GAME_DIALOG_ON = true;


    let button = document.getElementById('btnEnterName')
    button.addEventListener('click', function() {

        PLAYER_NAME = document.getElementById('playerName').value;
        div.style.visibility = 'collapse';
        
        showDialogBox(); // TODO to jest tu tylko tymczasowo. Trzeba okodowac mechanizm pojawiania sie dialogow w glownej petli draw

    }, false);
}

function showDialogBox() {
    let box = document.getElementById('dialogBox');
    box.style.display = 'block';
    IS_GAME_PAUSED = true;
    IS_GAME_DIALOG_ON = true;

    let i = 0;
    let text = "Hey stop! Who are you?                                       " + PLAYER_NAME+"?!  What are you doing here? Everyone else is fighting under Saturn!                           Ohhh ... it looks like your recovery procedure has failed            I don't know how much you remember but you must join your team on the battlefield as soon as possible!            We have some problems with connectivity - I can not guarantee you they are still alive ...  I need someone to check it for me, can you do it?";
    function typing() {
        if (i < text.length) {
            document.getElementById("text").innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, 60);
        }
    }
    typing();

    let boxCloseBtn = document.getElementById('dialogBoxClose');
    boxCloseBtn.addEventListener('click', function() {
        box.style.display = 'none';
        IS_GAME_PAUSED = false;
        IS_GAME_DIALOG_ON = false;
        document.querySelector('canvas').requestPointerLock();
        loop();
    }, false);

}




