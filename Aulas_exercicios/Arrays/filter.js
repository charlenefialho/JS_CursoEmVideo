const todosNumeros = [2, 3 ,4 ,5, 7, 8 ,9 ,7, 3]

const numerosFiltrados = todosNumeros.filter((elem, index, arr) => arr.indexOf(elem ) == index)

console.log(numerosFiltrados)