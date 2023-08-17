const hamburguesaBtn = document.querySelector('.header-button');
const menu = document.querySelector('.menu');

hamburguesaBtn.addEventListener('click', () => {
    menu.classList.toggle('mostrar');
});