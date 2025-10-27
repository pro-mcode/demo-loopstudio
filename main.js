const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

btn.addEventListener("click", navToggle);
function navToggle() {
  btn.classList.toggle("open");
  menu.classList.toggle("active");
  //   menu.classList.toggle("hidden");
}

// const btn = document.getElementById("menu-btn");
// const menu = document.getElementById("menu");

// btn.addEventListener("click", () => {
//   btn.classList.toggle("open");
//   menu.classList.toggle("active");
// });
