const openButton = document.getElementById("openButton");
const flap = document.querySelector(".envelope-flap");
const letter = document.getElementById("letter");
const frontPage = document.getElementById("frontPage");

let isOpen = false;
let isFlipped = false;

openButton.addEventListener("click", () => {
  if (!isOpen) {
    flap.style.transform = "rotateX(-180deg)";
    letter.classList.add("open");
    openButton.classList.add("hidden"); // tombol hilang
    document.getElementById("valentineMusic").play();
    isOpen = true;
  }
});

frontPage.addEventListener("click", () => {
  if (!isFlipped) {
    letter.classList.add("flip");
    isFlipped = true;
  }
});
