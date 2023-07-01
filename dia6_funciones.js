//Funciones - son bloques de código que podemos ejecutar y estas nos devuelven un valor.

//Primer ejemplo
function sumaDosNumeros(x) {
    return x + 7;
}

//llamar a la función
console.log(sumaDosNumeros(10)); //17

//Segundo ejemplo
var suma = function (x) {
    return x + 7;
}

//llamar a la función
console.log(suma(20)); //27

//tercer ejemplo - función de flecha
var sumaNumeros = (x) => {
    return x + 21;
}

//llamar a la función
console.log(sumaNumeros(9)); //30