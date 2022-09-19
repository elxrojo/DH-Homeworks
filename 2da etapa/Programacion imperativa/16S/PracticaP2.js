const arrayCuentas =
[
    {
      titular: "Arlene Barr",
      estaHabilitada: false,
      saldo: "$3,253.40",
      edadTitular: 33,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Roslyn Torres",
      estaHabilitada: false,
      saldo: "$3,229.45",
      edadTitular: 27,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Cleo Lopez",
      estaHabilitada: true,
      saldo: "$1,360.19",
      edadTitular: 34,
      tipoCuenta: "corriente"
    },
    {
      titular: "Daniel Malone",
      estaHabilitada: false,
      saldo: "$3,627.12",
      edadTitular: 30,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Ethel Leon",
      estaHabilitada: true,
      saldo: "$1,616.52",
      edadTitular: 34,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Harding Mitchell",
      estaHabilitada: true,
      saldo: "$1,408.68",
      edadTitular: 25,
      tipoCuenta: "corriente"
    }
  ]


// Obtener un nuevo array de cuentas cuyas edades sean menores a 30.-----------


// let menores = []

// function mayoresDe30 (arr){
//     let menores = []
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i].edadTitular < 30){
//             menores.push(arr[i])
//         }
//     }
// }
// mayoresDe30(arrayCuentas)
// console.log(menores)


// Obtener un nuevo array de cuentas cuyas edades sean mayor o igual a 30. ---


// function mayorIgual(arr){
//     let mayoresTreinta= []
//     for(let i = 0; i < arr.length ; i++){
//         if(arr[i].edadTitular >= 30){
//             mayoresTreinta.push(arr[i])
//         }
//     }
//     console.log(mayoresTreinta)
// }
// mayorIgual(arrayCuentas)


// Obtener un nuevo array de cuentas cuyas edades sean igual a 30. ------------


// function igual(arr){
//     let igualesTreinta= []
//     for(let i = 0; i < arr.length ; i++){
//         if(arr[i].edadTitular = 30){
//             igualesTreinta.push(arr[i])
//         }
//     }

//     console.log(igualesTreinta)
// }
// igual(arrayCuentas)


// Obtener la cuenta con el titular de la misma más joven. --------------------


// function elMasJovencito(arr){
//     let primero = arr[0]
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i].edadTitular < primero.edadTitular){
//             primero= arr[i]
//         }
//     }
//     console.log(primero)
// }
// elMasJovencito(arrayCuentas)


// Obtener un nuevo array con todos los objetos segun el tipo de cuenta que se pida. --------------------------------------------------------------------------


// function cuenta(arrayUsuario, tipoDeCuenta){
//   let arrayTipoDeCuenta = []
//   for(let i = 0; i < arrayUsuario.length; i++){
//     if(arrayUsuario[i].tipoCuenta == tipoDeCuenta){
//       arrayTipoDeCuenta.push(arrayUsuario[i])
//     }
//   }
//   return arrayTipoDeCuenta
// }
// console.log(cuenta(arrayCuentas, "sueldo"));



// Obtener un nuevo array con las cuentas habilitadas. -------------------------


// function cuentasHabilitadas(arrayUsuarios){
//   let arrayCuentasHabilitadas = []
//   for(let i = 0; i < arrayUsuarios.length; i++){
//     if(arrayUsuarios[i].estaHabilitada){
//       arrayCuentasHabilitadas.push(arrayUsuarios[i])
//     }
//   }
//   return arrayCuentasHabilitadas
// }
// console.log(cuentasHabilitadas(arrayCuentas));


// Obtener un nuevo array con las cuentas deshabilitadas. ----------------------


// function cuentasDeshabilitadas(arrayUsuarios){
//   let arrayCuentasDeshabilitadas = []
//   for(let i = 0; i < arrayUsuarios.length; i++){
//     if(!arrayUsuarios[i].estaHabilitada){
//       arrayCuentasDeshabilitadas.push(arrayUsuarios[i])
//     }
//   }
//   return arrayCuentasDeshabilitadas
// }
// console.log(cuentasDeshabilitadas(arrayCuentas));


// Obtener la cuenta con el menor saldo. ---------------------------------------


// function menorSaldo(arrayCuentas){
//   let cuentaConMenorSaldo = arrayCuentas[0]
//   for (let i = 0 ; i < arrayCuentas.length; i++){
//     if (arrayCuentas[i].saldo < cuentaConMenorSaldo.saldo) {
//       cuentaConMenorSaldo = arrayCuentas[i]
//     }
//   }
//   return cuentaConMenorSaldo
// }
// console.log(menorSaldo(arrayCuentas));



// Obtener la cuenta con el mayor saldo. ----------------------------------------


function mayorSaldo(arrayCuentas){
  let cuentaConMayorSaldo = arrayCuentas[0]
  for (let i = 0 ; i < arrayCuentas.length; i++){
    if (arrayCuentas[i].saldo > cuentaConMayorSaldo.saldo) {
      cuentaConMayorSaldo = arrayCuentas[i]
    }
  }
  return cuentaConMayorSaldo
}
console.log(mayorSaldo(arrayCuentas));