export function truncar(numero){
    let cadenaNumero = numero.toString();
    let indexComa = cadenaNumero.indexOf('.');
    let tresDecimales = cadenaNumero.substring(0, indexComa + 4);
   return  parseFloat(tresDecimales); 
}
export function getCentro(string){
    let newArray = Array.from(string); 
    const middle = Math.round(newArray.length / 2)-1; 
    return {nro: Number(`${newArray[middle-1]}${newArray[middle]}${newArray[middle+1]}`)}
}
export function parsearNro(nro){
    return (`0.${nro}`); 
}