(function () {
  var menuToggle = document.querySelector(".menu-toggle");
  var navbar = document.querySelector(".navbar");

  if (menuToggle && navbar) {
    menuToggle.addEventListener("click", function () {
      navbar.classList.toggle("open");
      var expanded = navbar.classList.contains("open");
      menuToggle.setAttribute("aria-expanded", expanded ? "true" : "false");
    });
  }
})();
