//funcion normal
function sumar(a:number,b:number):number{
    return a+b
}

//const resultado=sumar(3,5)
//console.log(resultado)

//funcion flecha
const sumaFlecha=(a:number,b:number):number =>{
    return a+b
}

//console.log(resultado)

function multiplicar(numero1:number, numero2?:number,base:number=2):number{
    return numero1*base;
}

const resultado2=multiplicar(5,0,10)
//const resultado2=multiplicar(5,10)
console.log(resultado2)

// funcion anonima
const funcSumar=function(n1:number,n2:number):number{
    return n1+n2;
}
console.log(funcSumar(4,9))

//funcion con parametros
function calcular(n1:number,n2:number,n3?:number):number{
    if(n3)
        return n1+n2+n3;
    else
        return n1+n2;
}
console.log(calcular(3,2,5))
console.log(calcular(3,2))

/// parametros Rest en funciones
function calcular2(...valores:number[]){
    let suma = 0;
    for(let x=0; x<valores.length; x++)
        suma+=valores[x];
    return suma;
}
console.log(calcular2(10,2,3,4))
console.log(calcular2(1,2))