let audio = new Audio("./music/audio1.mp3")
    play = document.getElementById('playAudio')

    prevAudio = document.getElementById('prevAudio')
    nextAudio = document.getElementById('nextAudio')
    playing = true
    idAudio = 0

play.addEventListener('click', () => {
  if (playing) {
    console.log('play')
    audio.play()
    play.style = 'background-image: url(./image/pause.png);'
  }
  if (!playing) {
    console.log('pause');
    audio.pause()
    play.style = 'background-image: url(./image/play.png);'
  }
  playing = !playing;
})


nextAudio.addEventListener('click', () => {
  nextAudios()
})

prevAudio.addEventListener('click', () => {
  prevAudios()
})

audio.addEventListener('ended', () => {
  nextAudios();
})

function nextAudios() {
  idAudio++
  if (idAudio > 2) {
    idAudio = 0;
  }
  console.log(idAudio);
  playing = false;
  audio.pause()
  audio = new Audio('./music/audio1/silent.wav')
  audio = new Audio(audioArray[idAudio].music);
  console.log(audioArray[idAudio].music);
  audio.play()
  play.style = 'background-image: url(./image/pause.png);'
}

function prevAudios() {
  idAudio--
  if (idAudio < 0) {
    idAudio = 2;
    console.log(idAudio + ' ошибка');
  }
  console.log(idAudio);
  playing = false;
  audio.pause()
  audio = new Audio('./music/audio1/silent.wav')
  audio = new Audio(audioArray[idAudio].music);
  console.log(audioArray[idAudio].music);
  audio.play()
  play.style = 'background-image: url(./image/pause.png);'
}
