import { generarID } from "../../helpers/helps.js";
import Poisson from "../metodos/poisson.js";
import CalcularColectivo from "./CalcularColectivos.js";
import CalcularTuristas from "./CalcularTuristas.js";
export default function SimularTurista(cantidadDia, addInfo) {
    let turistas = 0, totalTuristas = 0, souveniTotal = 0, resultado=[], total ={};
    for (let dia = 0; dia < cantidadDia; dia++) {
        let cantidadColecValle = 0, cantidadColecChorromoro = 0, souvenirDia = 0;
        turistas = Poisson(4186, turistas);
        totalTuristas += turistas;
        const { souvenirChorromoro, souvenirValleC, valleCalchaqui, chorromoro } = CalcularTuristas(turistas);
        souvenirDia = souvenirChorromoro + souvenirValleC;
        souveniTotal += souvenirDia;
        cantidadColecValle = CalcularColectivo(valleCalchaqui);
        cantidadColecChorromoro = CalcularColectivo(chorromoro);

        let data = {
            id: generarID(),
            dia: dia+1,
            turistas: turistas,
            turistaValle: valleCalchaqui,
            colectivoValle: cantidadColecValle,
            turistaChorromoro: chorromoro,
            colectivoChorromoro: cantidadColecChorromoro,
            souvenirDia: souvenirDia
        }
       total = {
            totalTuristas: totalTuristas,
            souveniTotal: souveniTotal,
        }
        console.log(data);
        resultado.push(data); 
    }
    addInfo(resultado,total);
}
//localStorage.clear();