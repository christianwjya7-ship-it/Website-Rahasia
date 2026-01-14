/* LOCK & COUNTDOWN */
const lockScreen = document.getElementById("lockScreen");
const targetDate = new Date("2026-01-17T00:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const diff = targetDate - now;

  if (diff <= 0) {
    lockScreen.style.display = "none";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
}

setInterval(updateCountdown, 1000);
updateCountdown();


const pages = document.querySelectorAll(".page");
const bgMusic = document.getElementById("bgMusic");

/* NAVIGASI */
function openPage(id) {
  pages.forEach(p => p.classList.remove("active"));
  document.getElementById(id).classList.add("active");

  if (id === "music") {
    bgMusic.pause(); // AUTO PAUSE saat buka Spotify
  } else {
    bgMusic.play(); // LANJUT lagi saat keluar
  }
}

function goHome() {
  pages.forEach(p => p.classList.remove("active"));
  document.getElementById("home").classList.add("active");
  bgMusic.play();
}

/* LOVE LETTER */
function openEnvelope() {
  document.querySelector(".envelope").classList.toggle("open");
}

/* BACKGROUND LOVE */
const heartsContainer = document.querySelector(".hearts");

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "🐋";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 5 + 5 + "s";
  heartsContainer.appendChild(heart);
  setTimeout(() => heart.remove(), 10000);
}
setInterval(createHeart, 300);

/* GALERI INDIKATOR */
const slider = document.getElementById("photoSlider");
const indicator = document.getElementById("indicator");

if (slider) {
  const total = slider.children.length;
  slider.addEventListener("scroll", () => {
    const index = Math.round(slider.scrollLeft / slider.clientWidth);
    indicator.innerText = `${index + 1} / ${total}`;
  });
}
