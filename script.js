const logo = document.getElementById("logo");
const lipton = document.getElementById("lipton");

document.addEventListener("keydown", function (event) {
  jump();
});

function jump() {
  if (logo.classList != "jump") {
    logo.classList.add("jump");
  }
  setTimeout(function () {
    logo.classList.remove("jump");
  }, 300);
}
let isAlive = setInterval(function () {
  let logoTop = parseInt(window.getComputedStyle(logo).getPropertyValue("top"));
  let liptonLeft = parseInt(
    window.getComputedStyle(lipton).getPropertyValue("left")
  );
  if (liptonLeft < 70 && liptonLeft > 0 && logoTop >= 280) {
    alert("GAME OVER!!");
  }
}, 10);
