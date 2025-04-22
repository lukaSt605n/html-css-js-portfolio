function toggleMenu() {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    menu.classList.toggle('open');
    icon.classList.toggle('open');
}

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

showImage(currentIndex);
