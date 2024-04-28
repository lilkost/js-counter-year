const nodeYear = document.getElementById('year');
const nodeDays = document.getElementById('days');
const nodeHourse = document.getElementById('hours');
const nodeMinutes = document.getElementById('minutes');
const nodeSeconds = document.getElementById('seconds');
const preloader = document.getElementById('preloader');
const countdown = document.getElementById('countdown');

// year
const currentYear = new Date().getFullYear();
const nextYear = new Date(`January 01 ${currentYear + 1} 00:00:00`);
// node year
nodeYear.innerText = currentYear + 1;

function updateCounter() {
    const currentTime = new Date();

    const diff = nextYear - currentTime;

    // секунды / минуты / часы / дни
    const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24);
    const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24;
    const minutesLeft = Math.floor(diff / 1000 / 60) % 60;
    const secondsLeft = Math.floor(diff / 1000) % 60;

    // node 
    nodeDays.innerText = daysLeft >= 10 ? daysLeft : `0${daysLeft}`;
    nodeHourse.innerText = hoursLeft >= 10 ? hoursLeft : `0${hoursLeft}`;
    nodeMinutes.innerText = minutesLeft >= 10 ? minutesLeft : `0${minutesLeft}`;
    nodeSeconds.innerText = secondsLeft >= 10 ? secondsLeft : `0${secondsLeft}`;
}
// update 
setInterval(updateCounter, 1000);
setTimeout(()=>{
    preloader.remove();
    countdown.style.display = 'flex';
},1000);