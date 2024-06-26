﻿/*
this - псевдопеременная указывающая на контекст вызова

Переводы слов с англ.:
this - это, этот
in - в
typeof - тип

*/

let cat1 = {
  name: "Барсик",
  color: "red",
  age: 9,
  txt: "мяу",
  meow() {
    return this.txt;
  },
};



// Измените метод sound в объектах так, чтобы показывалось имя каждой собаки
// let dog1 = {name: 'Шарик', sound(){ return `Шарик: гав` }}
// let dog2 = {name: 'Гром', sound(){ return `Шарик: гав` }}
// let dog3 = {name: 'Чиби', sound(){ return `Шарик: гав` }}
// console.log(dog1.sound()); //Шарик
// console.log(dog2.sound()); //Гром
// console.log(dog3.sound()); //Чиби
let dog1 = {
  name: 'Шарик',
  sound() {
      return `${this.name}: гав`;
  }
};
let dog2 = {
  name: 'Гром',
  sound() {
      return `${this.name}: гав`;
  }
};
let dog3 = {
  name: 'Чиби',
  sound() {
      return `${this.name}: гав`;
  }
};
console.log(dog1.sound()); 
console.log(dog2.sound()); 
console.log(dog3.sound()); 


// Создайте объект input, у которого есть свойства:
// type - строка со значением "text"
// name - строка со значением "param"
// disabled - булево значение true
// render - функция при вызове возвращающая 
// строку следующего вида: '<input type="text" name="param" disabled >'
let input = {
  type: "text",
  name: "param",
  disabled: true,
  render() {
      return `<input type="${this.type}" name="${this.name}" disabled="${this.disabled}">`;
  }
};

console.log(input.render()); 


// Есть переменная gameUnit в виде объекта описывающего 
// игровую единицу. У объекта есть строковое свойство history, в которое
// будет дописываться каждое движение объекта. Напишите методы
// moveForward - должен добавлять в history слово 'вперёд'
// moveBack - должен добавлять в history слово 'назад'
// moveLeft - должен добавлять в history слово 'влево'
// moveRight - должен добавлять в history слово 'вправо'
// Например:
// gameUnit.moveForward();
// gameUnit.moveRight();
// gameUnit.moveRight();
// gameUnit.moveForward();
// console.log(gameUnit.history); //'вперёд,вправо,вправо,вперёд,'



// Создайте объект todosApp, который будет хранить 
// объектное свойство todos и методы принимающие строковую переменную
// add( todo ) - добавляет задачу для выполнения (и помечает её как невыполненную)
// delete( todo ) - удаляет задачу по названию
// markCompleted( todo ) - помечает задачу как выполненную
// markUncompleted( todo ) - помечает задачу как невыполненную
// show( todo ) - выводит информацию о задаче (или о задачах, если todo не указан)
// showCompleted( ) - выводит информацию о выполненных задачах
// showUncompleted( todo ) - выводит информацию о невыполненных задачах
// Например:
// todosApp.add('повторить типы данных JS');
// todosApp.add('сделать домашку по JS');
// todosApp.add('прокрастинировать😀');
// todosApp.add('выполнить спортивное упражнение');
// todosApp.markCompleted('повторить типы данных JS');
// todosApp.markCompleted('выполнить спортивное упражнение');
// todosApp.delete('прокрастинировать😀');
// todosApp.show();
// '🗹 повторить типы данных JS'
// '🗹 выполнить спортивное упражнение'
// '☐ сделать домашку по JS'
// 'Всего задач: 3'

