
const logoInt = document.querySelector('.int');
const hamBurger = document.querySelector('.navbar');
const iconClose = document.querySelector('.icon-close');
const navItems = document.querySelector('.nav-items')

hamBurger.addEventListener('click', () => {
    navItems.style.display = 'flex';
    logoInt.style.display = 'flex';
});

iconClose.addEventListener('click', () => {
    navItems.style.display = 'none';
    logoInt.style.display = 'none';
});