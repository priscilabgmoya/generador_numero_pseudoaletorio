import { truncar } from "../helpers/helps.js";

function metodoCongruenciaMultiplicativo(a, n0, m, repeticiones){
    let resultados = []; 
    let semillas= [n0]; 
    for(let index =0 ; index < repeticiones; index ++){
        let n = 0; 
        n = (a*semillas[index]) % m; 
        semillas.push(n); 
        let u = 0; 
        u = n/m; 
        resultados.push(truncar(u)); 
    }
    return  resultados; 
}

let resultados = metodoCongruenciaMultiplicativo(5631,1317,547,8); 

resultados.forEach((res,index)=>{
    console.log(`u[${index+1}]: ${res}`);
})