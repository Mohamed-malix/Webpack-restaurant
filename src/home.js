


export function createEl(element, classNa, text){

   let elementNa= document.createElement(`${element}`);
   elementNa.classList.add(`${classNa}`);
   elementNa.textContent=`${text}`;
   document.querySelector('.content').appendChild(elementNa);

   console.log(elementNa);
   
}

createEl('h2', 'welcome','Welcome to our amazing restaurant');
createEl('p', 'text','Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero odio at facilis id veritatis pariatur dolore doloribus <br>minima cupiditate, eligendi, accusantium, ad consequatur !');
