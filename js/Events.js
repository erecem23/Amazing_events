console.log([document]);

const queryString = location.search;
console.log(queryString);

const params = new URLSearchParams(queryString);
        
        const id = params.get("id");
        const evento = data.events.find(event => event._id == id);

 const cardDetail = document.querySelector(".detalle");
 cardDetail.innerHTML =  `
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