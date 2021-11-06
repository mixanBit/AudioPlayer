let audio
    // rangeAudio = document.getElementById('rangeAudio')
    play = document.querySelector('.playAudio')

    // prevAudio = document.getElementById('prevAudio')
    // nextAudio = document.getElementById('nextAudio')
    playing = true
    idAudio = 0
    
    let image = document.querySelector('.image')
    initSoundImage()
    let soundName = document.querySelector('.sound_name')
    initSoundName()
    let soundAuthor = document.querySelector('.sound_author')
    initSoundAuthor()
    // audio.volume = 0.2

function initSoundImage() {
  image.style.backgroundImage = `url(${audioArray[idAudio].image})`
}
function initSoundName() {
  soundName.innerText = audioArray[idAudio].name
}
function initSoundAuthor() {
  soundAuthor.innerText = audioArray[idAudio].author
}


initAudio()
function initAudio() {
  audio = new Audio(audioArray[idAudio].music)
}

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
    console.log('pause')
    audio.pause()
    play.style = 'background-image: url(./image/play.png);'
  }
  playing = !playing;
})


document.querySelector('.nextAudio').addEventListener('click', nextAudios)
document.querySelector('.prevAudio').addEventListener('click', prevAudios)
audio.addEventListener('ended', nextAudios)


function nextAudios() {
  idAudio++
  if (idAudio > audioArray.length - 1) {
    idAudio = 0
  }
  playing = false;
  audio.pause()
  audio = new Audio('./music/audio1/silent.wav')
  initAudio()
  initSoundImage()
  initSoundName()
  initSoundAuthor()
  audio.play()
  play.style = 'background-image: url(./image/pause.png);'

  console.log(idAudio)
  console.log(audioArray[idAudio].music)
  console.log(audioArray[idAudio].name)
}

function prevAudios() {
  idAudio--
  if (idAudio < 0) {
    idAudio = audioArray.length - 1;
    console.log(idAudio + ' ошибка')
  }
  playing = false
  audio.pause()
  audio = new Audio('./music/audio1/silent.wav')
  initAudio()
  initSoundImage()
  initSoundName()
  initSoundAuthor()
  audio.play()
  play.style = 'background-image: url(./image/pause.png);'

  console.log(idAudio)
  console.log(audioArray[idAudio].music)
  console.log(audioArray[idAudio].name)
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


