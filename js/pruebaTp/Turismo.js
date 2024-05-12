import Poisson from "../metodos/poisson.js";
import CalcularColectivo from "./CalcularColectivos.js";
import CalcularTuristas from "./CalcularTuristas.js";

let turistas = 0, totalTuristas = 0,dias = 0, souveniTotal=0; 
while (dias <59) {
    let cantidadColecValle =0 , cantidadColecChorromoro = 0,souvenirDia =0;
    turistas = Poisson(4186, turistas);
    totalTuristas += turistas;
    const {souvenirChorromoro, souvenirValleC,valleCalchaqui,chorromoro}  = CalcularTuristas(turistas); 
    souvenirDia = souvenirChorromoro + souvenirValleC; 
    souveniTotal +=souvenirDia; 
    console.log(`Día ${dias+1} : `);
    console.log(`- Cantidad de turistas ${turistas}`);
    console.log(`- Cantidad de turistas en los Valles Calchaqui   ${valleCalchaqui} `);
    cantidadColecValle = CalcularColectivo(valleCalchaqui); 
    console.log(`- Cantidad de colectivos destinados para los Valles Calchaqui  ${cantidadColecValle} `);
    console.log(`- Cantidad de turistas en Chorromoro  ${chorromoro} `);
    cantidadColecChorromoro = CalcularColectivo(chorromoro); 
    console.log(`- Cantidad de colectivos destinados para Chorromoro ${cantidadColecChorromoro} `);
    console.log(`- Cantidad de souvenir comprados por los turista en el dia ${souvenirDia}`);
    dias +=1; 
}
console.log(`Cantidad total turistas ${totalTuristas}`);
console.log(`Cantidad total de souvenir comprados por los turistas ${souveniTotal}`);
localStorage.clear();