console.log("This program will display the information  of the Mercedes car");


const car1= {
  name: "Tesla", 
  model: 500,
  color: "red", 
}
car2= {
  name: "BMW", 
  model: 750,
  color: "pink", 
}
car3= {
  name: "Mercedes", 
  model: 850,
  color: "gray", 
}

function car(name,model,color)
{
  if(name == car3.name && model == car3.model && color == car3.color);
  {
    console.log("Car Name: ", car3.name, "\n Model: ", car3. model, "\n Color: ", car3.color);
  }
}
car(car3.name,car3.model,car3.color)
