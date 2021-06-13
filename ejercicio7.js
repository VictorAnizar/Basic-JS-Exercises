/* Multiplication table of a number 
 */

'use strict'

var num;

do{
    num=parseInt(prompt('Introduce numero', 0));

}while( isNaN(num)) ;


for (let i = 0; i <= 10; i++) {
    document.write(i+' * '+num+' = '+(i*num)+'<br>');
}