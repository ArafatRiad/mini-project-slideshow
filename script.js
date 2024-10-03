const slideShowElements = document.querySelectorAll(".slideShow-element");
let countelement = 1;
setInterval(() => {
  countelement++;
  let currentElement = document.querySelector(".current");
  currentElement.classList.remove("current");
  if (countelement > slideShowElements.length) {
    slideShowElements[0].classList.add("current");
    countelement=1;
  } else {
    currentElement.nextElementSibling.classList.add("current");
  }
}, 2000);
