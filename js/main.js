


 let htmlEvents = "";




const eventsContainer = document.getElementById("events-container"); 


for (let event of data.events) {
  htmlEvents += crearcard(event);
   
}






 eventsContainer.innerHTML = htmlEvents;



