const navMenu = document.getElementById("nav-menu"),
  navToogle = document.getElementById("side-bar"),
  navClose = document.getElementById("close-bar"),
  dropDown = document.getElementById("drop-down");

navToogle.addEventListener("click", () => {
  navMenu.classList.add("show-menu");
});

navClose.addEventListener("click", () => {
  navMenu.classList.remove("show-menu");
});


dropDown.addEventListener("click", () => {
  //   dropDown.classList.add("d-active");
  console.log("add");
});

dropDown.addEventListener("click", () => {
  //   dropDown.classList.remove("d-active");
  console.log("remove");
});
