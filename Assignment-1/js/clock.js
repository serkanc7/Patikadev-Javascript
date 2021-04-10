let name = prompt("Adınız nedir?");
let myName = document.querySelector("#myName");
myName.innerHTML = name;

let myClock = document.querySelector("#myClock");

function showTime() {
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    if (hour < 10) {
        hour = `0${hour}`;
    }
    if (min < 10) {
        min = `0${min}`;
    }
    if (sec < 10) {
        sec = `0${sec}`;
    }
    var day;
    switch (date.getDay()) {
        case 1:
            day = "Pazartesi";
            break;
        case 2:
            day = "Salı";
            break;
        case 3:
            day = "Çarşamba";
            break;
        case 4:
            day = "Perşembe";
            break;
        case 5:
            day = "Cuma";
            break;
        case 6:
            day = "Cumartesi";
            break;
        case 7:
            day = "Pazar";
    }
    myClock.innerHTML = `${hour}:${min}:${sec} ${day}`;
    setTimeout(showTime,1000);
}
showTime();

    

