//Operadores lógicos - se utilizan normalmente con valores booleanos(lógicos); cuando lo son, devuelven un valor booleano.

//operador AND(&&) - devuelve true si ambas expresiones son verdaderas, de los contario retorna false
var and1 = true && true; 
console.log(and1); //true

var and2 = true && false;
console.log(and2); //flase

var and3 = false && true;
console.log(and3); //false

var and4 = false && false;
console.log(and4); //false

console.log('***** Fin operador && *****');

//operador OR(||) - devuelve false si ambas expresiones son flase, de lo contrario retorna true
var or1 = false || false;
console.log(or1); //false

var or2 = false || true;
console.log(or2); //true

var or3 = true || false;
console.log(or3); //true

var or4 = true || true;
console.log(or4); //true

console.log('***** Fin operador || *****');

//operador NOT(!) - negación
var n1 = !true;
console.log(n1); //false

var n2 = !false;
console.log(n2); //true

console.log('***** Fin operador ! *****');

console.log('***** Aplicando ejemplos No.1 *****');

var edad = 30;
var tieneLicencia = false;
var puedeConducir = edad > 18 && tieneLicencia;

console.log(puedeConducir); //false
console.log(!puedeConducir); //true

console.log('***** Aplicando ejemplos No.2 *****');

edad = 16;
tieneLicencia = false;
puedeConducir = edad > 18 || tieneLicencia;

console.log(puedeConducir); //false
console.log(!puedeConducir); //true