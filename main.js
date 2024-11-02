let button = document.querySelector(".scroll-arriba");

window.onscroll = function () {
  if (window.scrollY > 100) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
};
