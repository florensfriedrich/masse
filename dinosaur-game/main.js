let character = document.getElementById("character");
let block = document.getElementById("block");
function jump() {
  if (character.classList != "animate") {
    character.classList.add("animate");
  }
  character.classList.add("animate");
  setTimeout(function () {
    character.classList.remove("animate");
  }, 500);
}
let checkDead = setInterval(function () {
  let characterTop = parseInt(
    window.getComputedStyle(character).getPropertyValue("top")
  );
  let blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );
  if (blockLeft < 200 && blockLeft > 0 && characterTop >= 300) {
    let death = new Audio((URL = "/sound/death.mp3"));
    death.play();
    death.volume = 0.4;
    block.style.animation = "none";
    block.style.display = "none";
  }
}, 10);
function refresh() {
  window.location.reload();
}

let audio = document.getElementById("myAudio");
audio.volume = 0.05;

function play() {
  let audio = new Audio((URL = "/sound/jump.mp3"));
  audio.play();
  audio.volume = 0.4;
}
