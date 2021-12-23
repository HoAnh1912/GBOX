//menu responsive
let nav = document.querySelector(".nav");
let btnmenu = document.querySelector("header .top .container .btnmenu");
btnmenu.onclick = function () {
  //   console.log("ok");
  nav.classList.toggle("active");
  this.classList.toggle("click");
};
