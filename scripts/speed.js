let speedItem = document.querySelectorAll('.speed_item'),
    arrowleft = document.querySelector('.arrow_left'),
    arrowRight = document.querySelector('.arrow_right'),
    val = 0;

arrowRight.addEventListener('click', () => {
    speedItem[val].classList.remove('line')
    val++
    speedItem[val].classList.add('line')
    const speed = document.querySelector('.line').innerText;
    setSpeed(Number(speed))
})

arrowleft.addEventListener('click', () => {
    speedItem[val].classList.remove('line')
    val--
    speedItem[val].classList.add('line')
    const speed = document.querySelector('.line').innerText;
    setSpeed(Number(speed))
})