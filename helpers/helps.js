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