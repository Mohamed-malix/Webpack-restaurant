
import './image.png'
import {createPr, createEl} from './index.js';



export function contactCall(){
    let containerDiv=document.querySelector('.content');
    let contactBack= createPr('div', 'contactBack', containerDiv);
    createEl('h1', 'header1', 'Our contct info' ,contactBack);
    let contacts= createPr('div', 'contacts', contactBack);

    let contact1= createPr('div', 'contact', contacts);
    let contact2= createPr('div', 'contact', contacts);
    let contact3= createPr('div', 'contact', contacts);



    createEl('h3', 'header3', 'Emails', contact1);
    createEl('p', 'text', 'info@example', contact1);
    createEl('p', 'text', 'second@realEmail', contact1);

    createEl('h3', 'header3', 'Contact numbers', contact2);
    createEl('p', 'text', '555-555-555', contact2);
    createEl('p', 'text', '000-000-000', contact2);

    createEl('h3', 'header3', 'Contact location', contact3);
    createEl('p', 'text', 'New York city', contact3);
    createEl('p', 'text', 'England-London', contact3);
    createEl('p', 'text', 'Egypt-Cairo', contact3);
}


