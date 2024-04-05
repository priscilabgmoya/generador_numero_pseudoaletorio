export function truncar(numero){
    let cadenaNumero = numero.toString();
    let indexComa = cadenaNumero.indexOf('.');
    let tresDecimales = cadenaNumero.substring(0, indexComa + 4);
   return  parseFloat(tresDecimales); 
}