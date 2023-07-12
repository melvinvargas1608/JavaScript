//Bucle for - lo utilizampos cuando sabemos con antelación la cantidad exacta de pasos(iteraciones) que queremos ejecutar.

//mostrar los primeros 10 números
for (var i = 1; i <= 10; i++){
    console.log(i); //1, 2, 3, 4, 5, 6, 7, 8, 9, 10
}

console.log('***** Fin primeros 10 números *****');

//sumar los primeros 5 números
var suma = 0;

for (var i = 0; i < 5; i++){
    suma = suma + i;
    console.log('Variable de iteracion: ', i);
}

console.log('Varible suma: ', suma); //Variable suma: 10