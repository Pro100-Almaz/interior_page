hamburger = document.querySelector(".hamburger");
hamburger.onclick = function () {
  buttons = document.querySelector(".buttons");
  buttons.classList.toggle("active");
  close = document.querySelector(".close");
  close.classList.toggle("active");
};

close = document.querySelector(".close");
close.onclick = function () {
  buttons = document.querySelector(".buttons");
  buttons.classList.toggle("active");
  close = document.querySelector(".close");
  close.classList.toggle("active");
};
