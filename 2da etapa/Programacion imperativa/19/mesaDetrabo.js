const edades = [33, 27, 34, 30, 34, 25];

for(let i = 0; i < edades.length; i++){
    for(let j = 0; j < edades.length; j++){
        if (edades[j] < edades[j + 1]){
            let asd = edades[j];
            edades[j] = edades[j + 1];
            edades[j + 1] = asd;
        }
    }
}
console.log(edades);