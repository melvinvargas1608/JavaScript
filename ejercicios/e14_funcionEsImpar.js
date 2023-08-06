// Devuelve "true" si "num" es impar. De lo contrario, devuelve "false"
function numImpar(num) {
    if (num % 2 != 0) {
        return true;
    } else {
        return false;
    }
}

// Llamado de la función
console.log(numImpar(4)) // false
console.log(numImpar(7)); // true

console.log(" ***** FIN FUNCION numImpar ***** ");


// Utilizando operador ternario
/*
var num2 = 15;
let esImpar = (num2 % 2 != 0) ? true : false;

console.log(esImpar); // true
*/