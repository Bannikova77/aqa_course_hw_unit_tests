/*

Напишите программу, которая принимает целое положительное число n (одно любое число от 1 до 9), и выводит сумму равную 
n + nn + nnn, где n не перемножаются, а конкатенируются

*/

const n = 5;

const strn = String(n);

const nn = strn + strn;
const nnn = strn + strn + strn;

const result = Number(strn) + Number(nn) + Number(nnn);

console.log(`${n} + ${nn} + ${nnn} = ${result}`);