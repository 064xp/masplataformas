//responsive hamburger navbar

var nav_hamburger = document.getElementById('nav__hamburger');
var nav_hamburger_bars = document.getElementById('nav__hamburger--bars');
var nav_hamburger_x = document.getElementById('nav__hamburger--x');
var navItems = document.querySelector('nav ul');

nav_hamburger.addEventListener('click', function(){
  nav_hamburger_bars.classList.toggle('invisible');
  nav_hamburger_x.classList.toggle('visible');
  navItems.classList.toggle('grow');
});


//calculate cost widget dropdown toggle
 var widgetToggles = document.querySelectorAll(".picture-card-dropdown-title");

//add click listener
widgetToggles.forEach(function(el){
  el.addEventListener("click",function(el){

    if(el.target.nodeName == "svg"){
      el = el.target.parentNode;
    }else{
      el = el.target;
    }

    el.parentNode.childNodes[3].classList.toggle('hidden');
    });
});


//cost calculator

const costs = {
  GS2632:{
    day: 1000,
    week: 5000
  },
  E400AJN:{
    day: 2000,
    week: 9000
  },
  Z45:{
    day: 2200,
    week: 9900
  }
}
