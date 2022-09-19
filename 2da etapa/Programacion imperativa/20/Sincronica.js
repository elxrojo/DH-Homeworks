// Ejercicio 1 ----------------------------------------------------

// En un concurso de fotografía, donde los usuarios publican una fotografía y obtienen
// likes, se registra la cantidad de likes obtenidos por cada usuario en un array. Ordenar
// los valores para poder indicar cuál fue la mayor cantidad de likes obtenidos, cuánto
// obtuvo el segundo, cuánto el tercero y cuánto el que menos likes obtuvo —suponer
// que participaron 15 usuarios y suponer para cada uno, una cantidad de likes—.



// let likes = [34,54,74,2,45,6,7,78,33,87]

// function mejores(array){
    
//     for (let i = 0; i < array.length; i++){
//         for (let j = 0; j < array.length; j++) {
//             if(array[j] > array[j + 1]){
//                 let numMayor = array[j];
//                 array[j] = array[j + 1];
//                 array[j + 1] = numMayor;
//             }
//         }
//     }
//     console.log("El primer ganador sale victorioso con un total de "+ array[array.length - 1] + " ❤️");

//     console.log("El segundo ganador logra su posición con un total de "+ array[array.length - 2] + " ❤️");

//     console.log("El tercer ganador gana raspando con un total de "+ array[array.length - 3] + " ❤️");
// }
// mejores(likes);



// Ejercicio 2 ----------------------------------------------------

// El servicio meteorológico, para llevar el control diario de temperatura, utiliza un
// objeto temperatura donde registra día —valor numérico del día—, mes —valor
// numérico—, temperatura máxima y temperatura mínima, correspondiente a dicho
// día. Las temperaturas —objeto temperatura— están cargados en un array.
// a) Ordenar por temperatura mínima de menor a mayor.
// b) Ordenar por temperatura máxima de mayor a menor.

let temperatura = [
    {
        dia: 1,
        mes:1,
        maxima: 50,
        mini:24,
    },
    {
        dia: 2,
        mes:1,
        maxima: 22,
        mini:16,
    },
    {
        dia: 3,
        mes:1,
        maxima: 41,
        mini:20,
    },
    {
        dia: 4,
        mes:1,
        maxima: 10,
        mini:4,
    },
];


function minima(arr) {
    
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if(arr[j].mini > arr[j+1].mini){
                let mayorTmp = arr[j];
                arr[j] = arr[j+1];
                arr[j + 1] = mayorTmp
            }
        }
    }
    return arr
}
console.log(minima(temperatura));


function maxima(arr) {
    
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if(arr[j].maxima < arr[j+1].maxima){
                let mayorTmp = arr[j];
                arr[j] = arr[j+1];
                arr[j + 1] = mayorTmp
            }
        }
    }
    return arr
}
console.log(maxima(temperatura));