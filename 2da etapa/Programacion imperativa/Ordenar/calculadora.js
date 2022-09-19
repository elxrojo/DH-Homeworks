const prompt = require ("prompt-sync")({ sigint: true });

// function sumar (num1, num2) {
//     return num1 + num2;
// }
// // console.log(sumar (2, 4));

// function resta (num1, num2) {
//     return num1 - num2;
// }
// // console.log(resta (6, 2));

// function multiplicacion (num1, num2) {
//     return num1 * num2;
// }
// // console.log(multiplicacion (2, 8));

// function division (num1, num2) {
//     return num1 / num2;
// }
// // console.log(division (10, 2));

console.log("*************Testeo de Operaciones*************");

let numero1 = (parseInt (prompt ("Ingrese su numero: ")));
let numero2 = (parseInt (prompt ("Ingrese su numero: ")));

// let sumar = () =>{
//     return numero1 + numero2;
// }
// console.log(`La suma total de los números ingresados es: ${sumar()}`);

// let resta = () =>{
//     return numero1 - numero2;
// }
// console.log(`La resta total de los números ingresados es: ${resta()}`);

let multiplicar = () =>{
    return numero1 * numero2;
}

let cuadradoDeUnNumero = () =>{
    return multiplicar(numero, numero)
}

console.log('cuadradoDeUnNumero(5)');

// let dividir = () =>{
//     return numero1 / numero2;
// }
// console.log(`La division total de los números ingresados es: ${dividir()}`);