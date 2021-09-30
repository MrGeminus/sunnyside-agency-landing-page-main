"use strict";
window.addEventListener('DOMContentLoaded', checkScreenSize);
window.addEventListener('resize', checkScreenSize);
const mainMenu = document.querySelector('#main-menu');
const mainMenuToggler = document.querySelector('#menu-toggler');
const mainMenuTogglerText = mainMenuToggler.firstElementChild;
mainMenuToggler.addEventListener('click', openNavigationMenu);
function checkScreenSize() {
    let currentScreenWidth = window.matchMedia('(min-width: 90rem)').matches;
    let menuContainsMobileClass = mainMenu.classList.contains('navbar-menu--is-mobile');
    if (!currentScreenWidth && !menuContainsMobileClass) {
        mainMenu.classList.add('navbar-menu--is-mobile');
        mainMenuTogglerText.textContent = "Click to open the mobile menu";
    }
    if (currentScreenWidth && menuContainsMobileClass) {
        mainMenu.classList.remove('navbar-menu--is-mobile');
        if (mainMenu.classList.contains('navbar-menu--is-open')) {
            mainMenu.classList.remove('navbar-menu--is-open');
        }
        if (mainMenu.classList.contains('navbar-menu--is-closed')) {
            mainMenu.classList.remove('navbar-menu--is-closed');
        }
    }
}
function openNavigationMenu(event) {
    let menuIsOpen = mainMenu.classList.contains('navbar-menu--is-open');
    if (menuIsOpen) {
        mainMenu.classList.remove('navbar-menu--is-open');
        mainMenu.classList.add('navbar-menu--is-closed');
        mainMenuTogglerText.textContent = "Click to open the mobile menu";
    }
    else {
        mainMenu.classList.remove('navbar-menu--is-closed');
        mainMenu.classList.add('navbar-menu--is-open');
        mainMenuTogglerText.textContent = "Click to close the mobile menu";
    }
}
