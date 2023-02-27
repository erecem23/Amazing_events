

let htmlEventsFuturos = "";
const eventsContainer2 = document.getElementById("events-container2");
for (let event of data.events) {
  let currentDate = new Date(data.currentDate);
  let eventDate = new Date(event.date);
  console.log(currentDate);
  console.log(eventDate);
  if (eventDate > currentDate) {

    htmlEventsFuturos += crearcard(event);
  }
}
   eventsContainer2.innerHTML = htmlEventsFuturos;