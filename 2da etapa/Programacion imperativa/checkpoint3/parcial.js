// punto1 ----------------------------------------------------------------------------

let paises = [
    {
    nombre: "australia",
    continente: "oceania",
    poblacion: 18000000,
    clima: 6
    },
    {
    nombre: "nueva zelanda",
    continente: "oceania",
    poblacion: 8000000,
    clima: 15
    },
    {
    nombre: "vietnam",
    continente: "asia",
    poblacion: 23000000,
    clima: 8
    },
    {
    nombre: "españa",
    continente: "europa",
    poblacion: 29000000,
    clima: 36
    },
    {
    nombre: "portugal",
    continente: "europa",
    poblacion: 4000000,
    clima: 31
    }
];


//   Crear una función que reciba como parámetro un arreglo de objetos, un continente, y un número de población.

// La función retorna un nuevo arreglo solo con los países que sean del continente pasado por parámetro, y además, que su población sea menor a 90.000.000
// Si no encuentra coincidencias deberá retornar un array vacío.


function funcionDePaises(pais, continente) {
    let nuevoArray = [];
    for (let i = 0; i < pais.length; i++) {
        if (continente == pais[i].continente && pais[i].poblacion < 90000000){
            nuevoArray.push(pais[i]);
        }
    }
    return nuevoArray;
}
console.log(funcionDePaises(paises, "europa"));




//punto 2------------------------------------------------------------------------

// Desarrollar una función que reciba por parámetro el array de países y ordene de forma ascendente según su clima

// function ordenPorClima(array) {
//     for (let i = 0; i < array.length; i++) {
//         for (let j = 0; j < array.length - 1; j++) {
//             if(array[j].clima > array[j+1].clima){
//                 let bolsillo = array[j];
//                 array[j] = array[j+1];
//                 array[j+1] = bolsillo;
//             }
//         }
//     }
//     return array
// }
// console.log(ordenPorClima(paises));




//punto 3 -------------------------------------------------------------------------

// Crear una matriz de 6 x 4

// let matrizzz = [
//     [1,2,3,4],
//     [5,6,7,8],
//     [9,10,11,12],
//     [13,14,15,16],
//     [17,18,19,20],
//     [21,22,23,24]
// ];


// Crear una función que reciba la matriz generada por parámetro, sume todos los valores de la columna 4 teniendo en cuenta únicamente los valores que sean números pares

// function sumaDeLaMatriz(matriz) {
//     let sumaTotal = 0;
//     for (let i = 0; i < matriz.length; i++) {
//         if(matriz[i][3] % 2 == 0){
//             sumaTotal += matriz[i][3];
//         }
//     }
//     return sumaTotal;
// }
// console.log(sumaDeLaMatriz(matrizzz));



// Crear una función que reciba la matriz generada por parámetro y retorne un array  con todos los valores impares de la matriz.

    // function impares(matriz) {
    //     let arrayDeImpares = [];
    //     for (let filas = 0; filas < matriz.length; filas++) {
    //         for (let columnas = 0; columnas < matriz.length; columnas++) {
    //             if (matriz[filas][columnas] % 2 == 1) {
    //                 console.log(matriz[filas][columnas]);
    //                 arrayDeImpares.push(matriz[filas][columnas]);
    //             }
    //         }
    //     }
    //     return arrayDeImpares;
    // }
    // console.log(impares(matrizzz));



