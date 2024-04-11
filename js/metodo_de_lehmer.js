import { parsearNro, restNro } from "../helpers/helps.js";

function metodoLehmen(n0,t,repeticiones){
    let semillas=[n0]; 
    let resultados =[]; 
    let k = t.toString().length; 
    for(let index =0 ; index < repeticiones; index ++){
        let resultado = semillas[index] * t; 
        const {first, second} = restNro(resultado,k); 
        let n = second -first; 
        semillas.push(n); 
        resultados.push(parsearNro(n)); 
    }
    return resultados; 
}
let resultados = metodoLehmen(58149,63,5);
console.log("metodo de Lehmer");
resultados.forEach((res,index)=>{
    console.log(`u[${index+1}]: ${res}`);
})