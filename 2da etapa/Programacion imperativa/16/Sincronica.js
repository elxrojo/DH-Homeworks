/**
 * punto1----------------------------------------------------

 * Escribir un programa que muestre por consola
 * los números del 1 al 100, sustituyendo los
 * múltiplos de 3 por la palabra “fizz”,
 * los múltiplos de 5 por “buzz” y los múltiplos
 * de ambos, es decir, los múltiplos de 3 y 5
 * (o de 15), por la palabra “fizzbuzz”.
 *
 * Por ejemplo:
 *
 * 1
 * 2
 * Fizz
 * 4
 * Buzz
 * Fizz
 * 7
 * 8
 * Fizz
 * Buzz
 * 11
 * Fizz
 * 13
 * 14
 * FizzBuzz
 */

// function fizzBuzzz(){
//     for(let i = 1; i <= 100; i++){
//         if (i % 3 === 0 && i % 5 === 0){
//             console.log("fizzbuzz");
//         } else if (i % 3 === 0 ){
//             console.log("fizz");
//         } else if (i % 5 === 0 ){
//             console.log("buzz")
//         } else {
//             console.log(i);
//         }
//     }
// }
// fizzBuzzz()




/**
 * punto2 -----------------------------------------------------
 * 
 * Escriba una función que reciba dos parámetros:
 * una array y un índice. La función mostrar por consola
 * el valor del elemento en la posición dada
 * (basado en uno). Por ejemplo, dado el siguiente
 * array:
 */
//  let array = [
// 	3,
// 	6,
// 	67,
// 	6,
// 	23,
// 	11,
// 	100,
// 	8,
// 	93,
// 	0,
// 	17,
// 	24,
// 	7,
// 	1,
// 	33,
// 	45,
// 	28,
// 	33,
// 	23,
// 	12,
// 	99,
// 	100
// ];
/**
 * Y el siguiente indice:
 */
// let indice = 10;
/**
 * La funcion debera mostrar por consola el numero 6.
 */
// Extra: que pasa si cambias el valor de la variable indice a 10?
// Si tu función esta bien, deberias ver el numero 17 por consola.

// function numeroDelIndice(arrayDeNums, indicee){
//     return arrayDeNums[indicee]
// }
// console.log(numeroDelIndice(array, indice));




/**
 * punto3 ----------------------------------------------------
 * 
 * Escribir una función que dado un número de mes
 * devuelva la cantidad de días de ese mes
 * (suponiendo que no es un año bisiesto).
 *
 * Por ejemplo, si invocamos la función:
 *
 * diasDelMes(1);
 *
 * Esta debera retornar el numero 31,
 * ya que Enero tiene 31 dias.
 */

//  let mes = [ 31,28, 31, 32, 31, 30, 31, 31, 30, 31, 30, 31];

// // Escribe tu función aquí:
// function diasDelMes(numeroMes) {
// 	return mes[numeroMes - 1];
// }
// console.log(diasDelMes(2));



/**
 * punto4 ------------------------------------------------------
 * 
 * Escribir una función de JavaScript que invierta
 * un número. Por ejemplo, si x = 32443,
 * la salida debería ser 34423.
 */

// function invertidor(numero){
//     let deNumAString = numero.toString()
//     let contenedor = "";

//     for (let i = deNumAString.length; i >= 0 ; i--) {
//         contenedor += deNumAString.slice(i,i+1);
//     }
//     return Number(contenedor)
// }
// console.log(invertidor(32443));




//punto5---------------------------------------------------------------

/**
 * Escribir una función que reciba una array
 *  y solo imprima los valores que se repiten.
 *  Por ejemplo, dada la siguiente array e índice,
 *  la función imprimirá '6,23,33,100'.*/
// let array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];

// function numRepetidos(arrayDeNum){
//     let arrayDeNumRepetidos = [];
//     for(let i = 0; i < arrayDeNum.length; i++){
//         for(let j = 0; j < arrayDeNum.length; j++){
//         if(arrayDeNum[i] === arrayDeNum[j] && !arrayDeNumRepetidos.includes(arrayDeNum[j]) && !(i == j)){
//             arrayDeNumRepetidos.push(arrayDeNum[j]);
//             }
//         }
//     }
//     return arrayDeNumRepetidos
// }
// console.log(numRepetidos(array));


