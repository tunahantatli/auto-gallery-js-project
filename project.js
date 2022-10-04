const form = document.getElementById("car-form");
const titleElement = document.querySelector("#title");
const priceElement = document.querySelector("#price");
const urlElement = document.querySelector("#url")

//start ui object
const ui = new UI();

// load all items

eventListeners()
function eventListeners() {
    form.addEventListener("submit",addCar);
}
function addCar(e) {
    e.preventDefault(); 
    //take value 
    const title = titleElement.value;
    const price = priceElement.value;
    const url = urlElement.value;
    // if empty field in form we take error message
    if(title===""||price===""||url===""){
        alert("empty field")
    }else{
        //new car
        const newCar = new Car(title, price, url);
        
        ui.addCarToUI(newCar); // this operation: add new car to interface
        
    }
    ui.clearInputs(titleElement,priceElement,urlElement);
 
    
}
// add error alert for empty field
UI.prototype.displayMessage = function(message,type) {
    const cardBody = document.querySelector(".card-body"); /* we have 2 card-body class 
    but  we want to use first card-body class. querySelector will choose the first card-body.
    if we used querySelectorAll we must used index number of card-body class.*/
    //create alert div 
    const div = document.createElement('div');
    div.className = `alert alert-${type}`;
    div.textContent = message;
    /* we must add child this, and we do it in below*/
    card.appendChild(div); /* we add div but we want it to disapper after a certain time. 
    we will use setTimeout for this */
    setTimeout(function() {
        div.remove();
    },2000);/* after the 2 second alert will be disapper*/



}