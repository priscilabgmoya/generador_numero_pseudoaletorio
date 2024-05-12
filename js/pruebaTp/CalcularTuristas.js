import { metodoCongruenciaMixto } from "../Generadores_pseudoaletorio/metodo_congruencia_mixto.js";
import Normal from "../metodos/normal.js";


export default function CalcularTuristas(turistas) {
    let valleCalchaqui = 0, souvenirValleC = 0, chorromoro = 0,u = 0, posicion =0 ,
        souvenirChorromoro = 0, souvenir = 0, souvenirComprado = 0, i =0;
    while (i < turistas) {
        u = parseFloat(metodoCongruenciaMixto(2170, posicion));
        if (u <= 0.39) {
            posicion += 1;
            let probabilidadComprar = parseFloat(metodoCongruenciaMixto(2170, posicion));
            if (probabilidadComprar <= 0.30) {
                souvenirComprado = Normal(4, 2, souvenirComprado);
                souvenir += souvenirComprado;
            }
            u = 0;
        } else if (u <= 0.72) {
            posicion += 1;
            let probabilidadComprar = parseFloat(metodoCongruenciaMixto(2170, posicion));
            if (probabilidadComprar <= 0.50) {
                souvenirComprado = Normal(4, 2, souvenirComprado);
                souvenir += souvenirComprado;
            }
            u = 0;
        } else {
            posicion += 1;
            let probabilidadComprar = parseFloat(metodoCongruenciaMixto(2170, posicion));
            if (probabilidadComprar <= 0.10) {
                souvenirComprado = Normal(4, 2, souvenirComprado);
                souvenir += souvenirComprado;
            }
            u = 0;
        }
        posicion += 1;
        let destino = parseFloat(metodoCongruenciaMixto(2170, posicion));
        if (destino <= 0.55) {
            //elije valle calchaqui
            souvenirValleC += souvenirComprado;
            valleCalchaqui += 1;
        } else {
            //elije valle chorromoro
            souvenirChorromoro += souvenirComprado;
            chorromoro += 1;
        }
        i += 1;
    }
    return{souvenirChorromoro, souvenirValleC, souvenir,valleCalchaqui,chorromoro}
}
