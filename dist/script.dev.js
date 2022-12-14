"use strict";

var header = document.querySelector("header");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", this.window.scroll > 100);
});
var menu = document.querySelector('#menu-icon');
var navlist = document.querySelector('.navlist');

menu.onclick = function () {
  menu.classList.toggle('bx-x');
  navlist.classList.toggle('open');
};

window.onscroll = function () {
  menu.classList.remove('bx-x');
  navlist.classList.remove('open');
};
//# sourceMappingURL=script.dev.js.map
