let RES_PARAMS = {
    canvasWidth: null,
    canvasHeight: null,
    canvasOriginX: null,
    canvasOriginY: null,
    scalingFactorHeight: null,
    scalingFactorWidth: null
}

function setupResParamas() {
    let div = document.getElementById ('sketchHolder');
    RES_PARAMS.canvasWidth = div.offsetWidth;
    RES_PARAMS.canvasHeight = div.offsetHeight;
    RES_PARAMS.canvasOriginX = div.offsetLeft+8;
    RES_PARAMS.canvasOriginY = div.offsetTop;
    RES_PARAMS.scalingFactorHeight = 937 / RES_PARAMS.canvasHeight; // przyjalem 937 jako referencyjna wysokosc canvasu, jak nie wiesz o co cho to zapytaj mnie na msg
    RES_PARAMS.scalingFactorWidth = 1405 / RES_PARAMS.canvasWidth; // przyjalem 1405 jako referencyjna szerokosc canvasu, jak nie wiesz o co cho to zapytaj mnie na msg
}