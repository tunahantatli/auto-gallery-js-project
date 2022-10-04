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
