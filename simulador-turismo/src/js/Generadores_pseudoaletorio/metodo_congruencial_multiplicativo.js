

export function metodoCongruenciaMultiplicativo(a, n0, m, posicion) {
    let presistencia = localStorage.getItem("semillasCmultiplictivo");
    let semillas = presistencia ? JSON.parse(presistencia) : [n0];
    let n = (a * semillas[posicion]) % m;
    semillas.push(n);
    let u = n / m;
    localStorage.setItem("semillasCmultiplictivo", JSON.stringify(semillas));
    return  u.toPrecision(4); 
}
/*
let resultados = metodoCongruenciaMultiplicativo(23, 151, 157, 20);
console.log("metodo de Congruencial Multiplicativo");
resultados.forEach((res, index) => {
    console.log(`u[${index + 1}]: ${res}`);
})*/