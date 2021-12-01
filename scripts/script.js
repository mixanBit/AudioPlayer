let rangeAudio = document.getElementById('rangeAudio')
play = document.querySelector('.playAudio')
prevAudio = document.getElementById('prevAudio')
nextAudio = document.getElementById('nextAudio')
playing = true
idAudio = 0
let audioSpeed = 1
let volumePercentage;
let progress = document.querySelector('.progress');
//Инициализация данных
/**
 * @type {HTMLAudioElement}
 */
let audio
initAudio()
let image = document.querySelector('.image')
initSoundImage()  
let soundName = document.querySelector('.sound_name')
initSoundName()
let soundAuthor = document.querySelector('.sound_author')
initSoundAuthor()


function initAudio() {
  audio = new Audio(audioArray[idAudio].music)
  audio.removeEventListener('loadedmetadata', metadataload)
  audio.removeEventListener('timeupdate', timeSet)
  audio.addEventListener('loadedmetadata', metadataload)
  audio.addEventListener('timeupdate', timeSet)
  audio.volume = 0.2;
  downloadAudio()
}

// progress audio
function metadataload() {
  progress.max = audio.duration.toFixed()
}
function timeSet() {
  progress.value = audio.currentTime.toFixed()
}

audio.addEventListener('loadedmetadata', metadataload)
audio.addEventListener('timeupdate', timeSet)

function initSoundImage() {
  image.style.backgroundImage = `url(${audioArray[idAudio].image})`
}
function initSoundName() {
  soundName.innerText = audioArray[idAudio].name
}
function initSoundAuthor() {
  soundAuthor.innerText = audioArray[idAudio].author
}
// Конец инициализация данных


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


// Событие переключения
document.querySelector('.nextAudio').addEventListener('click', nextAudios)
document.querySelector('.prevAudio').addEventListener('click', prevAudios)
audio.addEventListener('ended', nextAudios)


function setAudio() {
  playing = false;
  audio.pause()
  // очистка переменной методом взятия пустого звука
  audio.removeAttribute('currentSrc')
  audio.removeAttribute('src')
  audio.load()
  initAudio()
  setSpeed(audioSpeed)
  if (volumePercentage == undefined) {
    audio.volume = 0.2;
  }
  else {
    audio.volume = volumePercentage;
  }
  initSoundImage()
  initSoundName()
  initSoundAuthor()
  audio.play()
  play.style = 'background-image: url(./image/pause.png);'
}

function nextAudios() {
  idAudio++
  if (idAudio > audioArray.length - 1) {
    idAudio = 0
  }
  setAudio()

  // console.log(audio.volume);
  // console.log(idAudio)
  // console.log(audioArray[idAudio].music)
  // console.log(audioArray[idAudio].name)
}

function prevAudios() {
  idAudio--
  if (idAudio < 0) {
    idAudio = audioArray.length - 1;
  }
  setAudio()

  // console.log(audio.volume);
  // console.log(idAudio)
  // console.log(audioArray[idAudio].music)
  // console.log(audioArray[idAudio].name)
}
// конец Событие переключения


// Регулятор громкости
rangeAudio.onchange = function (e) {
  rangevalue.innerText = e.target.value;
  volumePercentage = e.target.value / 100;
  audio.volume = volumePercentage;
  console.log(e.target.value)
}
// конец регулятор громкости

