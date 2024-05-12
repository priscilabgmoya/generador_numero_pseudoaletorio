import { metodoLehmen } from "../Generadores_pseudoaletorio/metodo_de_lehmer.js";

export default function Normal(media, desvio, variable){
    let sum =0; 
    for (let index = 1; index < 12; index++) {
        let u =0; 
        u =parseFloat( metodoLehmen(35451, 73, (index-1)));
        sum+=u; 
    }
    localStorage.removeItem("semillasLehmen"); 
    return Math.round( variable = desvio *(sum -6) + media); 
}