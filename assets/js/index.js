const header = document.getElementById("header")
const upbtn = document.getElementById("upbtn")


window.addEventListener('scroll', function () {
  if (window.scrollY > 300) {
    header.classList.add('hc'); // Scroll-header
  
    upbtn.classList.add('upbuttonscroll');  // Up-Button
  } else {
    header.classList.remove('hc'); // Scroll-header
  
    upbtn.classList.remove('upbuttonscroll');   // Up-Button
  }
});


const carousel = document.querySelector(".carousel");
const carouselSlide = document.querySelectorAll(".carousel-slide");

let counter = 1;
const slideWidth = carouselSlide[0].clientWidth;
const totalSlides = carouselSlide.length;

carousel.style.transform = `translateX(${-slideWidth * counter}px)`;

function slideNext() {
  if (counter >= totalSlides - 1) return;
  counter++;
  carousel.style.transition = "transform 0.4s ease-in-out";
  carousel.style.transform = `translateX(${-slideWidth * counter}px)`;
}

function slidePrevious() {
  if (counter <= 0) return;
  counter--;
  carousel.style.transition = "transform 0.4s ease-in-out";
  carousel.style.transform = `translateX(${-slideWidth * counter}px)`;
}

carousel.addEventListener("transitionend", () => {
  if (carouselSlide[counter].classList.contains("carousel-slide:last-child")) {
    carousel.style.transition = "none";
    counter = totalSlides - 2;
    carousel.style.transform = `translateX(${-slideWidth * counter}px)`;
  }

  if (carouselSlide[counter].classList.contains("carousel-slide:first-child")) {
    carousel.style.transition = "none";
    counter = totalSlides - counter;
    carousel.style.transform = `translateX(${-slideWidth * counter}px)`;
  }
});

setInterval(slideNext, 3000); // Auto-slide every 3 seconds
