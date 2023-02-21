window.addEventListener("load", start);
function start() {
  console.log("start");
  document
    .querySelector("#blue_sprite")
    .addEventListener("click", blueFallover);
}
function blueFallover() {
  console.log("blueFallover");
  document.querySelector("#blue_sprite").classList.add("fallover");
}
