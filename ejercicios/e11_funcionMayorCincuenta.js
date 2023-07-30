// Devuelve "true" si el argumento de la función "num" es mayor que cincuenta. De lo contrario, devuelve "false"

function mayorCiencuenta(numero) {
    if (numero > 50) {
        return true;
    } else {
        return false;
    }
}

// Llamado de la función
console.log(mayorCiencuenta(34)); // false
console.log(mayorCiencuenta(51)); // true

console.log(" ***** FIN FUNCION mayorCincuenta ***** ");

// Utilizando operador ternario
/*
function mayorACincuenta(num) {
    let mayorQueCinecuenta = (num > 50) ? true : false;
    return mayorQueCinecuenta;
}

console.log(mayorACincuenta(200)); // true
console.log(mayorACincuenta(21)); // false

console.log(" ***** FIN FUNCION mayorACincuenta ***** ");
*/