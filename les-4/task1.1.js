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
    //получилось только так, если убрать это свойство с функцией,
    // то у меня не работала функция
    this.sale_price = make25PercentDiscount(price);
}
//если не создавать метод внутри конструктора и не внутри прототипа,
// но только снаружи отдельной функцией получается? это же нарушение инкапсуляции?
function make25PercentDiscount(price) {
    let discount = 0.25;
    return price = price - price * discount;
}

const product1 = new Product("Чистый код", 600);
const product2 = new Product("Изучаем программирование на JavaScript", 1350);

console.log(product1);
console.log(product2);

/* если убрать свойство с функцией из конструктора,
то у меня было так в конце:
make25PercentDiscount(product1.price);
make25PercentDiscount(product2.price);
console.log(product1);
console.log(product2);

в итоге возвращались одинаковые объекты без применения скидки
*/
