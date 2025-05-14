// 🍔 Hamburger Menu Toggle
function toggleMenu() {
  const menu = document.querySelector('.menu-links');
  const icon = document.querySelector('.hamburger-icon');
  menu.classList.toggle('open');
  icon.classList.toggle('open');
}

// 🎠 Image Carousel Logic
const carouselImages = document.querySelectorAll('.carousel-img');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

let currentIndex = 0;

function showImage(index) {
  carouselImages.forEach((img, i) => {
    img.classList.remove('active');
    if (i === index) img.classList.add('active');
  });
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + carouselImages.length) % carouselImages.length;
  showImage(currentIndex);
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % carouselImages.length;
  showImage(currentIndex);
});

showImage(currentIndex); // Initialize on load

// 🌙 Dark Mode Toggle
const toggleBtn = document.getElementById("theme-toggle");

const THEMES = {
  LIGHT_MODE: { emoji: "☀️", text: "Light Mode" },
  DARK_MODE: { emoji: "🌙", text: "Dark Mode" },
};

// Optional: Apply saved theme on load
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
  toggleBtn.innerHTML = `${THEMES.LIGHT_MODE.emoji} ${THEMES.LIGHT_MODE.text}`;
}

toggleBtn.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark-mode");
  toggleBtn.innerHTML = isDark
    ? `${THEMES.LIGHT_MODE.emoji} ${THEMES.LIGHT_MODE.text}`
    : `${THEMES.DARK_MODE.emoji} ${THEMES.DARK_MODE.text}`;
  localStorage.setItem("theme", isDark ? "dark" : "light");
});
