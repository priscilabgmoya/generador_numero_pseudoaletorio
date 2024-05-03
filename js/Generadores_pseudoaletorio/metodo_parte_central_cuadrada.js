import { getCentro, parsearNro } from "../../helpers/helps.js";

function metodoParteCentralCuadrada(m,n,repeticiones){
   let resultados = []
    let semillas= [m]; 
    for (let index = 0; index < repeticiones; index++) {
        const element = semillas[index];
        let x =element * element ; 
        let stringNumber = x.toString(); 
        if((stringNumber.length - n) % 2 == 0 ){
           const {nro} =  getCentro(stringNumber); 
           semillas.push(nro); 
           resultados.push(parsearNro(nro)); 
        }else{
            stringNumber = (x *10).toString(); 
            const {nro} =  getCentro(stringNumber); 
            semillas.push(nro); 
            resultados.push(parsearNro(nro)); 
        }
    }
    return resultados; 
}

let resultados = metodoParteCentralCuadrada(7541,3,5)
console.log("metodo de Parte Central Cuadrada");
resultados.forEach((res,index)=>{
    console.log(`u[${index+1}]: ${res}`);
})