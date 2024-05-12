import { metodoLehmen } from "../Generadores_pseudoaletorio/metodo_de_lehmer.js";

export default function Poisson(a, variable = 0) {
    let b = Math.exp(-a);
    let p = 1;
    let u = 0;
    //la variable posicion se usa para obtener el siguiente numero de la semilla de lehmen
    //en la posicion =0 se obtiene el primero, posicion =1 se obtiene la siguiente
    let posicion = 0;
    while (p > b) {
        u = metodoLehmen(58149, 63, posicion);
        variable += 1;
        p = p * parseFloat(u);
        posicion += 1;
    }
    posicion =0; 
    localStorage.removeItem("semillasLehmen"); 
    return variable;
}