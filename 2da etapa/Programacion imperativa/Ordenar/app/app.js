
function diezSiguientes(numero){

    for(let contador = 1; contador <= 10; contador++){
        numero = numero + 1;
        console.log(numero);
    }
    return ' ';
}
console.log(diezSiguientes(20))

//separador ---------------------------------------------------------------

function deTresEnTres(){
    for(let contador = 5 ; contador <= 20; contador = contador + 3){
        console.log(contador);
    }
}
console.log(deTresEnTres())


//separador ---------------------------------------------------------------

function contadorHastaCien(){
    let sumatoria = 0
    for(let contador = 0 ; contador <= 100; contador++){
        sumatoria = sumatoria + contador;
    }
    console.log(sumatoria);
}
console.log(contadorHastaCien())


//separador ---------------------------------------------------------------

function contadorFactorial(numeroLimite){
    let resultado = 1
    for(let contador = 1 ; contador <= numeroLimite; contador++){
        resultado = resultado * contador;
    }
    console.log(resultado);
}
console.log(contadorFactorial(8))    


//separador ---------------------------------------------------------------


function secuenciaFibonacci(numeroLimite){
    let resultado1 = 0
    let resultado2 = 0

    for(let contador = 1 ; contador <= numeroLimite; contador++){
        resultado1 = resultado1 + contador++
        resultado2 = resultado2 + resultado1
    }
    console.log(resultado2);
}
console.log(secuenciaFibonacci(10))    