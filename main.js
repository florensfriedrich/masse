let character = document.getElementById("character");
let block = document.getElementById("block");
let counter = 0;
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
    block.style.animation = "none";
    block.style.display = "none";
    playDeath();
    setTimeout(
      () => (notification(), (counter = 0)),
      100
    );
  } else {
    counter++;
    document.getElementById("ScoreSpan").innerHTML = Math.floor(counter / 100);
  }
}, 10);
function refresh() {
  window.location.reload();
}

let audio = document.getElementById("myAudio");
audio.volume = 0.05;

function play() {
  let audio = new Audio((URL = "jump.mp3"));
  audio.play();
  audio.volume = 0.4;
}

function playDeath() {
  let death = new Audio((URL = "death.mp3"));
  death.play();
  death.volume = 0.4;
}
function notification() {
  if (
    confirm(
      "Totaler Absturz. \nScore: " + Math.floor(counter / 100) + "\nRETRY?"
    ) === true
  ) {
    window.location.reload();
  }
}
