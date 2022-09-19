let calcular = (num1, num2, operacion) => {
    // let operacionPlus = operacion.ignoreCase;
    let solucion = 0;
    if (num1 == NaN || num2 == NaN) return "Ingrese un numero válido"
    else if (num1 == 0 || num2 == 0) return "No se puede dividir por 0"
    else if (!operacion == "suma" || !operacion == "resta" || !operacion == "division" || !operacion == "multiplicacion"){
        return "Ingrese una operacion válida"
    } 
    switch (operacion){
        case "suma":
            solucion = num1 + num2;
            break;
        case "resta":
            solucion = num1 - num2;
            break;
        case "division":
            solucion = num1/num2;
            break;
        case "multiplicacion":
            solucion = num1 * num2;
            break
        default:
            solucion == "Invalids"
    }
    return solucion;
}
let main = () => {
    let operacionSuma = calcular(2,null,"suma");
    console.log(operacionSuma);

    let operacionResta = calcular("a",3,"resta");
    console.log(operacionResta);

    let operacionMultiplicacion = calcular(5,2.3,"multiplicacion");
    console.log(operacionMultiplicacion);

    let operacionDivision = calcular(20,0,"division");
    console.log(operacionDivision);

    let operacionSinDatos = calcular();
    console.log(operacionSinDatos);

}

main()




