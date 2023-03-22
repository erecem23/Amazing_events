

let htmlEventsFuturos = "";

let htmlEvents2 = "";
let eventsCategory = [];
let seleccion = false;
let cardsbusqueda = [];
let futureeventslist = [];
const eventsContainer2 = document.getElementById("events-container2");
const eventsContainer3 = document.getElementById("bloque"); 
for (let event of data.events) {
  let currentDate = new Date(data.currentDate);
  let eventDate = new Date(event.date);
  console.log(currentDate);
  console.log(eventDate);
  if (eventDate > currentDate) {

    htmlEventsFuturos += crearcard(event);
    futureeventslist.push(event);
  }
}
eventsContainer2.innerHTML = htmlEventsFuturos;
   
data.events.forEach(event =>
{
  if (!eventsCategory.includes(event.category)) {
    
    eventsCategory.push(event.category)
  }
  
});
for (let event of eventsCategory) {
  htmlEvents2 += crearInput(event);
   
}
eventsContainer3.innerHTML = htmlEvents2;

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
    
let textoingresado = inputBusqueda.value.toLowerCase().trim();
  console.log(categories);
  
    HTMLresultados = Busqueda(categories,textoingresado)


    document.querySelector('.checkBox').innerHTML = HTMLresultados; 

    
    
     
     
  }  );

 
function Busqueda(categories, textoingresado) {

     let HTMLresultados = "";
     
     
      if (categories.length > 0 && textoingresado == "") { 
       futureeventslist.filter(event => categories.includes(event.category)).forEach(event => { HTMLresultados += crearcard(event) });
      
       console.log(HTMLresultados);
      
            
     } else if (categories.length > 0 && textoingresado !== "") { 
        
       futureeventslist.filter(event => event.name.toLowerCase().includes(textoingresado) || event.description.toLowerCase().includes(textoingresado)).forEach(event => { HTMLresultados += crearcard(event) });
      
       console.log(HTMLresultados);
            
   } else if (categories.length == 0 && textoingresado != "") { 
      
for (let event of data.events) {
   if (event.name.toLowerCase().includes(textoingresado)
     || event.description.toLowerCase().includes(textoingresado)
   ||event.category.toLowerCase().includes(textoingresado)) {
     HTMLresultados+= crearcard(event);
     
   }

}
     
       
     }
       
       else if (categories.length == 0 && cardsbusqueda.length == 0) {
      futureeventslist.forEach(event => { HTMLresultados += crearcard(event) });
    }

    return HTMLresultados;
  
     
   }

  

  let inputBusqueda = document.querySelector(".input-search");

  document.querySelector(".form-search").onsubmit = (e) => {
    e.preventDefault();
    let HTMLresultados = "";
    let checkcategories = [];
    checkboxes.forEach(checkbox => {
      if (checkbox.checked) {
        checkcategories.push(checkbox.value);
      }
         
    });
 
    console.log(checkcategories);
 
    let textoingresado = inputBusqueda.value.toLowerCase().trim();
    HTMLresultados = Busqueda(checkcategories, textoingresado);
 
 
    document.querySelector(".checkBox").innerHTML = HTMLresultados;
   
    console.log(textoingresado)
    let textingresado = inputBusqueda.value.toLowerCase().trim();
  let eventoEncontrado = false;
for (let event of data.events) {

  if (event.name.toLowerCase().includes(textingresado)
    || event.description.toLowerCase().includes(textingresado)
    || event.category.toLowerCase().includes(textingresado)) {
    busqueda = textingresado;
    eventoEncontrado = true;

  
  }
}
  if (!eventoEncontrado) {
      
      HTMLresultados = cardError + cardError + cardError + cardError
      document.getElementById("events-container2").innerHTML=HTMLresultados;
console.log(eventoEncontrado)
    }
  }

  
/// Busqueda por categorias 

itemsCheckboxes.forEach(checkbox => checkbox.onchange = () =>{
    let HTMLresultados = "";
    let checkcategories = [];
    itemsCheckboxes.forEach(checkbox => {
        if(checkbox.checked ){
            checkcategories.push(checkbox.value);  
        }
        
    });

    console.log(checkcategories);

    let textoingresado = inputBusqueda.value.toLowerCase().trim();
    HTMLresultados = Busqueda(checkcategories,textoingresado)


    document.querySelector('div.events').innerHTML = HTMLresultados; 
    
  }  );


  // Busqueda por search (name y description)

  let inputBusqueda2=document.getElementById("search");

document.querySelector("#form-busqueda").onsubmit = (e) => {
  e.preventDefault();
  let HTMLresultados = "";
  let checkcategories = [];
  itemsCheckboxes.forEach(checkbox => {
    if (checkbox.checked) {
      checkcategories.push(checkbox.value);
    }
         
  });
 
  console.log(checkcategories);
 
  let textoingresado = inputBusqueda2.value.toLowerCase().trim();
  HTMLresultados = Busqueda(checkcategories, textoingresado);
 
 
  document.querySelector('div.events').innerHTML = HTMLresultados;
   
}

 let cardError= `
    <article class="col-12 col-sm-6 col-lg-3 mb-3 group-card posicion-texto">
      <div class="card text-right error">
       
        <div class="card-body text-center posicion-texto-cuerpo">
          <h5 class="card-title ">"lo sentimos no encontramos ningún evento de ese tipo "</h5>
          <p class="card-text">"Prueba de nuevo"</p>
         
         
        </div>
      </div>
    </article>`;

