let modalBtn = document.querySelector('.modal-closer');
let modalBG = document.querySelector('.modal-background');

let modal = document.querySelector('.modal');

let notFinished = document.querySelector('.not-finished');

// Activating modal elements
notFinished.addEventListener('click', function () {
    modal.classList.add('is-active');
});

// Removing modal elements
modalBtn.addEventListener('click', function () {
    modal.classList.remove('is-active');
});

modalBG.addEventListener('click', function() {
    modal.classList.remove('is-active');
});