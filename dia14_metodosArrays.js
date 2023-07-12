//Métodos Arrays - Los arreglos se asocian a una serie de métodos.

//Métodos de inserción

//Método Push() - agrega uno o más elementos al final de un arreglo.
var lenguajes = ['Javascript', 'Python', 'Java'];
console.log(lenguajes);

lenguajes.push('C++', 'Ruby');
console.log(lenguajes);

console.log('***** Fin método puch() *****');

//Método pop() - elimina el último elemento de un arreglo
var oficios = ['carpintero', 'electricista', 'mecanico', 'albañil', 'zapatero', 'fontanero'];
console.log(oficios)

oficios.pop();
console.log(oficios)

console.log('***** Fin método pop() *****');

//Método unshift - agrega uno a más elementos al principio de un arreglo
var equiposFutbol = ['Olimpia', 'Motagua', 'Platense'];
console.log(equiposFutbol);

equiposFutbol.unshift('Maraton', 'Vida', 'Lobos')
console.log(equiposFutbol);

console.log('***** Fin método unshift() *****');

//Método shift() - elimina el primer elemento de un arreglo
var paises = ['Uruguay', 'Candá', 'USA', 'Honduras', 'Costa Rica', 'México'];
console.log(paises);

paises.shift();
console.log(paises);

console.log('***** Fin método shift() *****');