
let line = document.querySelector('.line'),
    speedBtn = document.querySelector('.speed_btn'),
    speed = document.querySelector('.speed'),
    speedExit = document.querySelector('.speed_exit');
    speedValue = document.querySelector('.speed_value')
speedBtn.addEventListener('click', () => {
    speed.classList.add('speed_active')
})

speedExit.addEventListener('click', () => {
    speed.classList.remove('speed_active')
})

line.onchange = function (e) {
    // let speed = e.target.value
    speedValue.innerText = e.target.value
    setSpeed(Number(e.target.value))
}

function setSpeed(elem) {
    audioSpeed = elem;
    audio.playbackRate = elem
}



