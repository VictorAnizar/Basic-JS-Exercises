/*
    Determine if the number is odd or even. If the user doesn´t enter a number, ask again for a number
*/

'use strict'

var num;

do{
    num=parseInt(prompt('Introduce numero', 0));

}while( isNaN(num)) ;

if (num%2==0) {
    console.log("El numero es par");
} else {
    console.log("El numero es impar");

}