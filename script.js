const balloonContainer = document.querySelector(".balloons");
const colors = ["#ff4d6d", "#ffcc00", "#4dabf7", "#63e6be", "#da77f2"];

function createBalloon() {
    const balloon = document.createElement("div");
    balloon.classList.add("balloon");

    const size = Math.random() * 30 + 55;
    const left = Math.random() * 100;
    const duration = Math.random() * 10 + 10;
    const color = colors[Math.floor(Math.random() * colors.length)];

    balloon.style.width = `${size}px`;
    balloon.style.height = `${size * 1.3}px`;
    balloon.style.left = `${left}%`;
    balloon.style.animationDuration = `${duration}s`;
    balloon.style.setProperty("--color", color);

    balloonContainer.appendChild(balloon);
    setTimeout(() => balloon.remove(), duration * 1000);
}

setInterval(createBalloon, 1200);

/* Letter animation */
const openBtn = document.getElementById("openLetter");
const closeBtn = document.getElementById("closeLetter");
const overlay = document.getElementById("letterOverlay");
const letterText = document.getElementById("letterText");

const message = `Happy Birthday 🎂💖

Sankhyika. Khub bhalo thako, shukhey thako, enjoy koro. Bhogoban jano tomay khub khushi rakhe.
Jani na tumi kamon acho, ki korcho, bohudin kotha hoyna. Kori miss , khub kori.
Jani tumi amar opor birokto hoyechile shei din tar jonno, I am sorry.`;

let i = 0, typing;

openBtn.onclick = () => {
    overlay.style.display = "flex";
    setTimeout(() => overlay.classList.add("show"), 30);
    letterText.textContent = "";
    i = 0;

    clearInterval(typing);
    typing = setInterval(() => {
        if (i < message.length) {
            letterText.textContent += message[i++];
        } else {
            clearInterval(typing);
        }
    }, 22);
};

closeBtn.onclick = () => {
    overlay.classList.remove("show");
    clearInterval(typing);
    setTimeout(() => overlay.style.display = "none", 500);
};
