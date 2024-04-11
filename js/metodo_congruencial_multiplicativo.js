import { truncar } from "../helpers/helps.js";

function metodoCongruenciaMultiplicativo(a, n0, m, repeticiones){
    let resultados = []; 
    let semillas= [n0]; 
    for(let index =0 ; index < repeticiones; index ++){
        let n = (a*semillas[index]) % m; 
        semillas.push(n); 
        let u = n/m; 
        resultados.push(truncar(u)); 
    }
    return  resultados; 
}

let resultados = metodoCongruenciaMultiplicativo(23,151,157,5); 
console.log("metodo de Congruencial Multiplicativo");
resultados.forEach((res,index)=>{
    console.log(`u[${index+1}]: ${res}`);
})