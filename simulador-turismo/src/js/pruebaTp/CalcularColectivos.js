import Uniforme from "../metodos/uniforme.js";

export default function CalcularColectivo( asistentes){
    let i = 0, hayColectivo =0, contador =0; 
    while(i<asistentes){
        if(hayColectivo ===0){
            hayColectivo = Uniforme(48,60,i); 
            contador+=1; 
        }
        hayColectivo -=1; 
        i+=1; 
    }
    return contador; 
}