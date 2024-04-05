function metodoCongruenciaMixto(a, c, n0, m, repeticiones){
    let resultados = []; 
    let semillas= [n0]; 
    for(index =0 ; index < repeticiones; index ++){
        let n = 0; 
        n = ((a*semillas[index])+c) % m; 
        semillas.push(n); 
        let u = 0; 
        u = n/m; 
        resultados.push(u.toFixed(3)); 
    }
    return resultados; 
}

let resultados = metodoCongruenciaMixto(5,7,4,8,5); 

resultados.forEach((res,index)=>{
    console.log(`u[${index}]: ${res}`);
})