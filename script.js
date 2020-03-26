const MENU = document.getElementById("menu");
const BODY = document.querySelector("body");
const logo = document.querySelector(".logo");
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

//iphone screen on/off

const iphoneVert = document.querySelector(".iphone__vertical");
const iphoneHoriz = document.querySelector(".iphone__horizontal");
const iphoneVertOff = document.querySelector(".black_screen_one");
const iphoneHorizOff = document.querySelector(".black_screen_two");

iphoneVert.addEventListener("click", function() {
  iphoneVertOff.classList.toggle("screen_off");
});
iphoneHoriz.addEventListener("click", function() {
  iphoneHorizOff.classList.toggle("screen_off");
});

//portfolio buttons
const BUTTONS = document.getElementById("buttons");
const ul = document.getElementById("list");
const li = [...document.querySelectorAll("ul > li")];
const imageActive = document.querySelectorAll(".image-active");
const body = document.querySelectorAll("body");

BUTTONS.addEventListener("click", event => {
  BUTTONS.querySelectorAll("button.buttons-portfolio").forEach(el =>
    el.classList.remove("button-active")
  );
  event.target.classList.add("button-active");

  const shuffled = li.slice();
  do {
    shuffled.sort(() => 0.5 - Math.random());
  } while (shuffled.some((picture, i) => picture == li[i]));
  shuffled.forEach(picture => ul.append(picture));
});

ul.addEventListener("click", event => {
  if (event.target.tagName != "IMG") return;
  ul.querySelectorAll("li").forEach(el =>
    el.lastElementChild.classList.remove("image-active")
  );
  event.target.classList.add("image-active");
});

// form

const submitBtn = document.getElementById("submit");
const closeBtn = document.getElementById("close-btn");

submitBtn.addEventListener("click", () => {
  event.preventDefault();
  const nameVal = document.getElementById("name").value;
  const emailVal = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const description = document.getElementById("description").value;
  if (nameVal !== "" && emailVal.includes("@")) {
    document.getElementById("result-subject").innerText = "Subject: " + subject;
    document.getElementById("result-description").innerText =
      "Description: " + description;

    document.getElementById("message-block").classList.remove("hidden");
  }
});

closeBtn.addEventListener("click", () => {
  document.getElementById("result-subject").innerText = "";
  document.getElementById("result-description").innerText = "";
  document.getElementById("message-block").classList.add("hidden");
  document.getElementById("form").reset();
});

// responsive
const sidebarIcon = document.querySelector(".sidebar-icon");
const sidebarBlock = document.querySelector(".sidebar-block");
const sidebar = document.querySelector(".sidebar");

sidebarIcon.addEventListener("click", event => {});

document.addEventListener("click", e => {
  console.log(e.target.className);
  if (e.target == sidebarIcon) {
    if (sidebarBlock.classList.contains("hide")) {
      sidebarBlock.classList.toggle("hide");
      sidebarIcon.classList.add("sidebar-icon-rotate-right");

      sidebar.classList.add("sidebar-to-right");
      setTimeout(() => {
        sidebarIcon.classList.remove("sidebar-icon-rotate-right");
        sidebarIcon.classList.toggle("rotated");
        sidebar.classList.remove("sidebar-to-right");
      }, 300);
    } else {
      sidebarIcon.classList.add("sidebar-icon-rotate-left");

      sidebar.classList.add("sidebar-to-left");
      setTimeout(() => {
        sidebarIcon.classList.remove("sidebar-icon-rotate-left");
        sidebarIcon.classList.toggle("rotated");
        sidebar.classList.remove("sidebar-to-left");
        sidebarBlock.classList.toggle("hide");
      }, 300);
    }
  }
  if (e.target == sidebarBlock) {
    sidebarIcon.classList.add("sidebar-icon-rotate-left");

    sidebar.classList.add("sidebar-to-left");
    setTimeout(() => {
      sidebarIcon.classList.remove("sidebar-icon-rotate-left");
      sidebarIcon.classList.toggle("rotated");
      sidebar.classList.remove("sidebar-to-left");
      sidebarBlock.classList.toggle("hide");
    }, 300);
  }
});
