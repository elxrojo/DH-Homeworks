// let empleado = {
//     nombre: "Sebastian",
//     empresa: "Globant",
//     sueldos: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
//     sueldoMayor: function (){
//         let sumaSueldo = 0
//         for(i = 0; i < this.sueldos.length; i++){
//             sumaSueldo += this.sueldos[i]
//         }
//         if (sumaSueldo > 80.000){
//             return `El mayor sueldo de ${this.nombre} en ${this.empresa} es ${sumaSueldo} por lo tanto pagará impuesto a las ganancias`
//         } else{
//             return `El mayor sueldo de ${this.nombre} en ${this.empresa} es ${sumaSueldo} por lo tanto NO pagará impuesto a las ganancias`;}
//     }
// }
// console.log(empleado.sueldoMayor());


let empleado = {
    nombre:'Esteban',
    empresa:'ApruebemeProfe',
    sueldos:[60000,52000,63000,49000,50000,61000,70000,78000,59000,51000,49000,90000],
    sueldoMayor: function(){
        let SueldoTotal = 0
        for(i = 0; i < this.sueldos.length; i++){
            SueldoTotal += this.sueldos[i]
        }
        if (SueldoTotal > 80.000){
            return "El mayor sueldo de " + this.nombre + " en " + this.empresa + " es " + SueldoTotal +" por lo tanto pagará impuesto a las ganancias"
        } else{
            return "El mayor sueldo de " + this.nombre + " en " + this.empresa + " es " + SueldoTotal +" por lo tanto NO pagará impuesto a las ganancias"
    }
}
}
console.log(empleado.sueldoMayor());



// let empleado = {
//     nombre: "Sebastian",
//     empresa: "Globant",
//     sueldos: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
//     sueldoMayor: function (){
//         let sumaSueldo = 0
//         let mensaje;
//         for (i = 0; i < this.sueldos.length; i++){
//             sumaSueldo += this.sueldos[i]
//         }
//         if (sumaSueldo > 80.000){
//             mensaje `El mayor sueldo de ${this.nombre} en ${this.empresa} es ${sumaSueldo} por lo tanto pagará impuesto a las ganancias`
//         } else{
//             mensaje = `El mayor sueldo de ${this.nombre} en ${this.empresa} es ${sumaSueldo} por lo tanto NO pagará impuesto a las ganancias`;
//         }
//         return mensaje;
//     }
// }

// console.log(empleado.sueldoMayor());