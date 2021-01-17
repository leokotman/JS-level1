'use strict';
// 1. получите все кнопки и сохраните в переменную
const btns = document.querySelectorAll('button');

// 1.1 затем проитерируйтесь по кнопкам и каждой из
// них добавьте обработчик клика - функцию handleClick
btns.forEach(btn => {
    btn.addEventListener('click', function (event) {
        handleClick(event);
    });
});


/**
 * Функция обрабатывает клик по кнопке в карточке товара и попеременно вызывает
 * функции для показа или скрытия текста о товаре.
 * @param {MouseEvent} clickedButtonEvent 
 */
function handleClick(clickedButtonEvent) {
    // 2. из объекта события получите ссылку на .product и
    // сохраните в переменную:
    const cardNode = clickedButtonEvent.target.parentNode;

    // 3. создайте литерал объекта со следующими свойствами:
    const card = {
        wrap: cardNode, // здесь элемент с классом .product
        img: cardNode.querySelector('img'), // здесь картинка внутри .product
        productName: cardNode.querySelector('.productName'), // здесь .productName, который внутри .product
        button: cardNode.querySelector('button'), // здесь button, который внутри .product
    };

    // 4. получаем текст на кнопке, которая внутри .product


    if (card.button.innerText == 'Подробнее') { // 4.1 проверяем равняется ли этот текст строке "Подробнее"
        // 4.2 если да, то передаем объект card в функцию showMoreText
        showMoreText(card);
    } else if (card.button.innerText == 'Отмена') { // 4.3 проверяем равняется ли текст на кнопке строке "Отмена"
        // 4.4 если да, то передаем объект card в функцию hideMoreText
        hideMoreText(card);
    }
}

/**
 * Функция скрывает текст с описанием товара.
 * @param {Object} card 
 * @param {HTMLDivElement} card.wrap
 * @param {HTMLImageElement} card.img
 * @param {HTMLDivElement} card.productName
 * @param {HTMLButtonElement} card.button
 */
function hideMoreText(card) {
    // 5. картинке внутри .product ставим стиль display: block
    card.img.style.display = 'block';
    // 5.1 внутри .product находим элемент с классом .desc и удаляем его
    card.wrap.querySelector('.desc').remove();
    // 5.2 кнопке, которая внутри .product ставим текст "Подробнее"
    card.button.innerText = 'Подробнее';
}

/**
 * Функция показывает текст с описанием товара.
 * @param {Object} card 
 * @param {HTMLDivElement} card.wrap
 * @param {HTMLImageElement} card.img
 * @param {HTMLDivElement} card.productName
 * @param {HTMLButtonElement} card.button 
 */
function showMoreText(card) {
    // 6. картинке внутри .product ставим display: none
    card.img.style.display = 'none';
    // 6.1 сохраняем произвольный текст в переменную
    let randomText = textRandomize();
    // 6.2 внутри .product есть .productName, после него вставляем div.desc и текстом из переменной из п. 6.1
    card.productName.insertAdjacentHTML('afterend', `<div class='desc'>${randomText}</div>`);
    // 6.3 внутри .product у кнопки текст ставим "Отмена"
    card.button.innerText = 'Отмена';
}

function textRandomize() {
    const texts = ['Hong Kong Phooey, number one super guy. Hong Kong Phooey, quicker than the human eye.',
        'Children of the sun, see your time has just begun, searching for your ways, through adventures every day. Every day and night, with the condor in flight, with all your friends in tow, you search for the Cities of Gold.',
        'Barnaby The Bear’s my name, never call me Jack or James, I will sing my way to fame, Barnaby the Bear’s my name.',
        'Omnes noster delicata eum ad, ad aliquid habemus albucius vis. Eu has modo splendide, ut dicit scaevola has. Cu nam oratio molestiae, labore tamquam consequat te ius, et sed option vidisse disputando. Ex sit eius velit audire, veri ocurreret quo ei. Amet nullam liberavisse eam cu.',
        'Ne fugit voluptaria est. Eum mollis forensibus deseruisse ei. Eos et evertitur suscipiantur. Dicit dictas ea mei, eu vel iusto molestiae scripserit. Usu ei inermis nostrum accusata, ad assum malorum sea. Utinam tempor vocent mea no, duo no sanctus lucilius democritum.'];
    return texts[Math.floor(Math.random() * texts.length)];
}