const pizzas = [
    "mussarela",
    "calabresa",
    "portuguesa"
]

//console.log(pizzas.find(p => p.startsWith("p")))

const fruits = [
    {name: "jaca", quantity: 2},
    {name: "cereja", quantity: 0}
]

const foundFruits = fruits.find(fruit => fruit.name == "cereja")
console.log(foundFruits)