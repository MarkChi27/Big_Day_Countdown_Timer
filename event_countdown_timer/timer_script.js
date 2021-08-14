const daysLeft = document.getElementById("days");
const hoursLeft= document.getElementById("hours");
const minsLeft = document.getElementById("mins");
const secondsLeft = document.getElementById("seconds");


function countdown() {
    const bigDay = localStorage.getItem("EventDay");
    const curDay = new Date();

    const totalSeconds = (bigDay - curDay.getTime()) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysLeft.innerHTML = days;
    hoursLeft.innerHTML = formatTime(hours);
    minsLeft.innerHTML = formatTime(mins);
    secondsLeft.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}


// initial call
countdown();
// dropDown();

setInterval(countdown, 1000);
