const images = ["0.png", "1.png", "2.png"];
const chosenImage = images[Math.floor(Math.random() * images.length)]

const bgArea = document.querySelector("#background");
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

bgArea.appendChild(bgImage);