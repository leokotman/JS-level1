/* Написать функцию, преобразующую число в объект.
Передавая на вход число в диапазоне [0, 999],
мы должны получить на выходе объект,
в котором в соответствующих свойствах описаны разряды числа:
- единицы (в свойстве units)
- десятки (в свойстве tens)
- сотни (в свойстве hundereds)
Если число было передано вне [0, 999] диапазона, не целое число или вообще не число, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.*/
let userNumber = +prompt("Введите целое число в диапазоне от 0 до 999");

//допустим 526
function NumberToObject(number) {
    if (number >= 100 && number <= 999) {
        this.hundreds = Math.floor(number / 100); //5
        // (526 - (5*100)) /10 = 2
        this.tens = Math.floor((number - (this.hundreds * 100)) / 10);
        //526 - 500 - 20 = 6
        this.units = Math.floor((number - (this.hundreds * 100) - (this.tens * 10)));
    } else if (number >= 10 && number <= 99) {
        this.tens = Math.floor(number / 10);
        this.units = Math.floor(number - (this.tens * 10));
    } else if (number > 0 && number < 10) {
        this.units = number;
    } else {
        console.log("Вы ввели что-то не то, введите целое число от 0 до 999. " + {});
    }
};

const number = new NumberToObject(userNumber);
console.log(number);