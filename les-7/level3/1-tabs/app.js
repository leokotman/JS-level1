'use strict';
const texts = {
    text1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    text2: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.',
    text3: 'Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил.'
};

let links = document.querySelectorAll('.nav-link');
let targetText = document.querySelector('.text');

links.forEach(link => {
    link.addEventListener('click', click);
});

function click(link) {
    changeActiveClass(link);
    //changeTextViaLink();
}

function changeActiveClass(link) {
    links.forEach(item => {
        item.classList.remove('active');
    });
    //без target не находится конкретная ссылка!
    link.target.classList.add('active');
}

function changeTextViaLink(link) {

    targetText.textContent =
        links.indexOf(link)
}