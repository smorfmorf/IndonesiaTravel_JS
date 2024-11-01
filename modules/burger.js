const header__menuButton = document.querySelector('.header__menu-button');
const header__menu = document.querySelector('.header__menu');
const body = document.body;

header__menuButton.addEventListener('click', () => {
    header__menu.classList.toggle('header__menu_active');
});

// body.addEventListener('click', closeMenuOutsideClick);
// function closeMenuOutsideClick({ target }) {
//     if (!header__menuButton.contains(target)) {
//         header__menu.classList.remove('header__menu_active');
//         body.removeEventListener('click', closeMenuOutsideClick);
//     }
// }
