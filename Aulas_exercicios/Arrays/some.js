//verificação de  numero primo
function isPrimo(value){
    for(let i = 2; i < value; i++)
    {
        if(value % i == 0){
            return false
        }
    }

    return value > 1
}

const array = [6, 8 , 11 , 14 ,42]

//console.log(array.some(isPrimo))

//verificar por  condições em valores/objetos -> verificar se alguem do time é piloto

//exemplo retorno API :
const team = [
    {id: 2, name: "Charlene", pilot: true},
    {id: 3, name: "anahi", pilot: true},
    {id: 4, name: "helen", pilot: false}
]

console.log(team.some(person => person.pilot))