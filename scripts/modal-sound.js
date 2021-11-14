let sound = document.querySelector('.sound'),
    btnSound = document.querySelector('.btn_sound');


btnSound.addEventListener('click', () => {
  sound.classList.toggle('sound_open')
})
