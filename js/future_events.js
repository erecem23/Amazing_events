

let htmlEventsFuturos = "";

let htmlEvents2 = "";
let eventsCategory = [];

const eventsContainer2 = document.getElementById("events-container2");
const eventsContainer3 = document.getElementById("bloque"); 
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
