// Задание 1
/* 
Создайте объект city1 (let city1 = {}), укажите у него
свойства name (название города, строка) со значением «ГородN» 
и population (населенность города, число) со значением 10 млн.
*/
let city1 = {};
city1.name = "ГородN";
city1.population = 10000000;
console.log(city1.name)
console.log(city1.population)

// Задание 2
/* Создайте объект city2 через нотацию {name: "ГородM", population: 1e6}.*/ 
let city2 = {
    name: "ГородM",
    population: 1e6
};
console.log(city2.name)
console.log(city2.population)

// Задание 3
/* Создайте у объектов city1 и city2 методы getName(), которые 
вернут соответствующие названия городов*/
city1.getName = city2.getName = function () { return this.name; };
console.log(city1.getName());
console.log(city2.getName());

// Задание 4
/* 
Создайте методы exportStr() у каждого из объектов.
Этот метод должен возвращать информацию о городе
в формате «name=ГородN\npopulation=10000000\n». 
Для второго города будет строка со своими значениями.
Примечание: можно обращаться к каждому свойству через
цикл for/in, но методы объекта возвращать не нужно 
*/
city1.exportStr = city2.exportStr = function () {
    return `name=${this.name}\npopulation=${this.population}\n`;
};
console.log(city1.exportStr());
console.log(city2.exportStr());

// Задание 5
/* 
Создайте глобальную функцию getObj(), которая 
возвращает this. А у каждого из объектов city1 или
city2 метод getCity, который ссылается на getObj.
Проверьте работу метода. Примечание: к объекту вызова
можно обратиться через this.
*/
function getObj() { return this; }
city1.getCity = city2.getCity = getObj;
console.log(city1.getCity().getName() + ' ' + city1.getCity().population);
console.log(city2.getCity().getName() + ' ' + city2.getCity().population);

// Задание 6 (*)
/* 
Создать объект obj, с методами method1(),method2()
и method3(). В методе method3() должна возвращаться
строка «метод3». Сделайте так, чтобы было возможно 
выполнение кода obj.method1().method2().method3().
*/
var obj = {};
obj.method1 = function() {
    console.log("Метод 1 выполнен");
    return this; 
};
obj.method2 = function() {
    console.log("Метод 2 выполнен");
    return this; 
};
obj.method3 = function() {
    console.log("Метод 3 выполнен");
    return "метод3"; 
};
obj.method1().method2().method3();

// Задание 7 
/* 
Создайте массив d1 с числовыми величинами 45,78,10,3. 
Добавьте в массив d1 еще одно число ( d1[7] = 100). 
Выведите в консоль весь массив и его элементы с индексами 6 и 7.
*/
let d1 = [45, 78, 10, 3];
d1[7] = 100;
console.log(d1);
console.log(`Элемент с индексом 6: ${d1[6]}`);
console.log(`Элемент с индексом 7: ${d1[7]}`);

// Задание 8
/* 
Создайте массив d2 с числовыми величинами 45,78,10,3.
Посчитайте в переменную sum2 сумму чисел в нем, 
при помощи цикла for .
*/
var d2 = [45, 78, 10, 3];
var sum2 = 0;
for (var i = 0; i < d2.length; i++) {
    sum2 += d2[i]; 
}
console.log('Сумма чисел в массиве d2: ' + sum2);

// Задание 9
/* 
Создайте массив d3 с числовыми величинами 45,78,10,3.
Добавьте в массив d3 еще одно число (например, d[7] = 100)
Посчитайте в переменную sum3 сумму чисел в нем,
при помощи цикла for/in.
*/
var d3 = [45, 78, 10, 3];
d3[7] = 100;
var sum3 = 0;
for (var key in d3) {
    if (d3.hasOwnProperty(key)) {
        sum3 += d3[key]; 
    }
}
console.log('Сумма чисел в массиве d3: ' + sum3);


// Задание 10
/*
Создайте массив d4 с числовыми величинами 45,78,10,3.
Напишите функцию сортировки my(a,b), которая при 
вызове d4.sort(my) отсортирует элементы массива 
по убыванию чисел. Вызовите d4.sort(my)
*/
var d4 = [45, 78, 10, 3];
function my(a, b) {
    return b - a; 
}
d4.sort(my);
console.log(d4);


// Задание 11 (*)
/* 
Создайте двумерный массив d5 размером n=3 элементов в каждом из 
которых будет m=4 элементов из целых чисел (в каждый элемент поместить цифру 5). 
Примечание: при создании двумерного массива используйте циклы.
Во внешнем цикле должна появиться конструкция d5[i] = [];
*/
var d5 = [];
for (var i = 0; i < 3; i++) {
    d5[i] = [];
    for (var j = 0; j < 4; j++) {
        d5[i][j] = 5;
    }
}
console.log(d5);
