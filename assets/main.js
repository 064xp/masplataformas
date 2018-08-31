var nav_hamburger = document.getElementById('nav__hamburger');
var nav_hamburger_bars = document.getElementById('nav__hamburger--bars');
var nav_hamburger_x = document.getElementById('nav__hamburger--x');
nav_hamburger.addEventListener('click', function(){
  // this.classList.toggle('clicked');
  nav_hamburger_bars.classList.toggle('invisible');
  // nav_hamburger_x.classList.toggle('visible');
  nav_hamburger_x.classList.toggle('visible');

});
