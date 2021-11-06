let audioArray = [
  {
    'music': './music/audio1.mp3'
  },
  {
    'music': './music/audio2.mp3'
  },
  {
    'music': './music/audio3.mp3'
  }
]


let audio = new Audio("./music/audio1.mp3")
    // rangeAudio = document.getElementById('rangeAudio')
    play = document.getElementById('playAudio')

    prevAudio = document.getElementById('prevAudio')
    nextAudio = document.getElementById('nextAudio')
    playing = true
    idAudio = 0
    // audio.volume = 0.2

// rangeAudio.onchange = function (e) {
//   console.log(e.target.value)
//   audio.volume = e.target.value / 100;
// }

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


// input range
// $('#rangeAudio[type=range]').on('input', function(e){
//   var min = e.target.min,
//       max = e.target.max,
//       val = e.target.value;

//   $(e.target).css({
//     'backgroundSize': (val - min) * 100 / (max - min) + '% 100%'
//   });
// })


