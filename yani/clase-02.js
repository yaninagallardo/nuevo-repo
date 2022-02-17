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

// const minAge = 21;
// const maxAge = 35;

// let userAge = prompt("Ingrese su edad");

// if ( (userAge >= minAge) && (userAge <= maxAge) ){
//     console.log("Solo entra a la cafeteria");
// } else if ( userAge > maxAge){
//     console.log("Entra a zona vip");
// } else {
//     console.log("No puede entrar");
// }


let userName = prompt("Ingrese usuario");
let password = prompt("Ingrese contraseña");

const user = "admin";
const pass = "admin";

if ( (userName === user) ) {
    if( password === pass ) {
        console.log("Entra");
    } else {
        console.log("contraseña incorrecta");
    }
} else {
    console.log("el usuario no existe");
}

if ( (userName === user) && (password === pass) ) {
    console.log("entro");
} else{
    console.log("el usuario o contraseña es incorrecto");
}

// Sigue con el codigo