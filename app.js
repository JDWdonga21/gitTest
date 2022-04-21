const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(tomato) {
  //submit 이벤트 감지
  tomato.preventDefault(); //브라우저가 기본동작을 못 하도록 막아줌
  console.log(tomato); // onLoginSubmit 이벤트 발생시 브라우저가 주는 정보, 이벤트에 관한 정보

  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  //greeting.innerText = "Hello " + username;
  paintGreeting(username);
  console.log(username);
  // if (username === "") {
  //   alert("Please write your name");
  // } else if (username.length > 15) {
  //   alert("Your name is too long");
  // }
  loginForm.classList.add(HIDDEN_CLASSNAME);
}
const saveUsername = localStorage.getItem(USERNAME_KEY);
function paintGreeting(username){
  greeting.innerText = `Hello ${ username }`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}



if(saveUsername === null){
  loginForm.classList.remove(HIDDEN_CLASSNAME);
}
else{  
  paintGreeting(saveUsername);
}
loginForm.addEventListener("submit", onLoginSubmit); //실행시키면 handleLinkClick({이벤트에 관련된 정보}) <-오브젝트 추가됨(첫번째 인자)
