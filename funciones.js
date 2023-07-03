//1
function parOimpar(numero){
    if ( numero % 2 === 0 ){
        console.log( numero + " es un numero par." )
    }
    else {
        console.log( numero + " es un numero impar.")
    }

}
parOimpar(3)

//2
function ejercicio2(a,b){ 
    if ( a > b) {
        console.log(a)
    } else if (a==b){
        console.log("son iguales")
    }else{
        console.log(b)
    }
}
ejercicio2(1,50)

//3
function ejercicio3(num){
    if(num % 5 === 0 ){
        console.log(num + " es multiplo de 5.")
    } else {
        console.log(num + " no es multiplo de 5.")
    }
}
ejercicio3(10)

//4
function ejercicio4(numero){
    for(let i= 0; i <= numero ; + i++){
        console.log(i);
    }
}
ejercicio4(10)

//5
function ejercicio5(palabra,num){
    for( let i=1; i <= num; i++){
        console.log(palabra)
    }
}
ejercicio5("perro",5)

//6
let arrayPrueba=[1,2,3,4,5,6]
function ejercicio6(array){
    for (let i = 0; i < array.length; i++) {
        console.log(array[i])
        
    }
}
ejercicio6(arrayPrueba)

//7
let arrayNumero=[1,2,3,4,5,6,7,8,9,10]
function ejercicio7(array){
    for(let i=0; i < array.length; i++){
        if (i !== 4) {
            console.log(array[i]);
        }
    }
}
ejercicio7(arrayNumero)

//8
let arrayUltimo=[1,2,3,4,5,6,7,8]

function ejercicio8(array,numero){
    for(let i=0; i < array.length; i++){
        let resultado = array[i] * numero;
        console.log(resultado);
    }

}
ejercicio8(arrayUltimo,10)