
import './style.css';
import './home.jpg';
import './home.js';
import './menu.js'
import {createEl, createImg, createPr, homeCall} from './home.js';
import {menuCall} from './menu.js';
import{contactCall} from './contact.js';
export {createEl, createImg, createPr};





homeCall();
document.querySelector('.homeBtn').addEventListener('click', () => {
    document.querySelector('.content').innerHTML='';
    homeCall()
});

document.querySelector('.menuBtn').addEventListener('click', () => {
    document.querySelector('.content').innerHTML='';
    menuCall()
});

document.querySelector('.contactBtn').addEventListener('click', () => {
    document.querySelector('.content').innerHTML='';
    contactCall()
});


// document.querySelector('.menuBtn').addEventListener('click', menuCall());