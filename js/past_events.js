


let htmlEventsPasados = "";
const eventsContainer1 = document.getElementById("events-container1"); 

for (let event of data.events) {
  let currentDate = new Date(data.currentDate);
  let eventDate = new Date(event.date);
  console.log(currentDate);
  console.log(eventDate);
  if (eventDate < currentDate) {

    htmlEventsPasados += crearcard(event);
  }
}
     eventsContainer1.innerHTML = htmlEventsPasados;