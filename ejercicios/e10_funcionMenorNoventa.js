// Función que devuelve "true" si el argumento de la función "num" es menor que noventa. De lo contrario, devuelve "false"
function menorNoventa(numero) {
    if (numero < 90) {
        return true;
    } else {
        return false;
    }
}

//Llamado de la función
console.log(menorNoventa(100)); // false
console.log(menorNoventa(35)); // true


//Utilizando función flecha
/*
function menorAnoventa(num) {
    let menor = (num < 90) ? true : false;
    return menor;
}

console.log(menorAnoventa(10)); // true
console.log(menorAnoventa(91)); // false
*/