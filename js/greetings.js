const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");
const savedUserName = localStorage.getItem("UserName")

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "UserName"

function checkLocalStorage() {
  if (savedUserName === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
  } else {
    greeting.innerHTML = `Hello ${localStorage.getItem(USERNAME_KEY)}!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
  }
}

checkLocalStorage();

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  greeting.innerHTML = `Hello ${username}!`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);
