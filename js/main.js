


 let htmlEvents = "";
 let htmlEvents2 = "";
let eventsCategory = [];
let seleccion = false;


const eventsContainer = document.getElementById("events-container"); 
const eventsContainer2 = document.getElementById("bloque"); 



eventsContainer3 = document

for (let event of data.events) {
  htmlEvents += crearcard(event);
   
}



 eventsContainer.innerHTML = htmlEvents;

data.events.forEach(event =>
{
  if (!eventsCategory.includes(event.category)) {
    
    eventsCategory.push(event.category)
  }
  
});

console.log(eventsCategory)

for (let event of eventsCategory) {
  htmlEvents2 += crearInput(event);
   
}
eventsContainer2.innerHTML = htmlEvents2;




const checkboxes = document.querySelectorAll(".capturar");


checkboxes.forEach(checkbox => checkbox.onchange = () => {
  let HTMLresultados = "";
  let categories = [];
  checkboxes.forEach(checkbox => {
    if (checkbox.checked) {
  
      categories.push(checkbox.value);
          }  
        
    });

    console.log(categories);
    
    if(categories.length>0){
        data.events.filter(event => categories.includes(event.category)).forEach(event =>
            {HTMLresultados += crearcard(event)});
      
            console.log(HTMLresultados);
      
            
    }else{
        data.events.forEach(event =>
            {HTMLresultados += crearcard(event)});
    }

        document.querySelector('.checkBox').innerHTML = HTMLresultados; 
    
    
     
     
  }  );

 
let busqueda=[];

let inputBusqueda=document.querySelector(".input-search");
document.querySelector(".form-search").onsubmit = (e)=> {
   e.preventDefault();
let resultadoBusqueda="";

let textingresado = inputBusqueda.value.toLowerCase().trim();

for (let event of data.events) {
   if (event.name.toLowerCase().includes(textingresado)
   ||event.description.toLowerCase().includes(textingresado)) {
      resultadoBusqueda+= crearcard(event); 
   }
}
   
console.log(resultadoBusqueda);
document.getElementById("events-container").innerHTML=resultadoBusqueda;
}





/* Varios intentos de código que no funcionaron del todo
 checkboxes.forEach(checkbox => {
  if (checkbox.checked == true)
    lista.push(checkbox.name)
  
});

console.log(lista);


checkboxes.forEach(checkbox => {
  
    lista.push(checkbox.name)
  
});
*/
/*
console.log(lista);

let categories = [];
data.events.forEach(evento => {
  if (!categories.includes(evento.category)){
    categories.push(evento.category)
  }
});
console.log(categories); 
*/
/*
function crearCheckbox(category) {
  return `<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="checkbox${category}" value="${category}" name="category">
  <label class="form-check-label" for="checkbox${category}">${category}</label>
</div>`;
} 
*/

/*
let itemsCheckboxes = document.querySelectorAll(".form-check-input");
console.log(itemsCheckboxes);
*/


  
//const eventsContainer = HTMLresultados;











