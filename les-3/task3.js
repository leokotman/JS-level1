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

const productsWithDiscount = products.map( item => {
    item = Object.assign( {}, item, { new_price: null } );
    let discount = 15;

    item.new_price = item.price - item.price * ( discount / 100 );
    return item;
} );

console.log( productsWithDiscount );

