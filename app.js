const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
const body = document.querySelector("body");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
  body.classList.toggle("no-scroll"); // Adicione ou remova a classe "no-scroll"
});
