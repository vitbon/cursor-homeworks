function playSoundKbd(ev) {
  const sound = document.querySelector(`audio[data-kbd="${ev.keyCode}"]`);
  const kbd = document.querySelector(`.btn[data-kbd="${ev.keyCode}"]`);
  if (!sound) return;
  play(sound, kbd);
}

export default {playSoundKbd};