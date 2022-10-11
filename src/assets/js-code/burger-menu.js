export const burgerMenuButton = document.querySelector('.burger-menu-button');
export const burgerMenuClose = document.querySelector('.burger-menu__close');
const pageBgDark = document.querySelector('.page__bg-dark');
const burgerMenu = document.querySelector('.burger-menu');

function handlePageBgChange() {
    pageBgDark.classList.toggle('page__bg-dark_active');
}

function handleOverlay(evt) {
    if (evt.target.classList.contains('page__bg-dark_active')) {
        closeMenu();
    }
};

function closeMenuByEsc(evt) {
    if (evt.key === "Escape") {
        closeMenu();
    }
};

export function openMenu() {
    handlePageBgChange();
    burgerMenu.classList.add('burger-menu_active');
    document.addEventListener('mousedown', handleOverlay);
    document.addEventListener("keydown", closeMenuByEsc);
}

export function closeMenu() {
    handlePageBgChange();
    burgerMenu.classList.remove('burger-menu_active');
    document.removeEventListener('mousedown', handleOverlay);
    document.removeEventListener("keydown", closeMenuByEsc);
};
