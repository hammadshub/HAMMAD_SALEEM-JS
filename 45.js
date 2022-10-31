
let car = {
    manufacturer: "",
    model: null
};

function add_car_props(manufacturer, model, features) {
    car.manufacturer = manufacturer;
    car.model = model;

    car = {...car, ...features};
}

add_car_props("Honda", 2013, {color: "Red", transmission: "Manual"});
console.log(car);