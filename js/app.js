'use strict';

let last_time = 0;

const timeUpdate = (time) => {
    let date = new Date();
    let hours = date.getHours()*30;
    let minutes = date.getMinutes()*6;
    let seconds = date.getSeconds()*6;

    let delta = time - last_time;

    console.log(`Piu basso è il numero più sei performante --> ${Math.floor(delta)} FPS`);

    last_time = time;
    

    document.querySelector('.hours-box').style.transform = `rotate(${hours}deg)`;
    document.querySelector('.minutes-box').style.transform = `rotate(${minutes}deg)`;
    document.querySelector('.seconds-box').style.transform = `rotate(${seconds}deg)`;

    document.querySelector('.time').textContent = date.toString().substring(15,24);

    window.requestAnimationFrame(timeUpdate);
}

window.addEventListener('load', () => { 
    window.requestAnimationFrame(timeUpdate);

});
