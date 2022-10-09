const bgmBtn = document.querySelector("#music-note");

const audioContainer = document.querySelector("audio");
audioContainer.volume = 0.5;


function bgmSwitch (){
  if (audioContainer.paused){
    audioContainer.play();
  } else {
    audioContainer.pause();
  }
}

bgmBtn.addEventListener("click", bgmSwitch)