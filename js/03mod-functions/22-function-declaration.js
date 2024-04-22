/*
Кратко:
 функции - используются для повторного использования кода
 название формируется по правилам формирования переменных
 return возвращает из функции значения
 после выполнения return дальнейший код функции не выполняется
*/

/*
 Переводы слов с англ.:
 return - вернуть
 call - вызов
 arguments - аргументы
 expression - выражение
 callback functions - функции обратного вызова
 recursion - рекурсия
 closures - замыкания
 arrow function - стрелочная функция
 anonymous function - анонимная функция
 scope - область видимости
*/

// function hello(name = "гость", age = 25) {
//   console.log(`Привет, ${name} ${age}`);
//   return age;
// }

// hello("Василий", 45); //45
// hello("John"); //25
// hello(); //25

// Напишите функцию sum(), которая будет складывать два числа.
// Например, вызов sum(2,6) должен вернуть 8
// console.log(sum(2, 6)); // 8
// console.log(sum(2, 10)); // 12
// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(2, 6)); // 8
// console.log(sum(2, 10)); // 12


// Напишите функцию getRPC() для игры в "Камень-ножницы-бумага".
// При каждом вызове функция случайно возвращает один из символов
// 👊 - камень
// ✌ - ножницы
// ✋ - бумага
// Например:
// console.log( getRPC() ); //👊
// console.log( getRPC() ); //✋
// const symbols = ['👊', '✌️', '✋'];
// function getRPC() {
//   const index = Math.floor(Math.random()  *  symbols.length);
//   return symbols[index];
// }
// console.log(getRPC()); // Выведет один из символов случайно


// Напишите функцию reverse(), которая будет принимать строку, а
// возвращать перевернутую.
// Например:
// console.log( reverse('JavaScript') ); //'tpircSavaJ' 
// function reverse(str) {
//   //метод reverse() для переворота строки
//   return str.split('').reverse().join('');
// }
// console.log(reverse('JavaScript')); // Выведет: 'tpircSavaJ'


// 🟡 Напишите функцию getNumberOfCoins(sum), которая принимает некоторую
// денежную сумму, а возвращает монеты, из которых эта сумма может состоять
// Количество монет должно быть минимально. Монеты могут быть 10, 5, 2 и 1 рубль
// Например:
// console.log( getNumberOfCoins(23) );  //'10,10,2,1'



// Напишите функцию fizzbuzz(n), она принимает положительное целое число.
// Функция должна вывести числа от 0 до n, но 
// - если число кратно 3, то выводить 'fizz'
// - если число кратно 5, то выводить 'buzz'
// - если одновременно кратно 3 и 5, то  'fizzbuzz'
// function fizzbuzz(n) {
//   for (let i = 0; i <= n; i++) {
//     if (i % 15 === 0) {
//       console.log('fizzbuzz');
//     } 
//     else if (i % 3 === 0) { 
//       console.log('fizz');
//     } 
//     else if (i % 5 === 0) { 
//       console.log('buzz');
//     } 
//     else {
//       console.log(i); 
//     }
//   }
// }
// fizzbuzz(10); 



// Напишите функцию getNumberOfVowels(str) - она должна возвращать количество
// гласных находящихся в строке str (договоримся считать русские гласные)
// function getNumberOfVowels(str) {
//   const vowels = ['а', 'у', 'е', 'ы', 'о', 'э', 'ё', 'и', 'ю', 'я'];
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (vowels.includes(str[i])) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(getNumberOfVowels("Привет")); 



// Напишите функцию isPrimeNumber(n) - она принимает положительно целое, и 
// возвращает true, если число является простым. Иначе функция возвращает false



// Напишите функцию getPassword(n), которая генерирует пароль.
// Длина пароля должны быть n - символов. Нужно использовать 
// коды символов от 36 до 126



// Напишите функцию iterator(fn, n = 1), которая принимает другую
// функцию и количество повторений n, а затем вызывает fn - n раз
// Например:
// function myfunction(){ console.log('Ура') }
// console.log( iterator( myfunction, 5 ) )
// 'Ура'
// 'Ура'
// 'Ура'
// 'Ура'
// 'Ура'
// function iterator(fn, n) {
//   for (let i = 0; i < n; i++) {
//     fn();
//   }
// }
// function myfunction() {
//   console.log('Ура');
// }

// console.log(iterator(myfunction, 5)); 



// Дана строка, состоящая из букв A-Z:
// "AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB"
// Нужно написать функцию RLE, которая на выходе даст строку вида:
// "A4B3C2XYZD4E3F3A6B28" 
// Пояснение:
// 1. если символ встречается 1 раз, он остается без изменений
// 2. если символ повторяется более 1 раза, к нему добавляется количество повторений
 

