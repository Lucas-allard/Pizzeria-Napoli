let cpt = 0;
let tableImgSrc = [
  "ressources/images/carroussel/dessert1.jpg",
  "ressources/images/carroussel/dessert2.jpg",
  "ressources/images/carroussel/dessert3.jpg",
  "ressources/images/carroussel/pizza1.jpg",
  "ressources/images/carroussel/pizza2.jpg",
  "ressources/images/carroussel/pizza3.jpg",
];

let tableImgAlt = [
  "dessert1",
  "dessert2",
  "dessert3",
  "pizza1",
  "pizza2",
  "pizza3",
];

let img = document.getElementById("img-carroussel");

window.onload = function () {
  let menu = document.querySelector("#flex-nav-menu");
  let headingTitle = document.querySelector("#heading-title");
  let section = document.querySelector("#carte");

  function scrolled() {
    let windowHeight = document.body.clientHeight,
      currentScroll =
        document.body.scrollTop || document.documentElement.scrollTop;

    menu.className =
      currentScroll >=
      carte.offsetHeight + headingTitle.offsetHeight + section.offsetHeight
        ? "fixed"
        : "";
  }

  addEventListener("scroll", scrolled, false);
};

function startInterval() {
  timer = setInterval(loadCarroussel, 2500);
  img.removeEventListener("load", startInterval);
  // img.addEventListener("load", stopInterval);
}

function stopInterval() {
  clearInterval(timer);
  img.addEventListener("click", startInterval);
}

function loadCarroussel() {
  cpt++;
  if (cpt === tableImgSrc.length) {
    cpt = 0;
  }
  img.src = tableImgSrc[cpt];
  img.alt = tableImgAlt[cpt];
}

img.addEventListener("load", startInterval);
