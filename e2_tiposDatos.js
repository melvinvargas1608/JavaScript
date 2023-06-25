//Tipos de Datos

//String: Representan textos(cadenas de caracteres).
var nombre = 'Melvin Vargas';
var saludo = 'Hola!'

console.log(nombre); //Melvin Vargas

console.log(saludo); //Hola

//Método lengtl: Nos devuelve la cantidad de caracteres que tiene un string

console.log(nombre.length); //13
console.log(saludo.length); //5

console.log(saludo + ', ' + nombre); //Hola!, Melvin Vargas

//verificamos el tipo de dato que estamos utilizando apoyandonos del método typeof
console.log(typeof (nombre)); //string

console.log('***** Fin String *****');

//Números: Nos permiten manipular valoires numéricos.
var numeroEntero = 16;
var numeroNegativo = -100;
var numeroDecimal = 37.12;

console.log(typeof (numeroEntero)); //number
console.log(typeof (numeroNegativo)); //number
console.log(typeof (numeroDecimal)); //number

console.log('***** Fin Números *****');

//Booleanos: Representa un valor lógico y solamente puede tener dos valores, ya sea true o false.
var estoyFeliz = true;
var estoyAburrido = false;

console.log(typeof(estoyFeliz)); //boolean
console.log(typeof (estoyAburrido)); //boolean

console.log('***** Fin Booleanos *****');

//Undefined: Representa una variable que no se ha declarado o a la cual no se le ha asignado un valor.
var numero1;

console.log(typeof (numero1)); //undefined

console.log('***** Fin Undefined *****');

//Null: Representa la ausencia intencional de cualquier valor, un valor nulo o <<vacío>>.
var vacia = null;

console.log(typeof (vacia)); //null

console.log('***** Fin Null*****');