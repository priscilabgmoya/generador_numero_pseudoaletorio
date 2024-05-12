import { metodoCongruenciaMultiplicativo } from "../Generadores_pseudoaletorio/metodo_congruencial_multiplicativo.js";

export default function Uniforme(a,b, posicion){
    let u = metodoCongruenciaMultiplicativo(23, 151, 157, posicion);
    return Math.trunc(a + ((b-a) *u));  
}