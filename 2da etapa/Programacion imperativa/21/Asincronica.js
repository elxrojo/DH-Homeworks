
//punto1-----------------------------------------------------------------
/**
 * Crear una función que imprima todos
 * los dígitos decimales, del 0 al 9,
 * usando un ciclo For.
 */

//  function mostrarDecimales() {
//     for (let i = 0; i < 9; i++) {
//         for (let j = 0; j < 10; j++){
//             console.log(i+(j/10));
//         }
//     }
// }
// // invoca tu funcion aqui
// console.log(mostrarDecimales());




//punto2-----------------------------------------------------------------

// Crear una función que imprima los números entre el 5 y el 20, saltando de
// tres en tres.

// function deTresEnTres() {
//     for (let i = 5; i < 20; i+=3) {
//         console.log(i);
//     }
// }
// deTresEnTres()




//punto3------------------------------------------------------------------

// Crear una función que imprima la sumatoria de todos los números entre el
// 0 y el 100.

// function SumaGrande() {
//     let sumaTotal = 0
//     for (let i = 1; i < 100; i++) {
//         sumaTotal+=i
//     }
//     return sumaTotal
// }
// console.log(SumaGrande());




//punto4 --------------------------------------------------------------------

// Crear una función que reciba un string y luego imprimir la cantidad de
// vocales que se encuentran en dicha frase.

// function cantVocales(string){
//     let frase = string.replace(/\s/g,"").toLowerCase()
//     let contador = 0
//     for (let i = 0; i < frase.length; i++){
//         let letra = frase.slice(i, i+1)
//         if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u") {
//             contador++;
//         }
//     }
//     return contador;
// }
// console.log(cantVocales("hola Aaa")); 




//punto5 -----------------------------------------------------------------------

// Realizar una función que, dada una lista, devuelva una nueva lista cuyo
// contenido sea igual a la original pero invertida.

// let lista = [213,36,43,42,5,33,6678,9,36,9889,5,34,3,57,334,6,544,442]

// function invertido(array) {
//     let nuevoArray = [];
//     for (let i = array.length -1 ; i >= 0; i--) {
//         nuevoArray.push(array[i]);
//     }
//     return nuevoArray;
// }
// console.log(invertido(lista));



//punto6 -----------------------------------------------------------------------

// Realizar una función que escriba una pirámide del 1 al 30 de la siguiente
// forma :
// 1
// 22
// 333
// 4444
// 55555
// 666666

// function piramide(){
//     for (let i = 1; i < 30; i++) {
//         let bolsillo = ""
//             for (let j = 0; j < i ; j++) {
//                 bolsillo += i
//             }
//         console.log(bolsillo);
//     }
// }
// piramide()  

