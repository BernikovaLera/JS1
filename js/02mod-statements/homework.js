// Задание 1
/* Напишите оператор if, такой, чтобы в качестве
выражения в скобках у него были значения true, false.
Например, if( true ) или if( false ). Посмотрите как
работает этот оператор, поместив какую-нибудь команду
после круглых скобок (Например, console.log(1)). 
Примечание: это задание очень простое. 
Если вы читая его, поняли суть, не выполняйте его 🙂
*/

// Задание 2
/* 
Создайте переменные m и n. В m поместите произвольное
числовое значение. Напишите оператор ветвления if так,
чтобы если m было больше 50, то в переменную n помещалось
слово «большое», иначе — слово «маленькое».
*/
console.log('Задание 2');
let m = 60;
let n;
if (m > 50) {
    n = 'большое';
} else {
    n = 'маленькое';
}
console.log(n); 

// Задание 3
/* Определите сколько раз выполнится цикл while? 
Примечание: это можно сделать прочитав скрипт
или запустив его консоли браузера.*/
console.log('Задание 3');
let i = 2;
while( i < 9 ){
    console.log( i++ ); // Цикл выполнится 7 раз
}

// Задание 4
/* 
Напишите скрипт, который используя оператор while
выведет все числа от 45 до 67.
*/
console.log('Задание 4');
let num1 = 45;
while (num1 <= 67) {
    console.log(num1);
    num1++;
}

// Задание 5
/*
Напишите скрипт, который используя оператор while
выведет все числа от 45 до 670, кратные 10.
*/
console.log('Задание 5');
let num2 = 45;
while (num2 <= 670) {
    if (num2 % 10 === 0) {
        console.log(num2);
    }
    num2++;
}

// Задание 6
/*
Переменная n хранит целое число от 0 до 9. 
Используя оператор switch, написать скрипт, 
который в зависимости от числа будет выводить
слово (Например, если n равно 3, то будет
выводиться слово «три»)
*/
console.log('Задание 6');
let N = 5;
switch( N ){
    case 0:
        console.log('ноль');
        break;
    case 1:
        console.log('один');
        break;
    case 2:
        console.log('два');
        break;
    case 3:
        console.log('три');
        break;
    case 4:
        console.log('четыре');
        break;
    case 5:
        console.log('пять');
        break;
    case 6:
        console.log('шесть');
        break;
    case 7:
        console.log('семь');
        break;
    case 8:
        console.log('восемь');
        break;
    case 9:
        console.log('девять');
        break;
}


// Задание 7 (*)
/*
В переменных size и unit хранятся размер и единицы
измерения информации 120 и «Кб» соответственно.
Зная что могут быть заданные Кб, Мб, Гб (кило-, мега- и гигабайты) 
и 1килобайт равен 1024 байта, найти количество байт в size.
*/
console.log('Задание 7');
let size = 120;
let unit = 'Кб';
let bytes;
switch (unit) {
    case 'Кб':
        bytes = size * 1024;
        break;
    case 'Мб':
        bytes = size * 1024 * 1024;
        break;
    case 'Гб':
        bytes = size * 1024 * 1024 * 1024;
        break;
}
console.log(bytes);


// Задание 8 (*)
/*
Постройте при помощи циклов JavaScript скрипт для 
календаря на HTML. Примечание: выполнить задание для
одного месяца, используя HTML-элемент table
*/
console.log('Задание 8');
