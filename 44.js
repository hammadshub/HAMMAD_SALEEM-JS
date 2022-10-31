let sandwich_items = ["butter"];

function add_sandwich_items(...items) {
    sandwich_items = [...sandwich_items, ...items];
    
}

add_sandwich_items("cheese");
add_sandwich_items("tomato", "cucumber");
add_sandwich_items("chicken", "mayo", "ketchup");

console.log(sandwich_items);