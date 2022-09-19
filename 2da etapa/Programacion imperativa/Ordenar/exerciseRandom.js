// Palíndromo
// Deberás crear una función llamada palindromo que indique si una palabra es palíndroma o no. Debe retornar “true” en caso de que lo sea, y “false” en caso de que no. Ejemplo:
// palindromo(“anilina”) debe retornar true
// palindromo(“Ana”) debe retornar true
// palindromo(“Enrique”) debe retornar false

// function palindromo(palabra){
//     let palabraMinusculas = palabra.toLowerCase()
//     let contenedor = "";
//     for (let i = palabra.length; i >= 0 ; i--) {
//         contenedor += palabraMinusculas.slice(i,(i+1));
//     }
//     if(contenedor == palabraMinusculas){
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(palindromo("hola"));
// console.log(palindromo("Ana"));
// console.log(palindromo("ana"));
