




// Initialization for ES Users
// import { Dropdown, Collapse, initMDB } from "mdb-ui-kit";

// initMDB({ Dropdown, Collapse });

// // Initialization for ES Users
// import { Input, initMDB } from "mdb-ui-kit";

// initMDB({ Input });
// // Initialization for ES Users
// import { Carousel, initMDB } from "mdb-ui-kit";

// initMDB({ Carousel });

window.addEventListener("load", () => {
  const loader = document.querySelector(".landing-loader");
  document.body.style.overflow = "hidden";

  setTimeout(() => {
    loader.remove();
    document.body.style.overflow = "auto";
  }, 300);
});