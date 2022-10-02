const foguetes =[
    {country: "Russia", lancamento: 32},
    {country: "Japão", lancamento: 23},
    {country: "China", lancamento: 7},
    {country: "India", lancamento: 3}
]

const lancamentoTotal = foguetes.reduce((prevVal, elem) => prevVal + elem.lancamento ,0)

console.log(lancamentoTotal)