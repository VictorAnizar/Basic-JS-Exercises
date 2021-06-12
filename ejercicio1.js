'use strict'

/* Input: 2 numbers 
  Output: which is less and higher and if both are equals  
  If the input are not numbers or are less than 0, ask again
*/

var num1;
var num2;


do{
    num1=parseInt(prompt('Introduce numero 1', 0));
    num2=parseInt(prompt('Introduce numero 2', 0));

}while( num1<0 || num2<0 || isNaN(num1) || isNaN(num2)) ;

//isNan --is Not a Number

if (num1>num2) {
    alert("El numero 1 es mayor");
}else if(num1<num2){
    alert("El numero 2 es mayor");
}else if(num1==num2){
    alert("Son iguales"); 
}else{
    alert("Introduce numero correctos");
}