const people = [
    {id: 11, name:"charlene" , age: 23, group: "editor"},
    {id: 12, name:"anahi" , age: 30, group: "user"},
    {id: 15, name:"helen" , age: 40, group: "editor"},
]

const filteredUsers = people.filter(p => p.name.includes("en"))
console.log(filteredUsers)