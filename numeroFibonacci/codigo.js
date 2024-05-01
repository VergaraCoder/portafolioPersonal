/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */

let listado=[];
for(i=1;i<=100;i++){
    listado.push(i);
}


for(multiplo of listado){
    
    if(multiplo % 3==0){
        if(multiplo % 5==0){
            console.log("fizz buzz");
        }
        else{
            console.log("fizz");
        }
    }
    else if(multiplo%5 ==0){
        if(multiplo % 3==0){
            console.log("fizz buzz");
        }
        else{
            console.log("buzz");
        }
    }
    else{
        console.log(multiplo);
    }
}

console.clear();
// ____________________________________________

// exercise 2

/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */


const anagrama=(palabra1,palabra2)=>{
    let newLetter1="";
    let newLetter2="";

    let conteo=palabra1.length;
    for(x of palabra1){
        devolver=palabra1.substring(conteo,conteo-1);
        conteo--;
        newLetter1+=devolver;
    }
    
    let conteo2=palabra2.length;
    for(x of palabra2){
        devolver=palabra2.substring(conteo2,conteo2-1);
        conteo2--;
        newLetter2+=devolver;
    }
    
    if(newLetter1==newLetter2){
        console.log("Son anagramas");
    }
    else{
        console.log("No son anagramas");
    }
}


anagrama("python","javascript");

console.clear();

// ____________________________________________


/*
 * Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 */



let primo=97;

let verificacion=0;
for(i=1; i<=primo;i++){
    if(primo%i==0){
        verificacion++;
    }
}

if(verificacion>2){
    console.log("EL numero no es primo");
}
else{
    console.log("EL numero si es primo");
}

// ____________________________________________
