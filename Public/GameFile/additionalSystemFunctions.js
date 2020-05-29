function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}