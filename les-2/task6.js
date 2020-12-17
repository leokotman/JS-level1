"use strict";
let money = prompt( "Введите сумму, которую хотите зачислить на счёт" );
let moneyAsArray = money.split( "" ); //строку превращаю в массив, чтобы анализировать последние элементы
if ( moneyAsArray[ moneyAsArray.length - 1 ] == 1 ) {
    alert( "Ваша сумма в " + money + " рубль успешно зачислена" );
} else if (
    moneyAsArray[ moneyAsArray.length - 1 ] == 2 ||
    moneyAsArray[ moneyAsArray.length - 1 ] == 3 ||
    moneyAsArray[ moneyAsArray.length - 1 ] == 4 ) {
    alert( "Ваша сумма в " + money + " рубля успешно зачислена" );
} else {
    alert( "Ваша сумма в " + money + " рублей успешно зачислена" );
}