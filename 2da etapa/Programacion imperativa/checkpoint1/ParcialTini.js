
// punto 1 -----------------------------------------------------------------------

// parte 1 --------------------------------
// Que reciba por parámetro 2 números, y verifique que si uno de ellos es par, retorne la multiplicación de ambos, si ambos son pares, retorne la suma de ambos, si no hay ninguno par, que retorne ‘ninguno es par ‘.

// function pares(num1, num2){
//     if((num1 % 2 ==0 ) && (num2 % 2 == 0)){
//         return num1 + num2;
//     } else if ((num1 % 2 ==0 ) || (num2 % 2 == 0)){
//         return "Uno de los numeros es par";
//     } else {
//         return "Ninguno es par";
//     }
// }
// console.log(pares(1,1));


// parte 2 --------------------------------
// Que reciba por parámetro 1 número, le sume 20, y verifique que si ese resultado es múltiplo de 5, retorne la frase ‘[número] + 20 es múltiplo de 5’, sino, retornará ‘[número] + 20 no es múltiplo de 5’. 

// function multiploDeCinco(num){
//     suma = num + 20;
//     if(suma % 5 == 0){
//         return `${num} + 20 es múltiplo de 5`;
//     } else {
//         return `${num} + 20 no es múltiplo de 5`; 
//     }
// }
// console.log(multiploDeCinco(7));



// punto 2 -----------------------------------------------------------------------


// parte 1 --------------------------------
// Deberás escribir un objeto literal llamado alumno que contenga las siguientes propiedades que deberás completar con tus datos:
// nombre string
// apellido string
// notas array que tendrá 5 números del 1 al 10 en cada posición

// parte 2 --------------------------------
// Crear un método del objeto que calcule el promedio del alumno y si es mayor o igual a 7, retorne ‘El promedio de [nombre] [apellido] es [promedio] por lo tanto está aprobado’ , y sino retornará ‘El promedio de [nombre] [apellido] es [promedio] por lo tanto NO está aprobado’


let alumno = [
    {
        nombre: "Sofia",
        apellido: "Moneta",
        notas: [10,10,10,10,10],
        promedio: function(){
            let suma = 0
            for (let i = 0; i < this.notas.length; i++){
                suma += this.notas[i];
            }
            let promedioTotal = suma / this.notas.length;
            if(promedioTotal >= 7){
                return `El promedio de ${this.nombre} ${this.apellido} es ${promedioTotal}  por lo tanto está aprobado`;
            } else {
                return `El promedio de ${this.nombre} ${this.apellido} es ${promedioTotal}  por lo tanto NO está aprobado`;
            }
        }
    }
]
console.log(alumno[0].promedio());



// punto 3  -----------------------------------------------------------------------

// Crear un array vacío, que tenga el nombre libros.
// Usando estos 4 objetos:


let historiasInconscientes = {
    anio  : 2013,
    autor : "Gabriel Rolón",
    paginas: 352
}
let elAlquimista = {
    anio  : 1988,
    autor : "Paulo Coehlo",
    paginas: 192
}
let elCampamento = {
    anio  : 2021,
    autor : "Blue Jeans",
    paginas: 480
}
let operacionMasacre = {
    anio: 2009,
    autor: "Rodolfo Walsh",
    paginas: 236
}


let libros = []

// Deberás agregarlos al array utilizando un método de array.
// Mostrar por consola el array para ver que contenga esos objetos.

libros.push(historiasInconscientes, elAlquimista, elCampamento, operacionMasacre)
console.log(libros);


// Deberás crear una función que reciba el array libros como parámetro, y si el año de lanzamiento es anterior a 2020, deberá agregar una propiedad a cada objeto que se llame época y tenga el valor pre-pandemia, si el año es posterior o igual a 2020 el valor de la propiedad época será post-pandemia.

// Ejecutar la función y mostrar por consola los cambios.

function librosPandemicos(array){
    for(let i = 0; i < array.length; i++){
        if(array[i].anio < 2020){
            array[i]["epocas"]= "pre-pandemia";
        } else {
            array[i]["epocas"]="post-pandemia";
        }
    }
    return array
}
console.log(librosPandemicos(libros));
