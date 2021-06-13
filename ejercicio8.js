/* Calculator.
    The user has to enter two numbers and the output will be the addition, subtraction, multiplication and division 
 */


'use strict'

var num1;
var num2;


do{
    num1=parseInt(prompt('Introduce numero 1', 0));
    num2=parseInt(prompt('Introduce numero 2', 0));

}while( isNaN(num1) || isNaN(num2) || num2==0) ;

//addition
console.log("La suma de "+num1+" + "+num2+ " es "+(num1+num2));
//subtraction
console.log("La resta de "+num1+" - "+num2+ " es "+(num1-num2));
//multiplication
console.log("La multiplicacion de "+num1+" * "+num2+ " es "+(num1*num2));
//divition
console.log("La division de "+num1+" / "+num2+ " es "+(num1/num2));