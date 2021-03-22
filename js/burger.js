let menuBtn = document.querySelector('.navbar-burger');
let menu = document.querySelector('.navbar-menu');

menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('is-active');
    menu.classList.toggle('is-active');
});