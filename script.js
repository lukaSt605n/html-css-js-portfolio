// 🍔 Hamburger Menu Toggle
function toggleMenu() {
  const menu = document.querySelector('.menu-links');
  const icon = document.querySelector('.hamburger-icon');
  menu.classList.toggle('open');
  icon.classList.toggle('open');
}

// 🎠 Image Carousel Logic (supports multiple carousels)
document.querySelectorAll('.carousel').forEach((carousel) => {
  const images = carousel.querySelectorAll('.carousel-img');
  const prevBtn = carousel.querySelector('.carousel-btn.prev');
  const nextBtn = carousel.querySelector('.carousel-btn.next');
  let currentIndex = 0;

  function showImage(index) {
    images.forEach((img, i) => {
      img.classList.toggle('active', i === index);
    });
  }

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  });

  showImage(currentIndex); // Initialize
});


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
