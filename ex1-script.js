window.addEventListener("load", start);
function start() {
  console.log("start");
  document
    .querySelector("#orange_sprite")
    .addEventListener("click", jumpingOrange);
}
function jumpingOrange() {
  console.log("jumpingOrange");
  document.querySelector("#orange_sprite").classList.add("jump");
}
