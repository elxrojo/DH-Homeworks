let paises = [
{
    nombre: "Argentina",
    continente: "Sudamerica",
    poblacion: 40000000
},
{
    nombre: "Colombia",
    continente: "Sudamerica",
    poblacion: 50372000
},

{
    nombre: "Brasil",
    continente: "Sudamerica",
    poblacion: 300000000
},
{
    nombre: "Venezuela",
    continente: "Sudamerica",
    poblacion: 25000000
},
{
    nombre: "Chile",
    continente: "Sudamerica",
    poblacion: 10000000
}
];

function fpais(pais, continente,poblacion) {
    let nuevoArray = [];
    for (let i = 0; i < pais.length; i++) {
        if (continente == pais[i].continente && pais[i].poblacion >= poblacion) {
            nuevoArray.push(pais[i]);
        }
    } 
    return nuevoArray;
} 
console.log(fpais(paises, "Sudamerica",1000));
