const hourshand = document.querySelector('.hours-hand');
const minuteshand = document.querySelector('.minutes-hand');
const secondshand = document.querySelector('.seconds-hand');

const setTime = () => {
    const currentDate = new Date();
    const seconds = currentDate.getSeconds() / 60;
    const minutes = (seconds + currentDate.getMinutes()) / 60;
    const hours = (minutes + currentDate.getHours()) / 12;

    secondshand.style.setProperty('--rotation', seconds * 360);
    minuteshand.style.setProperty('--rotation', minutes * 360);
    hourshand.style.setProperty('--rotation', hours * 360);
   
}
setInterval(setTime,1000)