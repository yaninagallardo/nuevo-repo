"use strict"

/***
 * Cafeteria con zona vip
 * 
 * 21 y 35 años imprime solo entra a
 * 
 *  mas de 35 a los entra vip
 * 
 * el resto no entra 
 * 
 */

const minAge = 21;
const maxAge = 35;

let userAge = prompt("Ingrese su edad");

if ( (userAge >= minAge) && (userAge <= maxAge) ){
    console.log("Solo entra a la cafeteria");
} else if ( userAge > maxAge){
    console.log("Entra a zona vip");
} else {
    console.log("No puede entrar");
}


// Sigue con el codigo