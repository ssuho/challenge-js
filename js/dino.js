const dino = document.querySelector("#dino");
const dinogif = dino.querySelector("#dinogif");
const dino2 = dino.querySelector("#dino2");
const dinodown = dino.querySelector("#dinodowngif");
const addBtn = document.querySelector("#todo-section form");

const HIDDEN = "hidden";

function dinoAstonished (){
  dino2.classList.remove(HIDDEN);
  dinogif.classList.add(HIDDEN);
  dinodown.classList.add(HIDDEN);
  const running = desertBg.style.animationPlayState === "running";
  desertBg.style.animationPlayState = "paused";
  setTimeout(() => {
    dino2.classList.add(HIDDEN);
    dinogif.classList.remove(HIDDEN);
    desertBg.style.animationPlayState = "running";
  }, 300);
}

function dinoClicked (){
  dinodown.classList.remove(HIDDEN);
  dinogif.classList.add(HIDDEN);
  setTimeout(() => {
    dinodown.classList.add(HIDDEN);
    dinogif.classList.remove(HIDDEN);
  }, 2000);
}

addBtn.addEventListener("submit", dinoAstonished);
dino.addEventListener("click", dinoClicked)