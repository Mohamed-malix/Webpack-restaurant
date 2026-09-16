
let content= document.querySelector('.content');
let header2= document.createElement('h2');
let contentText= document.createElement('p');

header2.classList.add('welcome');
contentText.classList.add('text');
header2.textContent='Welcome to our amazing restaurant';
contentText.innerHTML='Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero odio at facilis id veritatis pariatur dolore doloribus <br>minima cupiditate, eligendi, accusantium, ad consequatur ullam quaerat!';

content.appendChild(header2);
content.appendChild(contentText);