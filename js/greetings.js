const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const todoForm = document.querySelector("#todotodo");
const quote = document.querySelector("#quote");
const clockweather = document.querySelector("#clock-weather")
const logOutbtn = document.querySelector("#weather button");

const HIDDEN_CLASSNAME = "hidden";
const USER_NAME = "user";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  todoForm.classList.remove(HIDDEN_CLASSNAME);
  quote.classList.remove(HIDDEN_CLASSNAME);
  logOutbtn.classList.remove(HIDDEN_CLASSNAME);
  greeting.classList.add("logingreeting");
  clockweather.classList.remove("loginclock");
  const user = loginInput.value;
  localStorage.setItem(USER_NAME, user);
  paintGreeting();
}

function paintGreeting() {
  const user = localStorage.getItem(USER_NAME);
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `it's good day to write code, ${user}`;
}

const savedUsername = localStorage.getItem(USER_NAME);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  todoForm.classList.remove(HIDDEN_CLASSNAME);
  quote.classList.remove(HIDDEN_CLASSNAME);
  logOutbtn.classList.remove(HIDDEN_CLASSNAME);
  greeting.classList.add("logingreeting");
  clockweather.classList.remove("loginclock");
  paintGreeting();
}
