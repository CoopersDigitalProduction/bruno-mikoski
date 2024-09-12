// hamburger mobile menu
let menuToggle = document.querySelector('.menu-toggle');
let menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('menu-open');
})

let menuClose = document.querySelector('.menu-close');
menuClose.addEventListener('click', () => {
    menu.classList.remove('menu-open');
})