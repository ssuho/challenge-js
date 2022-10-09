const images = ["bg0.png", "bg1.png", "bg2.png"];
const chosenImage = images[Math.floor(Math.random() * images.length)]

const bg = document.body;
const bgImage = document.createElement("div");

bgImage.classList.add("bg")
bgImage.style.backgroundImage = `url('img/${chosenImage}')`;
// bgImage.style.animation = "infiniteScrollBg 10s linear infinite";

bg.appendChild(bgImage);