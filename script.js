const MENU = document.getElementById("menu");

const anchor_home = document.querySelectorAll('a[href="#home"]');
const anchor_services = document.querySelectorAll('a[href="#services"]');
const anchor_portfolio = document.querySelectorAll('a[href="#portfolio"]');
const anchor_about = document.querySelectorAll('a[href="#about"]');
const anchor_contact = document.querySelectorAll('a[href="#contact"]');

//header

MENU.addEventListener("click", event => {
  MENU.querySelectorAll("a.nav__link").forEach(el =>
    el.classList.remove("active")
  );
  event.target.classList.add("active");
});

for (let anchor of anchor_services) {
  anchor.addEventListener("click", function(event) {
    event.preventDefault();
    const blockID = anchor.getAttribute("href");
    document.querySelector("" + blockID).scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
}

for (let anchor of anchor_portfolio) {
  anchor.addEventListener("click", function(event) {
    event.preventDefault();
    const blockID = anchor.getAttribute("href");
    document.querySelector("" + blockID).scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
}

for (let anchor of anchor_about) {
  anchor.addEventListener("click", function(event) {
    event.preventDefault();
    const blockID = anchor.getAttribute("href");
    document.querySelector("" + blockID).scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
}

for (let anchor of anchor_contact) {
  anchor.addEventListener("click", function(event) {
    event.preventDefault();
    const blockID = anchor.getAttribute("href");
    document.querySelector("" + blockID).scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
}

//slider

const sliderContent = document.querySelector(".slider_content");
const slides = document.querySelectorAll(".slider__inner");
const slideOne = document.querySelector(".slide_1");
const slideTwo = document.querySelector(".slide_2");
const arrowRight = document.querySelector(".arrow__right");
const arrowLeft = document.querySelector(".arrow__left");

let delay = 470;

arrowLeft.addEventListener("click", changeSlideLeft);
arrowRight.addEventListener("click", changeSlideRight);

function changeSlideLeft() {
  if (slideTwo.classList.contains("slide_hide")) {
    slideTwo.classList.remove("slide_hide");
    slideOne.classList.add("to-right");
    slideTwo.classList.add("from-left");
    setTimeout(() => {
      slideOne.classList.remove("to-right");
      slideTwo.classList.remove("from-left");
      slideOne.classList.add("slide_hide");
    }, delay);
  } else {
    slideOne.classList.remove("slide_hide");
    slideTwo.classList.add("to-right");
    slideOne.classList.add("from-left");
    setTimeout(() => {
      slideTwo.classList.remove("to-right");
      slideOne.classList.remove("from-left");
      slideTwo.classList.add("slide_hide");
    }, delay);
  }
}

function changeSlideRight() {
  if (slideTwo.classList.contains("slide_hide")) {
    slideTwo.classList.remove("slide_hide");
    slideOne.classList.add("to-left");
    slideTwo.classList.add("from-right");
    setTimeout(() => {
      slideOne.classList.remove("to-left");
      slideTwo.classList.remove("from-right");
      slideOne.classList.add("slide_hide");
    }, delay);
  } else {
    slideOne.classList.remove("slide_hide");
    slideTwo.classList.add("to-left");
    slideOne.classList.add("from-right");
    setTimeout(() => {
      slideTwo.classList.remove("to-left");
      slideOne.classList.remove("from-right");
      slideTwo.classList.add("slide_hide");
    }, delay);
  }
}
