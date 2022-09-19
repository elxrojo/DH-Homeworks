la lista de clientes.
let arrayCuentas = [
  {
    nroCuenta: 5486273622,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 27771,
    titularCuenta: "Abigael Natte",
  },
  {
    nroCuenta: 1183971869,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 8675,
    titularCuenta: "Ramon Connell",
  },
  {
    nroCuenta: 9582019689,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 27363,
    titularCuenta: "Jarret Lafuente",
  },
  {
    nroCuenta: 1761924656,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 32415,
    titularCuenta: "Ansel Ardley",
  },
  {
    nroCuenta: 7401971607,
    tipoDeCuenta: "Cuenta Unica",
    saldoEnPesos: 18789,
    titularCuenta: "Jacki Shurmer",
  },
];


let array = [1,2,3]
// //punto2------------------------------------------

// let banco = {
//   clientes: arrayCuentas,
// }
// console.log(banco);


// //punto3------------------------------------------

let banco = {
  clientes: arrayCuentas,
  consultarCliente: function(nombre){
    for (let i = 0; i < arrayCuentas.length ; i++){
      if(arrayCuentas[i].titularCuenta == nombre ){
        return arrayCuentas[i]
      } 
    }
  console.log("No se esncontro perri")
  }
}
let clienteEncontrado = banco.consultarCliente('Ramon Connell');

console.log(clienteEncontrado);





// //punto4-----------------------------------------




// let banco = {
//   clientes: arrayCuentas,

//   consultarCliente: function(nombre){
//     for (let i = 0; i < arrayCuentas.length ; i++){
//       if(arrayCuentas[i].titularCuenta == nombre ){
//         return arrayCuentas[i]
//       }
//     }
//   console.log("No se esncontro perri")
//   },

//   deposito: function(nombre, cantidadADepositar){
//     for (let i = 0; i < arrayCuentas.length ; i++){
//       if(arrayCuentas[i].titularCuenta == nombre ){
//         arrayCuentas[i].saldoEnPesos = arrayCuentas[i].saldoEnPesos + cantidadADepositar;
//         return 'Depósito realizado, su nuevo saldo es: ' + arrayCuentas[i].saldoEnPesos;
//       }
//     }
//   }
// }

// console.log(banco.deposito('Ramon Connell', 1000));




// //punto5------------------------------------------




// let banco = {
//   clientes: arrayCuentas,

//   consultarCliente: function(nombre){
//     for (let i = 0; i < arrayCuentas.length ; i++){ 
//       if(arrayCuentas[i].titularCuenta == nombre ){
//         return arrayCuentas[i]
//       }
//     }
//   console.log("No se esncontro perri")
//   },

//   deposito: function(nombre, cantidadADepositar){
//     for (let i = 0; i < arrayCuentas.length ; i++){
//       if(arrayCuentas[i].titularCuenta == nombre ){
//         arrayCuentas[i].saldoEnPesos = arrayCuentas[i].saldoEnPesos + cantidadADepositar;
//         return 'Depósito realizado, su nuevo saldo es: ' + arrayCuentas[i].saldoEnPesos;
//       }
//     }
//   },

//   extraccion: function(nombre, cantidadAExtraer){
//     for (let i = 0; i < arrayCuentas.length ; i++){
//       if(arrayCuentas[i].titularCuenta == nombre ){
//         arrayCuentas[i].saldoEnPesos = arrayCuentas[i].saldoEnPesos - cantidadAExtraer;
//         return 'Extracción realizada correctamente, su nuevo saldo es: ' + arrayCuentas[i].saldoEnPesos;
//       }
//     }
//   }
// }

// console.log(banco.extraccion('Ramon Connell', 1000));




//Extra1--(intento1)--------------------------------------




// let array = [ 
//   { nombre: 'Lean',
//   edad: 27 }, 

//   { nombre: 'Eze',
//   edad: 49} 
// ]

// function propiedadUnica(arreglo, textoo){
//   let nuevoArreglo = []
  
//   for(let i = 0; i < arreglo.length; i++){
//       nuevoArreglo.push(arreglo[i].)
//   }
//   return nuevoArreglo
// }

// console.log(propiedadUnica(array, 'nombre'));




//Extra1-----(intento que si funciona pero esta bien chafa)----




let array = [ 
  { nombre: 'Lean',
  edad: 27 }, 

  { nombre: 'Eze',
  edad: 49} 
]

function propiedadUnica(arreglo, textoo){
  let nuevoArreglo = []

  switch(textoo){
    case "nombre" : 
      for(let i = 0; i < arreglo.length; i++){
        nuevoArreglo.push(arreglo[i].nombre)
      }
      return nuevoArreglo
      break;
    case "edad" : 
      for(let i = 0; i < arreglo.length; i++){
        nuevoArreglo.push(arreglo[i].edad)
      }
      return nuevoArreglo
      break;
  }
}

function mostrarBienjaja(arreglo, textoo){
  let mostrar = "[ "
  for(let i = 0 ; i < arreglo.length; i++){
    mostrar += '{ '+ textoo + ': ' + '"' + arreglo[i] + '"' + ' }, '
  }
  mostrar  = mostrar.slice(0 , mostrar.length-2)

  mostrar += " ]"

  console.log(mostrar)
}

console.log(mostrarBienjaja(propiedadUnica(array, 'nombre'), 'nombre' ))
// console.log(propiedadUnica(array, 'nombre'));





//Extra2------------------------------------------




// let alumno = 
//   { nombre: 'Ernesto Perez',
//   numeroDeLegajo: 654654,
//   listaDeNotas: [1,2,5,8,9,7,6,4],
//   promedio: function(){
//     let sumaDeNotas = 0
//     for (let i = 0; i < this.listaDeNotas.length; i++){
//       sumaDeNotas += this.listaDeNotas[i];
//     }
//     let calculo = sumaDeNotas / this.listaDeNotas.length

//     if (calculo >= 6){
//       return "Felicidades! Aprobaste con un promedio de " + calculo;
//     } else {
//       return "Mejor suerte para la próxima, desaprobaste con un promedio de " + calculo;
//     }
//   }
//   }
// console.log(alumno.promedio());
