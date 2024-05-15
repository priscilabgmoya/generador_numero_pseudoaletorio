import { generarNumero_a, generarNumero_c, generarNumero_m, sonPrimosRelativos } from "../../helpers/funcionesHelps.js";


export function metodoCongruenciaMixto(n0,posicion) {
    let c = generarNumero_c(); 
    let m = generarNumero_m(); 
    if(sonPrimosRelativos(c,m)){
        let presistencia = localStorage.getItem("semillasCmixto");
        let semillas = presistencia ? JSON.parse(presistencia) : [n0];
        let n = (( generarNumero_a() * semillas[posicion]) + c) % m;
        semillas.push(n);
        let u = n / m;
        localStorage.setItem("semillasCmixto", JSON.stringify(semillas));
        return u.toPrecision(4); 
    }else{
        return metodoCongruenciaMixto(n0,posicion); 
    }
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