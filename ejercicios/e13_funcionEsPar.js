// Devuelve "true" si "num" es par, De lo contrario, devuelve "false"
function numPar(numero) {
    if (numero % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

// Llamado de la función
console.log(numPar(15)); // false
console.log(numPar(50)); // true

console.log(" ***** FIN FUNCION numPar ***** ");


// Utilizando operador ternario
/*
let num = 9;
let esPar = (num % 2 == 0) ? true : false;

console.log(esPar); // false
*/