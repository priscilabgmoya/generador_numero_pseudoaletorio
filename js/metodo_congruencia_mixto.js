import { truncar } from "../helpers/helps.js";

function metodoCongruenciaMixto(a, c, n0, m, repeticiones){
    let resultados = []; 
    let semillas= [n0]; 
    for(let index =0 ; index < repeticiones; index ++){
        let n =  ((a*semillas[index])+c) % m; 
        semillas.push(n); 
        let u =  n/m; 
        resultados.push(truncar(u)); 
    }
    return resultados; 
}

let resultados = metodoCongruenciaMixto(1739,893,2170,3135,5); 
console.log("metodo de Congruencial Mixto");
resultados.forEach((res,index)=>{
    console.log(`u[${index+1}]: ${res}`);
})