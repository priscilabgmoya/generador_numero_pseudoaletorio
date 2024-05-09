import { generarNumero_a, sonPrimosRelativos } from "../../helpers/funcionesHelps.js";
import { metodoCongruenciaMixto } from "../Generadores_pseudoaletorio/metodo_congruencia_mixto.js";

function PruebaPromedio(muestra){
    const m = Math.pow(2, 32); 
    let a = generarNumero_a(); 
    let c = 893;
    let suma =0; 
    if(sonPrimosRelativos(c,m)){
        const {resultados} = metodoCongruenciaMixto(a, c ,2170 ,m,muestra); 
        console.log(resultados);
        resultados.forEach(u=>{
            suma += parseFloat(u); 
        })
        let promedio = suma/ muestra; 
        let z = ((promedio - (1/2)) * Math.sqrt(muestra)) / Math.sqrt(1/12); 
        console.log(Math.abs(z));
        return
    }else{
        console.log("El C elegido no es primo relativo...."); 
        return PruebaPromedio(muestra); 
    }
}
console.log("prueba promedio");
PruebaPromedio(5); 