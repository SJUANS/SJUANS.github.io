function clock(){
    const today = new Date;
    const time = document.getElementById("clock-time")
    const date = document.getElementById("clock-date")

    const hour = String(today.getHours()).padStart(2,"0");
    const minute = String(today.getMinutes()).padStart(2,"0");
    const second = String(today.getSeconds()).padStart(2,"0");

date.innerText = `${today}`;
time.innerText = `${hour}:${minute}:${second}`;
}
clock();
setInterval(clock, 1000);