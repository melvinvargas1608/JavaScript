//Bucle do...while - hacer mientras - se ejecuta una sentencia especifica, hasta que la condición sea falsa. La condición se evalúa después de ejecutar la sentencia, resultando que la sentencia se ejecute al menos una vez.

var i = 0;

do {
    i = i + 1;
    console.log(i); //1, 2, 3, 4, 5, 6, 7, 8, 9, 10
} while (i < 10);