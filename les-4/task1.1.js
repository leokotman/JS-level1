"use strict";
/* Задание 1.1:
Сделайте в стиле es5, а затем в стиле es6 (по аналогии из урока):
1) конструктор Product, который принимает параметры name и price,
2) сохраните их как свойства объекта.
Также объекты типа Product должны иметь метод make25PercentDiscount,
который будет уменьшать цену в объекте на 25%.
Имейте в виду, что метод make25PercentDiscount не должен быть внутри функции-конструктора, и также не нужно создавать отдельный объект-прототип (как объект transport в уроке). */

//ES5 стиль
function Product(name, price) {
    this.name = name;
    this.price = price;
}

//если не создавать метод внутри конструктора и не внутри прототипа,
// но только снаружи отдельной функцией получается? это же нарушение инкапсуляции?
function make25PercentDiscount(item) {
    let discount = 0.25;
    return item.price = item.price - item.price * discount;
}

const product1 = new Product("Чистый код", 600);
const product2 = new Product("Изучаем программирование на JavaScript", 1350);

console.log(product1);
console.log(product2);

make25PercentDiscount(product1);
make25PercentDiscount(product2);
console.log(product1);
console.log(product2);

//ES6
class ProductSimple {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    make25PercentDiscountSimple() {
        let discount = 0.25;
        return this.price = this.price - this.price * discount;
    }
}
const product3 = new ProductSimple("JavaScript для детей", 400);
const product4 = new ProductSimple("Python для детей", 1000);
console.log(product3);
console.log(product4);
product3.make25PercentDiscountSimple();
product4.make25PercentDiscountSimple();
console.log(product3);
console.log(product4);