class DialogsManager{

    flagNameInputDialog = true;
    flagBegginingDialog = true;

    attemptDialog(test) // TODO tutaj ma byc sprawdzany warunek wyswietlenia dialogu
    {
        if(test === true && this.flagNameInputDialog === false && this.flagBegginingDialog === true)
        {
            this.flagBegginingDialog = false;
            showDialogBox(DIALOG_TEXTS.beginingPt1, PLAYER_NAME, DIALOG_TEXTS.beginingPt2);
        }
    }
}