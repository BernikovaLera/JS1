// Задание 1
/* 
Создайте конструктор function Card(from, to){...}, 
создающий объекты карточки со свойствами from, to 
и методом show(), возвращающим  свойства отдельного
объекта в виде строки «from,to», где на месте
названий свойств будут их значения.
Создайте переменную c1 с городами Екатеринбург и Москва
*/
// function Card(from, to) {
//     this.from = from;
//     this.to = to;
// }
// Card.prototype.show = function() {
//     return this.from + ', ' + this.to;
// };
// var c1 = new Card('Екатеринбург', 'Москва');
// console.log(c1.show()); 


// Задание 2
/*
Опишите класс Human:  для создания объектов
со свойствами name, age и height конструктор
класса должен принимать одноимённые аргументы .
Создайте массив humans из десяти объектов:
«Коля», 23, 180,
«Даша», 19, 170,
«Ваня», 18, 192,
«Петя», 45, 178,
«Вася», 34, 197,
«Джони», 40, 168,
«Катя», 37, 160,
«Петя», 29, 200,
«Соня», 21, 172,
«Женя», 25, 175
Укажите классу метод getInfo (он должен 
возвращать строки вида «Коля, 23, 180»), 
метод геттер firstname ( он должен возвращать
свойство name объекта)
*/ 
// class Human {
//     constructor(name, age, height) {
//         this.name = name;
//         this.age = age;
//         this.height = height;
//     }
//     getInfo() {
//         return `${this.name}, ${this.age}, ${this.height}`;
//     }
//     getFirstName() {
//         return this.name;
//     }
// }
// const humans = [
//     new Human('Коля', 23, 180),
//     new Human('Даша', 19, 170),
//     new Human('Ваня', 18, 192),
//     new Human('Петя', 45, 178),
//     new Human('Вася', 34, 197),
//     new Human('Джони', 40, 168),
//     new Human('Катя', 37, 160),
//     new Human('Петя', 29, 200),
//     new Human('Соня', 21, 172),
//     new Human('Женя', 25, 175)
// ];
// console.log(humans[0].getInfo()); 
// console.log(humans[0].getFirstName()); 


// Задание 3 (*) 
/*
Напишите функции сортировки sortByName
и sortByHeight, которые смогут отсортировать
массив по именам (в алфавитном порядке) или
росту (по убыванию роста). Вызовите только 
функцию сортировки по росту
*/
// function sortByName(array) {
//     return array.sort((a, b) => {
//         if (a.name < b.name) return -1;
//         if (a.name > b.name) return 1;
//         return 0;
//     });
// }
// function sortByHeight(array) {
//     return array.sort((a, b) => {
//         if (a.height < b.height) return 1;
//         if (a.height > b.height) return -1;
//         return 0;
//     });
// }
// const people = [
//     { name: 'Alice', height: 160 },
//     { name: 'Bob', height: 180 },
//     { name: 'Charlie', height: 170 },
// ];
// const sortedByHeight = sortByHeight(people);
// console.log(sortedByHeight);

// Задание 4
/* 
СПолучите в переменную dt1  дату 
соответствующую 0:00, 1 января 2045 года,
при помощи конструктора Date()
*/
// var dt1 = new Date(2045, 0, 1);
// console.log(dt1);

// Задание 5
/* 
В переменную dt2 найдите кол-во секунд, 
которое прошло с 1 января 1970 года по 
текущий момент.
 */
// var currentDate = new Date();
// var millisecondsSinceUnixEpoch = currentDate.getTime();
// var secondsSinceUnixEpoch = millisecondsSinceUnixEpoch / 1000;
// var dt2 = secondsSinceUnixEpoch;
// console.log(dt2);

// Задание 6 (*)
/* 
Напишите функцию getDays, которая принимает
год и месяц (пусть январь будет — 1, 
февраль — 2 и т.д.), а возвращает количество
дней в месяце
 */
// function getDays(year, month) {
//     var isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
//     var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//     if (isLeapYear) {
//         daysInMonth[1] = 29;
//     }
//     return daysInMonth[month - 1];
// }
// console.log(getDays(2023, 1)); 
// console.log(getDays(2020, 2)); 
// console.log(getDays(2021, 2)); 



// Задание 7 (*)
/* 
Напишите функцию calendar(year,month), 
которая принимает два параметра — номер
месяца и год, а возвращает разметку
календаря HTML на указанный месяц.
*/
// function calendar(year, month) {
//     function getDaysInMonth(month, year) {
//         return new Date(year, month, 0).getDate();
//     }
//     const daysInMonth = getDaysInMonth(month, year);
//     const calendarHTML = `
//         <table>
//             <tr>
//                 <th>Пн</th>
//                 <th>Вт</th>
//                 <th>Ср</th>
//                 <th>Чт</th>
//                 <th>Пт</th>
//                 <th>Сб</th>
//                 <th>Вс</th>
//             </tr>
//             <tr>
//                 <td>${daysInMonth}</td>
//             </tr>
//         </table>
//     `;
//     return calendarHTML;
// }
// const calendarHTML = calendar(2023, 1);
// console.log(calendarHTML);


// Задание 8 (*)
/* 
Через прототип расширьте встроенный объект
Number методом isOdd(), который возвращает
true, если число нечетное.
*/

// Задание 9 (*)
/* 
Создайте конструктор , который поддерживает
на своих методах цепочечный синтаксис.
*/


// Задание 10 (*)
/*
Представьте, что разрабатываете игру. Создайте 
конструктор Unit(), создающий объекты с 
координатами x, y. При помощи прототипного 
наследования расширьте Unit(), создав новый 
конструктор Fighter() с свойством power. 
Примечание: не забудьте о геттерах и сеттерах.
*/
// function Unit(x, y) {
//     this.x = x;
//     this.y = y;
// }
// Unit.prototype.getX = function() {
//     return this.x;
// };
// Unit.prototype.setX = function(newX) {
//     this.x = newX;
// };
// Unit.prototype.getY = function() {
//     return this.y;
// };
// Unit.prototype.setY = function(newY) {
//     this.y = newY;
// };
// function Fighter(x, y, power) {
//     Unit.call(this, x, y); 
//     this.power = power;
// }
// Fighter.prototype = Object.create(Unit.prototype);
// Fighter.prototype.constructor = Fighter;
// Fighter.prototype.getPower = function() {
//     return this.power;
// };
// Fighter.prototype.setPower = function(newPower) {
//     this.power = newPower;
// };
// var fighter = new Fighter(10, 10, 100);
// console.log(fighter.getX());
// console.log(fighter.getY()); 
// console.log(fighter.getPower()); 


// Задание 11 (*)
/*
Представьте, что разрабатываете игру. Создайте 
класс Unit, создающий объекты с 
координатами x, y. Создайте класс наследник Fighter
с свойством power. 
Примечание: не забудьте о геттерах и сеттерах.
*/
// class Unit {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//     }
//     getX() {
//         return this.x;
//     }
//     setX(newX) {
//         this.x = newX;
//     }
//     getY() {
//         return this.y;
//     }
//     setY(newY) {
//         this.y = newY;
//     }
// }
// class Fighter extends Unit {
//     constructor(x, y, power) {
//         super(x, y); 
//         this.power = power;
//     }
//     getPower() {
//         return this.power;
//     }
//     setPower(newPower) {
//         this.power = newPower;
//     }
// }
// const fighter = new Fighter(10, 10, 100);
// console.log(fighter.getX()); 
// console.log(fighter.getY()); 
// console.log(fighter.getPower()); 
