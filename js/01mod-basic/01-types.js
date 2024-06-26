console.log("Привет, мир!");

/* 
Кратко:
console - объект для работы с консолью вывода
console.log() - способ вывода данных в консоль
типы данных - множества доступных значений языка
инструкции и операторы - команды языка 
переменные - величины которые могут менять значения
let const var - операторы создания переменных и констант
выражение - корректный код, возвращающий значение
*/

/*
Переводы слов с англ.:
log - журнал
const - константа
let - позволять
string - строка
number - число
boolean - логический
undefined - неопределенный
null - пустой
*/

/*
Типы данных
string 'John' "Smith " `Doe`
number 100000 36.6 1e5 1e-5 10_000_000 0xff 0b111010
boolean true false
undefined undefined
null null
object {name: 'John'} [12,23,34] function(){}
bigint 100n
symbol Symbol('key')
*/

/*
//Примеры переменных и констант
let firstName = 'Алексей';
firstName = "Алексей Тарасов";
console.log(firstName);

const ASC = 'ASC';
const STONE = 'камень';
console.log(ASC);
console.log(STONE);
*/

// Выведите в консоль строку 'мир'
console.log('мир');

// Выведите в консоль число 100
console.log(100);

// Выведите в консоль булево значение true
console.log(true);

// Выведите в консоль значение undefined
console.log(undefined);

// Выведите в консоль своё имя
console.log('Валерия');

// Выведите в консоль вес своего кота
console.log(4 + 'кг');

// Создайте константу COPYRIGHT со значением 2022. Выведите константу [в консоль].
const COPYRIGHT = 2022;
console.log(COPYRIGHT);

// Создайте переменную pricePerHour с стоимостью часа работы. Выведите переменную [в консоль].
let pricePerHour = 50;
console.log(pricePerHour);

// Создайте переменную firstName со своим именем. Выведите переменную [в консоль].
let firstName = 'Валерия';
console.log(firstName);

// Создайте переменную isChecked с булевым значением true. Выведите переменную [в консоль].
let isChecked = true;
console.log(isChecked);

// Создайте переменную arr - она должна быть массивом из чисел 10,23,56: [10,23,56]. Выведите переменную [в консоль].
let arr = [10, 23, 56];
console.log(arr);

// Создайте переменную user - она должна быть объектом со свойствами name и height: {name: 'Иван', height: 180}
// Выведите переменную [в консоль].
let user = {name: 'Иван', height: 180};
console.log(user);

// Создайте переменную fn и поместите в неё функцию: function(){ console.log('Ф-я') }
// Выведите переменную [в консоль].
let fn = function(){ console.log('Ф-я') };
console.log(fn);

// Создайте переменную dt и поместите в объект-текущую дату: new Date()
// Выведите переменную [в консоль].
let dt = new Date();
console.log(dt);

// Создайте переменную param и поместите в неё null. 
// Выведите переменную [в консоль].
let param = null;
console.log(param);

// Создайте константу PORT с указанием номера порта: 5500
// Выведите константу [в консоль].
const PORT = 5500;
console.log(PORT);

// Создайте константу URI строкой подключения к базе данных: "mongodb+srv://<username>:<password>@<hostname>/?retryWrites=true&w=majority"
// Выведите константу [в консоль].
const URI = "mongodb+srv://<username>:<password>@<hostname>/?retryWrites=true&w=majority";
console.log(URI);

// Создайте константу с секретной строкой SECURE_PHRASE: "Dg|#rR5~m27j7#26KLkB"
// Выведите константу [в консоль].
const SECURE_PHRASE = "Dg|#rR5~m27j7#26KLkB";
console.log(SECURE_PHRASE);

// Откройте консоль и перейдите в папку additional (или откройте консоль сразу в папке)
// Узнайте версию Node.js  - наберите команду "node -v" и нажмите Enter


// Выполните скрипт 01-types.js внутри Node.js
// Наберите "node ../js/01mod-basic/01-types.js"


// Узнайте версию deno.js  - наберите команду "deno --version" и нажмите Enter
// Наберите "deno run ../js/01mod-basic/01-types.js"