window.addEventListener("load", start);
function start() {
  console.log("start");
  move();

  document
    .querySelector("#orange_sprite")
    .addEventListener("click", movingOrange);
}
function movingOrange() {
  console.log("movingOrange");
  document.querySelector("#orange_container").classList.add("paused");
  document.querySelector("#orange_sprite").classList.add("jump");
}
function move() {
  document.querySelector("#orange_container").classList.add("move");
}
