/* Show all the numbers that exist between two numbers */

'use strict'

var num1= parseInt(prompt("Introduce el numero 1",0));
var num2= parseInt(prompt("Introduce el numero 2",0));

if (num1<num2) {
    for (let i = num1; i <= num2; i++) {
        console.log(i);
    }
}else if (num1>num2) {
    for (let i = num1; i >= num2; i--) {
        console.log(i);
    }
}else{
    console.log("son iguales");
}
