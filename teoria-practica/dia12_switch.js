//Switch - La sentencia switch evalúa una expresión y compara su valor con una instancia 'case', luego ejecuta el bloque de código asociadas a ese 'case'

//Programa que recibe números del 1 al 7 y muestra por pantalla a que día de la semana corresponde.

var diaSemana = 5;

switch (diaSemana) {
    case 1:
        console.log('DOMINGO');
        break; //Finaliza la ejecusión del bloque de código
    case 2:
        console.log('LUNES');
        break;
    case 3:
        console.log('MARTES');
        break;
    case 4:
        console.log('MIERCOLES');
        break;
    case 5:
        console.log('JUEVES');
        break;
    case 6:
        console.log('VIERNES');
        break;
    case 7:
        console.log('SABADO');
        break;
    default: //Muetra el mensaje 'Valor incorrecto' al ingresar numeros que no esten el el rango de 1 - 7
        console.log('VALOR INCORRECTO');
        break;
}

//OUTPUT - JUEVES