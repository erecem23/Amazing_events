
let dataamazing=[];

async function getData(){
  await fetch("https://mindhub-xj03.onrender.com/api/amazing")
  .then(respuesta => respuesta.json())
  .then(json => data=json)
  localStorage.setItem("data",JSON.stringify(data))
} 

getData();

let data=localStorage.getItem("data");
  data = JSON.parse(data);
console.log(data);
    

  /*
const crearEvento = (event) => {
  `
      <div class="col-md-6 border-right">
         <img src="${evento.image}" alt="Imagen" class="img-fluid">
      </div>
      <div class="col-md-6">
        <div class="card mx-auto">
          <div class="card-body" id="card-body" >
            <h5 class="card-title">${evento.name}</h5>
            <p class="card-text">${evento.description}</p>
            <p class="card-text">Date: ${evento.date}</p>
             <p class="card-text">${evento.price}</p>
             
           
          </div>
        </div>
      </div>
    </div>`
}
*/
const crearcard = (evento) => {
  return `
    <article class="col-12 col-sm-6 col-lg-3 mb-3 group-card">
      <div class="card text-right">
        <img src="${evento.image}" class="card-img-top shadow-lg" alt="...">
        <div class="card-body">
          <h5 class="card-title">${evento.name}</h5>
          <p class="card-text">${evento.description}</p>
          <div class="card-precio">
            <span>Precio ${evento.price}</span>
            <a href="./Event.html?id=${evento._id}"  class="btn btn-primary btn2 btn-sm">Ver más</a>
          </div>
        </div>
      </div>
    </article>`;
};


const crearInput = (event) => {
  
  return `<label"><input type="checkbox" name ="${event}" value="${event}" class="capturar"> <span> 
  ${event}</span> </label>`
}




let categories = [];
data.events.forEach(evento => {
  if (!categories.includes(evento.category)){
    categories.push(evento.category)
  }
});
console.log(categories); 


function crearCheckbox(category) {
  return `<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="checkbox${category}" value="${category}" name="category">
  <label class="form-check-label" for="checkbox${category}">${category}</label>
</div>`;
} 




/*
itemsCheckboxes.forEach(checkbox => checkbox.onClick = () =>{
  let HTMLresultados = "";
  let category = checkbox.innerText;
  categories.filter(event => event.category == category).forEach(event =>
    {HTMLresultados += crearCheckbox(event,HTMLresultados)});
  document.querySelector('div.resultados').innerHTML = HTMLresultados;
});
*/