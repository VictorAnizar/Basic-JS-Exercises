/* Show all the odd numbers between two numbers */

'use strict'

var num1= parseInt(prompt("Introduce el numero 1",0));
var num2= parseInt(prompt("Introduce el numero 2",0));

if (num1<num2) {
    for (let i = num1; i <= num2; i++) {
        if (i%2==0) {
            console.log(i);
        } 
    }
}else if (num1>num2) {
    for (let i = num1; i >= num2; i--) {
        if (i%2==0) {
            console.log(i);
        } 
    }
}else{
    console.log("son iguales");
}