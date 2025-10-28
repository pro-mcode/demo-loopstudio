import { creations } from "./data/creations.js";

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

// const creations = [
//   {
//     title: "deep earth",
//     desktopImg: "/assets/images/desktop/image-deep-earth.jpg",
//     mobileImg: "/assets/images/mobile/image-deep-earth.jpg",
//   },
//   {
//     title: "night arcade",
//     desktopImg: "/assets/images/desktop/image-night-arcade.jpg",
//     mobileImg: "/assets/images/mobile/image-night-arcade.jpg",
//   },
//   {
//     title: "soccer team",
//     desktopImg: "/assets/images/desktop/image-soccer-team.jpg",
//     mobileImg: "/assets/images/mobile/image-soccer-team.jpg",
//   },
//   {
//     title: "the grid",
//     desktopImg: "/assets/images/desktop/image-grid.jpg",
//     mobileImg: "/assets/images/mobile/image-grid.jpg",
//   },
//   {
//     title: "from up above",
//     desktopImg: "/assets/images/desktop/image-from-above.jpg",
//     mobileImg: "/assets/images/mobile/image-from-above.jpg",
//   },
//   {
//     title: "pocket borealis",
//     desktopImg: "/assets/images/desktop/image-pocket-borealis.jpg",
//     mobileImg: "/assets/images/mobile/image-pocket-borealis.jpg",
//   },
//   {
//     title: "the curiosity",
//     desktopImg: "/assets/images/desktop/image-curiosity.jpg",
//     mobileImg: "/assets/images/mobile/image-curiosity.jpg",
//   },
//   {
//     title: "make it fisheye",
//     desktopImg: "/assets/images/desktop/image-fisheye.jpg",
//     mobileImg: "/assets/images/mobile/image-fisheye.jpg",
//   },
// ];

const container = document.querySelector(".items-container");

container.innerHTML = creations
  .map(
    (item) => `
      <div class="group relative overflow-hidden">
        <!-- Desktop Image -->
        <img 
          src="${item.desktopImg}" 
          alt="${item.title}" 
          class="hidden md:block group-hover:scale-110 duration-150 w-full" 
        />
        <!-- Mobile Image -->
        <img 
          src="${item.mobileImg}" 
          alt="${item.title}" 
          class="md:hidden group-hover:scale-110 duration-150 w-full" 
        />
        <!-- Gradient Overlay -->
        <div class="item-gradient"></div>
        <!-- Text -->
        <h5 class="capitalize">${item.title}</h5>
      </div>
    `
  )
  .join("");
