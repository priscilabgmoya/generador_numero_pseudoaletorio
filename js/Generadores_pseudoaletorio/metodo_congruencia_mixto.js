import { truncar } from "../../helpers/helps.js";

export function metodoCongruenciaMixto(a, c, n0, m, repeticiones) {
    let resultados = [];
    let semillas = [n0];
    for (let index = 0; index < repeticiones; index++) {
        let n = ((a * semillas[index]) + c) % m;
        semillas.push(n);
        let u = n / m;
        if ( u >= 0 && u <= 1) {
                resultados.push(truncar(u));   
        }else {
            console.log("nro generado fuera del rango aceptado");
            index--;
        }

    }
    return { resultados };
}
/**
 * primer error encontrado, cuando se utiliza un m grande se tiene que validar que el u generado se encuentre entre 0 y 1
 * y hacer que el recorrido cuando encuentre un u fuera del rango vuelva un paso atras
 */
/*
const {resultados} = metodoCongruenciaMixto(1739,893,2170,3135,20);
console.log("metodo de Congruencial Mixto");
resultados.forEach((res,index)=>{
    console.log(`u[${index+1}]: ${res}`);
})*/
// investigando , la elecccion del m es el numero que acepta el lenguaje donde se lo esta programando en caso de js es
// 2^53 -1 que es Number.MAX_SAFE_INTEGER;
// c es cualquier numero primo relativo de m
// a es un numero impar no diviisble ni en 3 y ni en 5 para verificar en este caso si usamos calc. decimal a mod 20 = 1???
// que es lo mismo a = 10^k -1 con k>1 como saco el k ? 