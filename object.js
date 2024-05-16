// Create an object named car
let car={
    name:"BMW",
    model:"12",
    owner:"Mrinmoy Mandal",
    year:2023
}
console.log(car);
//Access the model property of the car object.
console.log(car.model);
console.log(car["model"])
//Modify the year property of the car object.
let mofifyYear=car.year=2024;
console.log(car);
//Use a loop to print all properties of the car object.
for(const obj in car){
    console.log(obj+": "+car[obj]);
}
//Create an array of car objects and print the details of each one.
let listOfCar=[
    { make: "Toyota", model: "Corolla", year: 2021 },
    { make: "Honda", model: "Civic", year: 2020 },
    { make: "Ford", model: "Focus", year: 2022 }
]
console.log(listOfCar)
listOfCar.forEach(car => {
    console.log(`Make: ${car.make}, Model: ${car.model}, Year: ${car.year}`);
})