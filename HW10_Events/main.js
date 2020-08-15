function play(sound, kbd) {
  sound.currentTime = 0;
  sound.play();
  kbd.classList.add("btn_press");
}

function playSoundKbd(ev) {
  const sound = document.querySelector(`audio[data-kbd="${ev.keyCode}"]`);
  const kbd = document.querySelector(`.btn[data-kbd="${ev.keyCode}"]`);
  if (!sound) return;
  play(sound, kbd);
}

function playSoundMouse(ev) {
  const value = ev.path[0].innerText.charCodeAt(0) != 0 ? ev.path[0].innerText.charCodeAt(0) : ev.path[1].attributes['data-kbd'].value ;
  const sound = document.querySelector(`audio[data-kbd="${value}"]`);
  const kbd = document.querySelector(`.btn[data-kbd="${value}"]`);
  if (!sound) return;
  play(sound, kbd);
}

function removeTransition(ev) {
  if (ev.propertyName !== "transform") return;
  this.classList.remove("btn_press");
}

const buttons = document.querySelectorAll(".btn");
buttons.forEach(key => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSoundKbd);
window.addEventListener("click", playSoundMouse);

/*
Вам необхідно виконати завдання з популярного циклу челенджів: JS30.
Необхідно написати програму, яка буде зчитувати з клавіатури натискання клавіш та відтворювати унікальний звук
для кожної клавіши (клавіши можуть бути будь-які, звуки можуть бути будь-які, тільки вкажіть у верстці –
які кнопки натискати). В ідеалі повинно вийти як по посиланню.
*/