import createMenu from './menu.js';
import createAbout from './about.js';
import homePage from './home.js';
import './rp.css';

const menuButton = document.getElementById('menu');
const aboutButton = document.getElementById('about');
const homeButton = document.getElementById('home');


menuButton.addEventListener('click', () => {
    clearContent();
    createMenu();
});

aboutButton.addEventListener('click', () => {
    clearContent();
    createAbout();
});

homeButton.addEventListener('click', () => {
    clearContent();
    homePage();
});

function clearContent() {
    const context = document.getElementById('content');
    context.innerHTML = '';
    const header = document.getElementById('head');
    header.innerHTML = '';
}

document.addEventListener('DOMContentLoaded', () => {
    homePage();
});
