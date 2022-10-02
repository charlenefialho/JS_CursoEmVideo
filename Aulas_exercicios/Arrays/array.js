/*let num = [5 , 8 , 4 ]

num[3] = 6
num.push(7)//adiciona ao array um elemento
num.length //tamanho do array
num.sort()//ordena de forma crescente os elemetnos


num.push(1)
console.log(num.length)
console.log(num[0])
console.log(num.sort())

let pos = num.indexOf(8)
if(pos == -1 ){
    console.log('valor não encontrado')
}else{
    console.log(`O valor 8 está na posição ${pos}`)
}
console.log(pos)
*/

/*for(var i = 0; i < num.length ; i++)
{
    console.log(num[i])
}*/

/*for(var i in num){
    console.log(num[i])
}*/

const numbers = [1,4,5,9,14,23]


// escrita mais moderna arrow function
const doubledNumbers = numbers.map(num => num * 2)


//usando funcao no parametro
/*
function doubledNumbers(num){
    return num * 2
}
const doubledNumbers = numbers.map(doubledNumbers)
*/
//usando uma função anonima no parametro dem ap

/*const doubledNumbers = numbers.map(function(elem ){
    return elem * 2
})*/

console.log(doubledNumbers)