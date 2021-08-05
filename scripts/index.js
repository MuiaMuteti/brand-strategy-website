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

// end navigation bar functionality

// show current year at copyright
let curr_yr = document.querySelector('span.current-yr');
curr_yr.textContent = new Date().getFullYear();

//end setting current year

// slide show functionality

// reference elements
let prevBtn = document.querySelector('.prev');
let nxtBtn = document.querySelector('.next');
let slideImg = document.querySelector('.slide-img');

let slideIndex = 0;

selectSlide(slideIndex);

prevBtn.addEventListener('click', () => iterateSlideIndex(-1));
nxtBtn.addEventListener('click', () => iterateSlideIndex(1));

function iterateSlideIndex(n) {
    slideIndex += n;
    
    selectSlide(slideIndex);
}

function selectSlide(index) {
    let slides = document.getElementsByClassName("slide");
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    if (index < 0) {
        slideIndex = slides.length - 1;
    }
    if (index >= slides.length) {
        slideIndex = 0;
    }

    slides[slideIndex].style.display = "block";
}

// end slideshow functionality