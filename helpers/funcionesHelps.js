function calcularMCD(a, b) {
    return b === 0 ? a :  calcularMCD(b, a % b); 
}

// Función para verificar si dos números son primos relativos
export function sonPrimosRelativos(a, b) {
    return calcularMCD(a, b) === 1;
}
export function generarNumero_a() {
    let numero = Math.round(Math.random() * 1000); // Multiplicamos por 1000 para obtener un número grande
    if (numero % 2 === 0) { // Si es par
        numero++; // Incrementamos en uno para hacerlo impar
    }
    return numero% 20 ===1 ? numero : generarNumero_a();
}
