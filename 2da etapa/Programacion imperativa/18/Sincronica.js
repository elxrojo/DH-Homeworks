/**
 * Suma los valores que sean mayores
 * o iguales a 10, pero menor a 1000.
 */

let numeros = [
	[10, 3, 2, 1, 4, 7],
	[5, 5, 10, 100, 4],
	[5, 125, 10, 1020, 4],
	[5, 5, 5097, 100, 4]
];

function sumaMatriz(matriz) {
    let sumaTotal = 0;
    for (let filas = 0; filas < matriz.length; filas++) {
        for (let columnas = 0; columnas < matriz[filas].length; columnas++) {
            if ( matriz[filas][columnas] >= 10 &&  matriz[filas][columnas] < 1000 ){
                sumaTotal += matriz[filas][columnas] 
            }
        }   
    }
    return sumaTotal
}
console.log(sumaMatriz(numeros));
