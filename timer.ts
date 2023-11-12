type Clock = {
    min: number;
    sec: number;
    ticking: boolean;
    working: boolean;
    ui: HTMLElement;
}
var timer: Clock = {
    min: 25,
    sec: 0,
    ticking: false,
    working: true,
    ui: document.getElementById("timer")!,
};
const button: HTMLElement = document.getElementById("startB")!;
function tick() {
    timer.sec -= 1;
    if (timer.sec == -1) {
        timer.sec = 59;
        timer.min -= 1;
    }
    if (timer.min == 0 && timer.sec == 0) {
        if(timer.working) {
            timer.working = false;
            timer.min = 5;
            timer.sec = 0;
        } else {
            timer.working = true;
            timer.min = 25;
            timer.sec = 0;
        }
    }
    timer.sec < 10 ? timer.ui.innerText = timer.min.toString() + ":0" + timer.sec.toString() : timer.ui.innerText = timer.min.toString() + timer.sec.toString(); 
}

function reset() {
    timer.min = 25;
    timer.sec = 0;
    timer.ticking = false;
    timer.working = true;
}

function startTimer() {
    interval: Number;
    if(timer.ticking == false) {
        timer.ticking = true;
        this.interval = setInterval(tick, 1000);
        button.innerText = "stop";
    } else {
        timer.ticking = false;
        clearInterval(this.interval);
        reset();
    }
}