

export function createPr(element, classNa, parent ){

   let elementNa= document.createElement(`${element}`);
   elementNa.classList.add(`${classNa}`);   
   parent.appendChild(elementNa);

   return elementNa;
}


export function homeCall(){
   let containerDiv=document.querySelector('.content');
   let homeBack=createPr('div', 'homeBack', containerDiv);
   let parentHome=createPr('div', 'parentHome', homeBack);

   createEl('h2', 'header1','Welcome to our amazing restaurant',parentHome );
   createEl('p', 'text','Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero odio at facilis id veritatis pariatur dolore doloribus <br>minima cupiditate, eligendi, accusantium, ad consequatur !', parentHome);

}



export function createImg(src, classNa, parent){

   let elementNa= document.createElement(`img`);
   elementNa.setAttribute('src',`${src}`);
   elementNa.classList.add(`${classNa}`);
   parent.appendChild(elementNa);
   
}



export function createEl(element, classNa, text, parent){

   let elementNa= document.createElement(`${element}`);
   elementNa.classList.add(`${classNa}`);
   elementNa.textContent=`${text}`;
   parent.appendChild(elementNa);
   
}

