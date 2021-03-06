const startingMinutes = 30;
let time = startingMinutes * 60;

const countdownEl = document.getElementById("countdown");
const countdownEle = document.getElementById("countdown2");
const countdownEli = document.getElementById("countdown3");

setInterval(updateCountdown, 1000);

function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? "0" + seconds : seconds;

    countdownEl.innerHTML = `${minutes}:${seconds}`;
    countdownEle.innerHTML = `${minutes}:${seconds}`;
    countdownEli.innerHTML = `${minutes}:${seconds}`;

    time--;
    time = time < 0 ? 0 : time;
}
