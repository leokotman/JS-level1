'use strict';
const texts = {
    text1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    text2: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.',
    text3: 'Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил.'
};

/* Помогите мне разобраться, почему у меня не работает подстановка текста

Вариант ваш из решения я понял, но мне хотелось бы более автоматизированного
способа, без switch с содержимым самой ссылки (это неудобно же, если текст будет редактироваться - тогда придется много изменений вносить)
В общем, буду благодарен за подсказку в моём способе решения.
Переключение вкладок самих работает
*/

let links = document.querySelectorAll('.nav-link');
let targetText = document.querySelector('.text');

links.forEach(link => {
    link.addEventListener('click', click);
});

function click(link) {
    changeActiveClass(link);
    changeTextViaLink(link);
}

function changeActiveClass(link) {
    links.forEach(item => {
        item.classList.remove('active');
    });
    //без target не находится конкретная ссылка!
    link.target.classList.add('active');
}

function changeTextViaLink(link) {
    let currTextPosition = links.item[link];

    targetText.textContent = Object.entries(texts)[currTextPosition][1];
}