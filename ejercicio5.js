/*
Show all the divisors of a number
*/

'use strict'

var num= parseInt(prompt("Introduce el numero",0));


for (let i = 0; i <= num; i++) {
    if (num%i==0) {
        console.log(i);
    }
    
}