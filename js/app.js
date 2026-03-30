// Mobile nav toggle
document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var navList = document.querySelector("nav ul");

  if (toggle && navList) {
    toggle.addEventListener("click", function () {
      navList.classList.toggle("nav-open");
    });
  }
});
