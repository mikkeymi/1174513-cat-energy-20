var buttonMenu = document.querySelector(".page-header__button");
var menu = document.querySelector(".main-nav");

menu.classList.add("main-nav--closed");
buttonMenu.classList.add("page-header__button--close")

buttonMenu.addEventListener("click", function () {
  menu.classList.toggle("main-nav--closed");

  buttonMenu.classList.toggle("page-header__button--open");
  buttonMenu.classList.toggle("page-header__button--close");
});
