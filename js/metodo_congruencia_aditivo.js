import { truncar } from "../helpers/helps.js";

function metodoCongruenciaAditivo(semillasInicial, m , k, repeticiones){
    let resultados = []; 
    let semillas =[...semillasInicial] ; 
    let posicion = 0; 
    for(let index =0 ; index <= k; index ++){
            posicion = Math.abs(index-k); 
            let n =  (semillas[index]+semillasInicial[posicion] ) % m; 
            semillas.splice(index+1,0, n); 
            let u =  n/m; 
            resultados.push(truncar(u)); 
    }
    for(let index =0 ; index < Math.abs(repeticiones-k-1) ; index ++){
        posicion = posicion + 1; 
        let n =  (semillas[semillasInicial.length+index]+semillas[posicion] ) % m; 
        semillas.splice(semillasInicial.length+index,0, n); 
         let u =  n/m; 
        resultados.push(truncar(u)); 
    }
    return resultados; 
}
let semillas = [567,561]; 
let k =  semillas.length-1; 
let resultados = metodoCongruenciaAditivo(semillas, 783, k,5); 

resultados.forEach((res,index)=>{
    console.log(`u[${index+1}]: ${res}`);
})