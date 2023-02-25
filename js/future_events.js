let htmlEventsFuturos = "";
const eventsContainer2 = document.getElementById("events-container2");
for (let event of data.events) {
  let currentDate = new Date(data.currentDate);
  let eventDate = new Date(event.date);
  console.log(currentDate);
  console.log(eventDate);
  if (eventDate > currentDate) {

    htmlEventsFuturos += `
  <article class="col-12 col-sm-6 col-lg-3 mb-3 group-card">
    <div class="card text-right">
      <img src="${event.image}" class="card-img-top shadow-lg" alt="...">
      <div class="card-body">
        <h5 class="card-title">${event.name}</h5>
        <p class="card-text">${event.description}</p>
        <div class="card-precio">
          <span>Precio ${event.price}</span>
          <a href="./Event.html" class="btn btn-primary btn2 btn-sm">Ver más</a>
        </div>
      </div>
    </div>
  </article>`;
  }
}
   eventsContainer2.innerHTML = htmlEventsFuturos;