'use strict'

/*
Using a loop, find the media and sum of the numbers. Until the user enter a negative number
 */

var sum=0;
var count=0;
do{
    var number=parseInt(prompt("Introduce tu numero y presiona enter",0));
    if (isNaN(number)) {
        number=0;
    } else {
        count++;
        sum=sum+number;
    }

}while(number>=0);

console.log("La suma es:"+sum);

console.log("La media es:"+(sum/count));

console.log(count);