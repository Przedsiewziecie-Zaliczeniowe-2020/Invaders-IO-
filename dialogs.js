function scaleNameInputDialog() {
    let div = document.getElementById('nameInput');
    div.style.height = RES_PARAMS.canvasHeight + 'px';
    div.style.width = RES_PARAMS.canvasWidth + 'px';
    div.style.top = 0 + 'px';
    div.style.left = RES_PARAMS.canvasOriginX + 'px';
}


function showNameInputDialog(music) {
    let div = document.getElementById('nameInput');
    div.style.visibility = 'visible';
    PAUSE_MANAGER.pauseGame();

    let button = document.getElementById('btnEnterName')
    button.addEventListener('click', function () {

        let selectedName = document.getElementById('playerName').value;
        let legalChars = new RegExp('^[a-zA-Z0-9 ]{1,36}$');
        if (!legalChars.test(selectedName)) {
            document.getElementById('txtError').innerText = 'Please, insert correct name!';
            return;
        }

        PLAYER_NAME = selectedName;
        div.style.visibility = 'collapse';
        PAUSE_MANAGER.unPauseGame();
        DIALOG_MANAGER.flagNameInputDialog = false;
        music.play();

    }, false);
}

// jako argumenty podawany jest tekst do wyswietlenia
// mimo, ze wydaje sie ze funkcja nie przyjmuje argumentow to sa to argumenty ukryte i tak naprawde mozna podac dowolna ilosc
function showDialogBox() {
    let box = document.getElementById('dialogBox');
    box.style.display = 'block';
    PAUSE_MANAGER.pauseGame();

    let i = 0;
    let text = "";
    console.log(arguments.length);
    console.log(arguments);
    for (let x = 0; x < arguments.length; x++)
        text += arguments[x].toString();

    function typing() {
        if (i < text.length) {
            document.getElementById("text").innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, 60);
        }
    }
    typing();

    let boxCloseBtn = document.getElementById('dialogBoxClose');
    boxCloseBtn.addEventListener('click', function () {
        box.style.display = 'none';
        PAUSE_MANAGER.unPauseGame();
        setPointerLock();
    }, false);
}

let DIALOG_TEXTS =
    {
        beginingPt1: "Hey stop! Who are you?                                       ",
        beginingPt2: "?!  What are you doing here? Everyone else is fighting under Saturn!                           Ohhh ... it looks like your recovery procedure has failed            I don't know how much you remember but you must join your team on the battlefield as soon as possible!            We have some problems with connectivity - I can not guarantee you they are still alive ...  I need someone to check it for me, can you do it?",


    }
