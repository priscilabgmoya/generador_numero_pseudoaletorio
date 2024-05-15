import { parsearNro, restNro } from "../../helpers/helps.js";

export function metodoLehmen(n0, t, posicion) {
    let presistencia = localStorage.getItem("semillasLehmen");
    let semillas = presistencia ? JSON.parse(presistencia) : [n0];
    let k = t.toString().length;
    let resultado = semillas[posicion] * t;
    const { first, second } = restNro(resultado, k);
    let n = second - first;
    semillas.push(n);
    localStorage.setItem("semillasLehmen", JSON.stringify(semillas));
    return parsearNro(n);
}