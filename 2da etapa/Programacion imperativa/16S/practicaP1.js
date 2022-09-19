const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];

function menores(array){
    let arrayMenores = [];

    for(let i = 0; i < array.length; i++){
        if(array[i] < 18 ){
            arrayMenores.push(array[i]);
        }
    }
    return arrayMenores;
}

function mayores(array){
    let arrayMayores = [];

    for(let i = 0; i < array.length; i++){
        if(array[i] >= 18 ){
            arrayMayores.push(array[i]);
        }
    }
    return arrayMayores;
}

function igualesA(array){
    let arrayIguales = [];

    for(let i = 0; i < array.length; i++){
        if(array[i] == 18 ){
            arrayIguales.push(array[i]);
        }
    }
    return arrayIguales;
}

function menor(array){
    let menorNumero = 100;

    for(let i = 0; i < array.length; i++){
        if(array[i] < menorNumero ){
            menorNumero = array[i];
        }
    }
    return menorNumero;
}

function mayor(array){
    let mayorNumero = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] > mayorNumero ){
            mayorNumero = array[i];
        }
    }
    return mayorNumero;
}

function promedio(array){
    let totalDeNumeros = array.length
    let sumaDeNumeros = 0
    for(let i = 0; i < array.length; i++){
        sumaDeNumeros += array[i]
    }
    return sumaDeNumeros / totalDeNumeros;
}

function sumarATodos(array){
    for(let i = 0; i < array.length; i++){
        array[i]++
    }
    return array;
}





console.log("Los menores de edad son: " + menores(edades));
console.log("Los mayores de edad son: " + mayores(edades));
console.log("Los que llegan al limite de edad son: " +igualesA(edades));
console.log("El menor numero es: " + menor(edades));
console.log("El mayor numero es: " + mayor(edades));
console.log("El promedio de la lista de numeros es: " + promedio(edades));
console.log("La lista seria: " + sumarATodos(edades));

