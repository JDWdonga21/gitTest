const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
const greeting = document.querySelector("#greeting");
const logoutbutton = document.querySelector("#logout");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(tomato) {
  //submit 이벤트 감지
  tomato.preventDefault(); //브라우저가 기본동작을 못 하도록 막아줌
  console.log(tomato); // onLoginSubmit 이벤트 발생시 브라우저가 주는 정보, 이벤트에 관한 정보
  loginForm.classList.add(HIDDEN_CLASSNAME); //폼을 숨김
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username); //key와 username을 로컬 스토리지에 저장
  //greeting.innerText = "Hello " + username;
  paintGreeting(username);
  console.log(username);
  // if (username === "") {
  //   alert("Please write your name");
  // } else if (username.length > 15) {
  //   alert("Your name is too long");
  // }
}
logoutbutton.addEventListener("click", onLogout);
function onLogout(logout) {
  logout.preventDefault();
  console.log(logout);
  localStorage.removeItem(USERNAME_KEY);
  window.location.reload();
}
//로컬 스토리지에 저장된 username 가져옴
const saveUsername = localStorage.getItem(USERNAME_KEY);
function paintGreeting(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

if (saveUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
} else {
  paintGreeting(saveUsername);
}
loginForm.addEventListener("submit", onLoginSubmit); //실행시키면 handleLinkClick({이벤트에 관련된 정보}) <-오브젝트 추가됨(첫번째 인자)
