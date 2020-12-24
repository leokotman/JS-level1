"use strict";

/* Перед вами находится массив с продуктами, 
сегодня распродажа и вам нужно на каждый товар применить скидку 15% */

const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

/* Моё решение отличается от вашего, долго не мог решить,
но мне было принципиально решить самому. Получилось
чуть дольше, но я с помощью forEach не понял, как делать */

const productsWithDiscount = products.map(item => {
    item = Object.assign({}, item, { new_price: null });
    let discount = 15;

    item.new_price = item.price - item.price * (discount / 100);
    return item;
});

console.log(productsWithDiscount);

//решение из папки решений (проще и короче получается)
products.forEach(item => {
    let discount = 0.15;
    item.new_price = item.price - item.price * discount;
});
console.log(products);