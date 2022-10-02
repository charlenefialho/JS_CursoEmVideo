const pessoas = [
    {id: 2, name: "Charlene", age: 17},
    {id: 3, name: "anahi", age: 18},
    {id: 4, name: "helen", age: 15}
]

console.log(pessoas.every(a => a.age >= 18))