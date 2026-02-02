const startScreen = document.getElementById("start-screen");
const mainScreen = document.getElementById("main-screen");
const envelope = document.getElementById("envelope");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const kitty = document.getElementById("kitty");
const title = document.getElementById("title");
const finalText = document.getElementById("finalText");
const heartsContainer = document.getElementById("hearts-container");

let yesScale = 1;

/* ---------- OPEN LETTER ---------- */
envelope.onclick = () => {
    startScreen.style.display = "none";
    mainScreen.style.display = "flex";
    startHearts();
};

/* ---------- HEART RAIN ---------- */
function startHearts(){
    setInterval(()=>{
        const heart = document.createElement("img");
        heart.src = "heart.png"; // your heart image
        heart.className = "heart";
        heart.style.left = Math.random()*100 + "vw";
        heart.style.animationDuration = (3 + Math.random()*2) + "s";
        heartsContainer.appendChild(heart);

        setTimeout(()=> heart.remove(),5000);
    },300);
}

/* ---------- NO BUTTON ---------- */
noBtn.onclick = () => {
    yesScale += 0.2;
    yesBtn.style.transform = `scale(${yesScale})`;
};

/* ---------- YES BUTTON ---------- */
yesBtn.onclick = () => {
    kitty.src = "kitty2.gif"; // second gif
    title.textContent = "Yippieee!! 💖";
    finalText.style.display = "block";
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
};

const music = document.getElementById("bgMusic");

  document.addEventListener("click", () => {
    music.play();
  }, { once: true });
