"use strict";
// Задание 4: Реализовать основные 4 арифметические операции (+, -, /, *)
// в виде функций с двумя параметрами.

/**
 * Функция вычисляет сумму 2 переданных чисел
 * @param {Number} a - первое число
 * @param {Number} b - второе число
 * @returns {Number} сумму двух чисел
 */
function sum(a, b) {
  let c = a + b;
  return c;
}

/**
 * Функция вычисляет разность двух чисел
 * @param {Number} a - первое число
 * @param {Number} b - второе число
 * @returns {Number} разность двух чисел
 */
function subtract(a, b) {
  let c = a - b;
  return c;
}

/**
 * Функция вычисляет произведение двух чисел
 * @param {Number} a - первое число
 * @param {Number} b - второе число
 * @returns {Number} произведение двух чисел
 */
function multiply(a, b) {
  let c = a * b;
  return c;
}

/**
 * Функция вычисляет деление двух чисел
 * @param {Number} a - первое число
 * @param {Number} b - второе число
 * @returns {Number} деление первого числа на второе
 */
function divide(a, b) {
  let c = a / b;
  return c;
}

let number1 = +prompt("Введите первое число");
let number2 = +prompt("Введите второе число");

// alert(
//   `Сумма чисел ${number1} и ${number2} равна: ` +
//     sum(number1, number2) +
//     `\nРазность чисел ${number1} и ${number2} равна: ` +
//     subtract(number1, number2) +
//     `\nПроизведение числа ${number1} и ${number2} равно: ` +
//     multiply(number1, number2) +
//     `\nДеление числа ${number1} на число ${number2} равно: ` +
//     divide(number1, number2)
// );

//Задание 5:
/* Реализовать функцию с тремя параметрами:
function mathOperation(arg1, arg2, operation),
где arg1, arg2 – значения аргументов, operation – строка с названием операции.
В зависимости от переданного значения операции (использовать switch)
выполнить одну из арифметических операций
(использовать функции из задания 4) и вернуть полученное значение. */

/**
 * Функция принимает 2 числа и тип математической операции для вычисления
 * @param {Number} arg1 - первое число
 * @param {Number} arg2 - второе число
 * @param {Object} operation sum / subtract / multiply / divide -
 * позволяет функции посчитать сумму/разность/деление/умножение
 * в зависимости от этого параметра
 */
function mathOperation(arg1, arg2, operation) {
  let result;
  switch (operation) {
    case "сумма":
      result = sum(arg1, arg2);
      break;
    case "разность":
      result = subtract(arg1, arg2);
      break;
    case "умножение":
      result = multiply(arg1, arg2);
      break;
    case "деление":
      result = divide(arg1.arg2);
      break;
    default:
      alert("Вы ввели что-то не то, попробуйте ещё раз");
  }
  return result;
}

let operation = prompt(
  "Введите нужную операцию (одно слово по-русски): сумма / разность / умножение / деление"
);
alert(mathOperation(number1, number2, operation));
