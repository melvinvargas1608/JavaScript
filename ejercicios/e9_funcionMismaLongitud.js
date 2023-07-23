//Función que Devuelve "true" si los dos strings tienen la misma longitud. De lo contrario, devuelve "false"
function mismaLongitud(str1, str2) {
    if (str1.length === str2.length) {
        return true;
    } else {
        return false;
    }
}

//Llamado a la función
console.log(mismaLongitud('hola', 'javascript')); //false
console.log(mismaLongitud('curso', 'Henry')); //true


//Utilizando operador terciario
/*
function mismaLongitud(str1, str2) {
    let compararCadenas = (str1.length === str2.length) ? true : false;
    return compararCadenas;
}

console.log(mismaLongitud('uno', 'mil')); //true
console.log(mismaLongitud('lunes', 'feriado')); //false
*/