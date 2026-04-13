'use strict';

const menuHeader = document.querySelector('.header__menu');
const menuOpenButton = document.querySelector('.header__burger');
const menuCloseButton = document.querySelector('.menu__close');
const navLink = document.querySelectorAll('.nav__link');

menuOpenButton.addEventListener('click', () => {
  menuHeader.classList.add('header__menu--active');
});

menuCloseButton.addEventListener('click', () => {
  menuHeader.classList.remove('header__menu--active');
});

navLink.forEach((link) => {
  link.addEventListener('click', () => {
    menuHeader.classList.remove('header__menu--active');
  });
});
