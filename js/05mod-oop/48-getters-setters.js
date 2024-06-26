/*
Кратко:
приватные свойства - свойства, к которым нельзя обратиться вне методов класса
аксессоры - специальные методы, которые вызываютяс автоматически при установке или чтении свойства
геттер - метод, который что-то возвращает при попытке обращения к одноименному свойству
сеттер - метод, который принимает данные при попытке установки значения одноименного свойства
*/

/*
Переводы слов с англ.:
get - получать
getter - добытчик, геттер
set - задавать
setter - установщик
*/

class Cat {
  #privateColor;
  set color(color) {
    this.#privateColor = color || "серый";
  }
  get color() {
    return this.#privateColor;
  }
}

let c1 = new Cat();
c1.color = 'Белый';
console.log(c1.color); //Белый

// Создайте аксессоры в классе Color с названием value. 
// Геттер должен возвращать приватное свойство, а сеттер 
// позволять задавать у экземпляра свойства в виде массива.
// Например, color1.value = [237, 192, 66]; //#edc042 
class Color {
  #value = '#000000';
  
}
let color1 = new Color();
color1.value = [237, 192, 66]; //#edc042
console.log(color1.value); //#edc042


