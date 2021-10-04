function time(){
    let d = new Date();
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();

    let x = document.getElementById('time-container');
    x.innerHTML = hours+":"+(minutes<10?"0":"")+minutes+":"+(seconds<10?"0":"")+seconds;
}

setInterval(time, 1000);