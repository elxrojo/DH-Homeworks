// function loopDePares(numero){
//     for (let i = 0; i <= 100; i++){
//         if((i + numero) % 2 == 0){
//         console.log(`El número ${numero + i} es par`)
//         }
//     }
// }

// loopDePares(5);

let matriz = [ 
    [ 4, 9, 2 ],
    [ 3, 5, 7 ],
    [ 8, 1, 6 ]
];

function multiplicarColumna(mtrz) {
    for (let i = 0; i < mtrz.length; i++) {

        let bolsillo = 1;

        for (let j = 0; j < mtrz[i].length; j++) {
            bolsillo *= mtrz[j][i]
        }

        if (bolsillo % 2 ===0) {
            console.log("El resultado par es: " + bolsillo);
        }
        
    }
}
multiplicarColumna(matriz);