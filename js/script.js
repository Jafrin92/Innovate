// preloader js 1st
// let loader = document.querySelector(".loader");
// window.addEventListener("load", function () {
//   loader.style.display = "none";
// });

// preloader js 2nd
let loader = document.querySelector(".loader");

window.addEventListener("load", vanish);

function vanish() {
  loader.classList.add("disppear");
}
