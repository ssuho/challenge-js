const clock = document.querySelector("h2#clock");

function sayHello() {
  const date = new Date();
  const hour = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.style = "font-family: DungGeunMo; color: #757575";
  clock.innerHTML = `${hour}:${minutes}:${seconds}`;
}

sayHello();
setInterval(sayHello, 1000);
