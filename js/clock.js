const clock = document.querySelector("h2#clock");

//interval 일정 시간 간격으로 무언가를 반복 실행하고 싶을 때 사용. setInternal(함수, 밀리세컨드)

function getClock() {
  const date = new Date();
  const Hours = String(date.getHours()).padStart(2, "0");
  const Minutes = String(date.getMinutes()).padStart(2, "0");
  const Seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${Hours}:${Minutes}:${Seconds}`;
  //clock.innerText = "00:01";
}
getClock();
setInterval(getClock, 1000);
//setTimeout(sayHello, 5000);
