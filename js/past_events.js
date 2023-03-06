


let htmlEventsPasados = "";
let htmlEvents2 = "";
let eventsCategory = [];

const eventsContainer1 = document.getElementById("events-container1"); 
const eventsContainer3 = document.getElementById("bloque"); 

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
eventsContainer3.innerHTML = htmlEvents2;