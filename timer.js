var timer = {
    min: 25,
    sec: 0,
    ticking: false,
    working: true,
    ui: document.getElementById("timer"),
};
var button = document.getElementById("startB");
timer.ui.textContent = "25:00"
function tick() {
    timer.sec -= 1;
    if (timer.sec == -1) {
        timer.sec = 59;
        timer.min -= 1;
    }
    if (timer.min == 0 && timer.sec == 0) {
        if (timer.working) {
            timer.working = false;
            timer.min = 5;
            timer.sec = 0;
        }
        else {
            timer.working = true;
            timer.min = 25;
            timer.sec = 0;
        }
    }
    timer.sec < 10 ? timer.ui.textContent = timer.min.toString() + ":0" + timer.sec.toString() : timer.ui.textContent = timer.min.toString() + ":" + timer.sec.toString();
}
function reset() {
    timer.min = 25;
    timer.sec = 0;
    timer.ticking = false;
    timer.working = true;
    timer.ui.textContent = "25:00"
}
function startTimer() {
    interval: Number;
    if (timer.ticking == false) {
        timer.ticking = true;
        this.interval = setInterval(tick, 1000);
        button.textContent = "stop";
    }
    else {
        timer.ticking = false;
        clearInterval(this.interval);
        button.textContent = "start";
        reset();
    }
}
