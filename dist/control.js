// AYALA
// משתה גלובלי שלא משתנה כלל
var stopwatchInterval;
var del;
// נתחיל אותו ב0 כפי השעון שמתחיל ב0
var timeInms = 0;
function start() {
    stopwatchInterval = setInterval(function () {
        timeInms = timeInms +
        ;
    }, 2000);
    console.log("start");
}
function stop() {
    console.log("stop");
}
function reset() {
    console.log("reset");
}
