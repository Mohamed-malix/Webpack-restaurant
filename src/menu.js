

import './image.png'
import src from './image.png';
import {createImg, createPr, createEl} from './home.js';



export function menuCall(){
    let containerDiv=document.querySelector('.content');
    let cardsBack= createPr('div', 'cardsBack', containerDiv);
    createEl('h1', 'header1', 'Welcome to our menu section!' ,cardsBack);
    let cards= createPr('div', 'cards', cardsBack);

    let card1= createPr('div', 'card', cards);
    let card2= createPr('div', 'card', cards);
    let card3= createPr('div', 'card', cards);



    createImg(src, 'image', card1);
    createEl('h3', 'header3', 'Breakfast', card1);
    createEl('p', 'text', 'Enjoy your morning with our delicious collection! Hot sandwiches, healthy snacks, to charge your energy and successful kick the day.', card1);


    createImg(src, 'image', card2);
    createEl('h3', 'header3', 'Lunch food', card2);
    createEl('p', 'text', 'Boost your day with our new lunch menu! Delicious meals, fresh ingredients, and bold flavors crafted for your midday break.', card2);


    createImg(src, 'image', card3);
    createEl('h3', 'header3', 'Dinner menu', card3);
    createEl('p', 'text', 'Elevate your evenings with our new dinner menu! rich flavors, and premium ingredients crafted for truly unforgettable dining moments.', card3);
}


