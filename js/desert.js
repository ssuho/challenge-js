const desertImage = "desert.png";

const bgArea = document.querySelector("#background");
const desertBg = document.createElement("div");

desertBg.style.backgroundImage = `url('img/${desertImage}')`;
desertBg.style.zIndex = "1";
desertBg.style.animation = "infiniteScrollBg 10s linear infinite";

bgArea.appendChild(desertBg);