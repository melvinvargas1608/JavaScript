//Métodos Arrays - Los arreglos se asocian a una serie de métodos.

//******************** Métodos de inserción ********************
//Método unshift - agrega uno a más elementos al principio de un arreglo
var equiposFutbol = ['Olimpia', 'Motagua', 'Platense'];
console.log(equiposFutbol);

equiposFutbol.unshift('Maraton', 'Vida', 'Lobos')
console.log(equiposFutbol);

console.log('***** Fin método unshift() *****');

//Método Push() - agrega uno o más elementos al final de un arreglo.
var lenguajes = ['Javascript', 'Python', 'Java'];
console.log(lenguajes);

lenguajes.push('C++', 'Ruby');
console.log(lenguajes);

console.log('***** Fin método puch() *****');

//******************** Métodos de eliminación ********************
//Método shift() - elimina el primer elemento de un arreglo
var paises = ['Uruguay', 'Candá', 'USA', 'Honduras', 'Costa Rica', 'México'];
console.log(paises);

paises.shift();
console.log(paises);

console.log('***** Fin método shift() *****');
//Método pop() - elimina el último elemento de un arreglo
var oficios = ['carpintero', 'electricista', 'mecanico', 'albañil', 'zapatero', 'fontanero'];
console.log(oficios)

oficios.pop();
console.log(oficios)

console.log('***** Fin método pop() *****');

//******************** Métodos varios ********************
//Método includes() - determina si un arreglo incluye o contiene un elemento específico. Devuelve true o false en cada caso.
var plantas = ['pino', 'cedro', 'roble', 'caoba'];
console.log(plantas.includes('caoba')); //true
console.log(plantas.includes('acacia')); //false

console.log('***** Fin método includes() *****');

//Método every() - determina si todos los elementos de un arreglo satisfacen una misma condición.
var numeros = [9, 6, 10, 3, 15];
var condicionTrue = numeros.every((num) => {
    return num > 5;
});

console.log(condicionTrue); //false

console.log('***** Fin método every() *****');

//Método split() - convierte un string en un arreglo, donde cada elemento contendró un sub-string, dependiendo el parámetro divisor que indiquemos.
var frase = 'Aprendiendo Javascript';
console.log(typeof(frase)); //string
var stringToArreglo = frase.split(''); //'' - separa el string por caracter ***** ' ' - separa el string en cada espacio encontrado.
    
console.log(stringToArreglo);
console.log(typeof(stringToArreglo)); //object

console.log('***** Fin método split() *****');

//Método join() - convierte un arreglo en un string, uniendo todos los elementos de este en una misma cadaena.
var arregloToString = stringToArreglo.join('');
console.log(arregloToString);
console.log(typeof (arregloToString)); //string

console.log('***** Fin método join() *****');