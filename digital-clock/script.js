const box = document.querySelector(".box");

const monthArr = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

const dayNameArr = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

function run(){
    let date = new Date();

    let hour = date.getHours();

    let minutes = date.getMinutes();

    let second = date.getSeconds();

    let millisecond = date.getMilliseconds();

    let day = date.getDate();

    let month = date.getMonth();

    let year = date.getFullYear();

    let dayName = date.getDay();

    if(hour > 12 ) hour-= 12;

    if(hour < 10) hour = "0" + hour;
    if(minutes < 1 ) minutes = "0" + minutes;
    if(second < 10)second = "0" +second;

    let da =  `<span>${dayNameArr[dayName]},${day},${monthArr[month]},${year}<`;
    
    box.innerHTML = `${hour}:${minutes}:${second} <br/> ${da} `;
    

  


}

setInterval(run,1000);
