/**
 * Declara una variable que contenga una matriz
 * de 5x5 llena de puros numeros enteros y positivos
 */

// let matriz = [
//     [1,2,3,4,5],
//     [6,7,8,9,10],
//     [11,12,13,14,15],
//     [16,17,18,19,20],
//     [21,22,23,24,25]
// ]
// console.table(matriz)

/**
 * Luego, escribe un algoritmo para sumar todos
 * los numeros en la matriz.
 */

// let sumaTotal = 0
// for (let fila = 0; fila < matriz.length; fila++){
//     for( let columna = 0; columna < matriz[fila].length; columna++){
//         sumaTotal += matriz[fila][columna]
//     }
// console.log(sumaTotal);




// Completa la función para que retorne una matriz
// de 10x10


function generadorDeMatrices(cantFilas, cantColumnas){
    contadoor = 0
    let Matriz = [];
    for(let filas = 0; filas < cantFilas; filas++){
        let ArrayFilas = [];
        for(let columnas = 0; columnas < cantColumnas; columnas++){

            ArrayFilas.push(contadoor)
            contadoor++
        }
        Matriz.push(ArrayFilas);
    }
    return Matriz
}
Matriz = generadorDeMatrices(10,20);
console.log(Matriz);


// 3) Por último, vamos a generar dos funciones:
// a) Una va a sumar los valores en la diagonal marcada en rojo.
// b) La otra va a marcar los valores de la diagonal marcada en verde.

// function sumDiagonalRoja(matrizzz){
//     sumaTotal = 0
//     for(let filas = 0 ; filas < matrizzz.length ; filas++){
//         sumaTotal += matrizzz[filas][filas];
//     }
//     return sumaTotal;
// }
// console.log(sumDiagonalRoja(Matriz));



// function sumDiagonalVerde(matrizzz){
//     let sumaTotal = 0
//     for(let i =0; i < matrizzz.length; i++){
//         // console.log(matrizzz[i][matrizzz.length - 1 - i]);
//         sumaTotal += matrizzz[i][matrizzz.length - 1 - i]
        
//     }

//     // for(let i = matrizzz.length -1 ; i >= 0; i--){
//     //     console.log(matrizzz[i][i])
//     //     sumaTotal += matrizzz[i][i];
//     // }
//     return sumaTotal
// }
// console.log(sumDiagonalVerde(Matriz));