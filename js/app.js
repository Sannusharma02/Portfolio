$(document).ready(function(){
$('.slider').slick({
    arrows:false,
    dots:true,
    appendDots:'.slider-dots',
    dotsClass:'dots'
});


let hamberger = document.querySelector('.hamberger');
let x = document.querySelector('.x');
let home = document.querySelector('.home');
let about = document.querySelector('.about');
let services = document.querySelector('.services');
let work = document.querySelector('.work');
let blog = document.querySelector('.blog');

let mobileNav = document.querySelector('.mobile-nav');

hamberger.addEventListener('click', function(){
  mobileNav.classList.add('open');  
});

x.addEventListener('click', function(){
    mobileNav.classList.remove('open');  
});

home.addEventListener('click', function(){
  mobileNav.classList.remove('open');  
});

about.addEventListener('click', function(){
  mobileNav.classList.remove('open');  
});

services.addEventListener('click', function(){
  mobileNav.classList.remove('open');  
});

work.addEventListener('click', function(){
  mobileNav.classList.remove('open');  
});

blog.addEventListener('click', function(){
  mobileNav.classList.remove('open');  
});

});