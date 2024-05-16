export function truncar(numero){
    let cadenaNumero = numero.toString();
    let indexComa = cadenaNumero.indexOf('.');
    let tresDecimales = cadenaNumero.substring(0, indexComa + 4);
    return tresDecimales; 
}
export function getCentro(string){
    let newArray = Array.from(string); 
    const middle = Math.round(newArray.length / 2)-1; 
    return {nro: Number(`${newArray[middle-1]}${newArray[middle]}${newArray[middle+1]}`)}
}
export function parsearNro(nro){
    return (`0.${nro}`); 
}

export function restNro(nro, k){
    let newArray = Array.from(nro.toString()); 
    let first = parseInt(newArray.slice(0,k).join("")); 
    let second = parseInt(newArray.slice(k, newArray.length).join(""));
   return {first: first, second: second}; 
}

export function generarID() {
    return '_' + Math.random().toString(36).substr(2, 9);
}

export default function generarDias() {
    let arrayDias = [];

// Cantidad total de días
const cantidadDias = 59;

// Generar objetos para cada día
for (let i = 1; i <= cantidadDias; i++) {
  let dia = {
    id: generarID(),
    numeroDia: i,
    opcion: "Cantidad de Días: " + i
  };
  arrayDias.push(dia);
}
return{arrayDias}; 
}