let alicia = [ 10, 50, 15 ]
let bob = [ 90, 10, 25]

function encontrarGanador(participante1, participante2){
    let puntosParticipante1 = 0
    let puntosParticipante2 = 0

    for(let i = 0; i < 3; i++){
        if (participante1[i] < participante2[i]){
            puntosParticipante1 = puntosParticipante1 + 1;
        } else if (participante2[i] < participante1[i]){
            puntosParticipante2 = puntosParticipante2 + 1;
        }
    }

    if (puntosParticipante1 > puntosParticipante2){
        return "Alicia"; // return puntosParticipantes1 (seria lo ideal, pero devuelve el valor del array y no el nombre)
    } else if (puntosParticipante1 < puntosParticipante2){
        return "Bob"; // return puntosParticipantes1 (seria lo ideal, pero devuelve el valor del array y no el nombre)
    }
}

let Concurso = [
    {
        etapas: ss,
        ganador: encontrarGanador(alicia, bob),
        encontrarUnGanador: function (){
        
        }
    }
]


console.log('El ganador es: ' + encontrarGanador(alicia, bob));