//Función que devuelve "true" si "x" e "y" son iguales, de lo contrario, devuelve "false"
function compararNumeros(x, y) {
    if (x === y) {
        return true;
    } else {
        return false;
    }
}

//Llamado de la función
console.log(compararNumeros(21, 32)); //false
console.log(compararNumeros(100, 100)); //true


//Utilizando operador terciario
/*
function compararNumeros1(x, y) {
    let compararNum = (x === y) ? true : false;
    return compararNum;
}

console.log(compararNumeros1(9, 9)); //true
console.log(compararNumeros1(4, 16)); //false
*/