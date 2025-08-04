/*

1. Создать переменную “item_1”

2. Присвоить переменной item_1 цифру 5.

3. Вывести в консоль item_1.

4. Создать переменную “item_2”

5. Присвоить переменной item_2 цифру 3.

6. Вывести в консоль item_2.

7. Создать переменную “item_3”

8. Присвоить переменной item_3 сложение item_1 и item_2.

9. Вывести в консоль item_3.

10. Создать переменную “item_4”

11. Присвоить переменной item_4 строку "Hello World"

12. Вывести в консоль item_4.

13. Вывести в консоль сложение item_3 и item_4.

14. Вывести в консоль умножение item_3 и item_4.

15. Создать переменную “item_5”

16. Присвоить переменной item_5 переменную item_3

17. Создать переменную item_6.

18. Создать переменную item_6_type

19. Присвоить переменной item_6 значение 15

20. Присвоить переменной item_6_type тип переменной item_6

21. Вывести в консоль тип данных item_6 в виде ——  “item_6 == ”  item_6,  “item_6_type == ”  item_6_type ——  

22. Создать переменную item_7 и в ней преобразовать item_6 в String.

23. Создать переменную item_7_type

24. Присвоить переменной item_7_type тип переменной item_7

25. Вывести в консоль тип данных item_7 в виде ——  “item_7 == ”  item_7,  “item_7_type == ”  item_7_type ——  

*/

// steps 1-2:
const item_1 = 5 
console.log(item_1)

// steps 4-6
const item_2 = 3
console.log(item_2)

// steps 7-9
const item_3 = item_1 + item_2
console.log(item_3)

// steps 10-12
const item_4 = "Hello World"
console.log(item_4)

//13
console.log (item_3 + item_4)

//14
console.log (item_3 * item_4)

//15-16
const item_5 = item_3;
//console.log(item_5)

//17-20
const item_6 = 15;
const item_6_type = typeof item_6;

//21
console.log("item_6 == ", item_6, "item_6_type == ", item_6_type);

//22-24
const item_7 = String(item_6);
const item_7_type = typeof item_7;

//step 25
console.log("item_7 == ", item_7, "item_7_type == ", item_7_type);

// ==========  Unit Tests ==========

// function assertEqual(actual, expected, description) {
//   if (actual === expected) {
//     console.log(` ${description}`);
//   } else {
//     console.error(`${description}\n   Expected: ${expected}, but got: ${actual}`);
//   }
// }

// // Run assertions
// assertEqual(item_1, 5, "item_1 should be 5");
// assertEqual(item_2, 3, "item_2 should be 3");
// assertEqual(item_3, 8, "item_3 should be item_1 + item_2");
// assertEqual(item_4, "Hello World", "item_4 should be 'Hello World'");
// assertEqual(item_5, item_3, "item_5 should be equal to item_3");
// assertEqual(item_6, 15, "item_6 should be 15");
// assertEqual(item_6_type, "number", "item_6_type should be 'number'");
// assertEqual(item_7, "15", "item_7 should be string version of item_6");
// assertEqual(item_7_type, "string", "item_7_type should be 'string'");
