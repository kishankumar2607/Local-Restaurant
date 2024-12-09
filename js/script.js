document.addEventListener("DOMContentLoaded", function () {
  const sliderContainer = document.querySelector(".slider-container");
  const slides = document.querySelector(".slides");
  const images = slides.children;
  const totalImages = images.length;
  const imagesPerView = 3;
  const imageWidth = 300 + 32; // Image width + 2rem gap
  let currentIndex = 0;

  function updateSliderPosition() {
    const offset = -currentIndex * imageWidth;
    slides.style.transform = `translateX(${offset}px)`;
  }

  function loopSlider() {
    currentIndex += imagesPerView;
    if (currentIndex >= totalImages) {
      currentIndex = 0;
    }
    updateSliderPosition();
  }

  setInterval(loopSlider, 3000);
});

document.addEventListener("DOMContentLoaded", function () {
  const discoverMoreBtn = document.getElementById("discover-more");
  const extraContent = document.getElementById("extra-content");

  discoverMoreBtn.addEventListener("click", function () {
    if (extraContent.classList.contains("hidden")) {
      extraContent.classList.remove("hidden");
      extraContent.classList.add("visible");
      discoverMoreBtn.textContent = "Show Less";
    } else {
      extraContent.classList.remove("visible");
      extraContent.classList.add("hidden");
      discoverMoreBtn.textContent = "Discover More";
    }
  });
});


// Script to add underline to the active link
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-bar a");

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.href === window.location.href) {
      link.classList.add("active");
    }
  });
});
