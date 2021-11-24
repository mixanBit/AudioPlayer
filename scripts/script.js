let rangeAudio = document.getElementById('rangeAudio')
    play = document.querySelector('.playAudio')
    prevAudio = document.getElementById('prevAudio')
    nextAudio = document.getElementById('nextAudio')
    playing = true
    idAudio = 0
let volumePercentage;
let progress = document.querySelector('.progress');
//Инициализация данных
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
  audio.volume = 0.2;
  downloadAudio()
}
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

function nextAudios() {
  idAudio++
  if (idAudio > audioArray.length - 1) {
    idAudio = 0
  }
  playing = false;
  audio.pause()
  // очистка переменной методом взятия пустого звука
  audio = new Audio('./music/audio1/silent.wav')
  initAudio()
  if(volumePercentage == undefined){
    audio.volume = 0.2;
  }
  else{
    audio.volume = volumePercentage;
  }
  initSoundImage()
  initSoundName()
  initSoundAuthor()
  audio.play()
  play.style = 'background-image: url(./image/pause.png);'
  
  console.log(audio.volume);
  console.log(idAudio)
  console.log(audioArray[idAudio].music)
  console.log(audioArray[idAudio].name)
}

function prevAudios() {
  idAudio--
  if (idAudio < 0) {
    idAudio = audioArray.length - 1;
  }
  playing = false
  audio.pause()
  // очистка переменной методом взятия пустого звука
  audio = new Audio('./music/audio1/silent.wav')
  initAudio()
  if(volumePercentage == undefined){
    audio.volume = 0.2;
  }
  else{
    audio.volume = volumePercentage;
  }
  initSoundImage()
  initSoundName()
  initSoundAuthor()
  audio.play()
  play.style = 'background-image: url(./image/pause.png);'

  console.log(audio.volume);
  console.log(idAudio)
  console.log(audioArray[idAudio].music)
  console.log(audioArray[idAudio].name)
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


// TEST
let test1 = document.querySelector('.test1');

test1.addEventListener('click', () =>{
  initProgress()
})

function initProgress() {
  progress.max = Number(audio.duration.toFixed())
  // progress.value = Number(audio.currentTime.toFixed())
  console.log(progress.max);
  // console.log(progress.value);
}
