// navigation bar functionality

// reference navbar elements
let menu = document.querySelector('.menu');
let menuIcon = document.querySelector('.menu-icon');
let nav = document.querySelector('.nav');
let signButtons = document.querySelector('.sign-buttons');

// icon paths
const showMenuIcon = "./images/menu.svg";
const closeMenuIcon = "./images/cross.svg";

// hide or show menu
// hidden by default
let showMenu = false;

menu.addEventListener('click', handleMenuClick);

function handleMenuClick() {
    showMenu = !showMenu;
    menuIcon.src = showMenu? closeMenuIcon : showMenuIcon;
    
    if (showMenu) {
        nav.classList.add('menu-open');
        signButtons.classList.add('menu-open');
    } else {
        nav.classList.remove('menu-open');
        signButtons.classList.remove('menu-open');
    }
}