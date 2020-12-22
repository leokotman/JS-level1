/* Сделайте в стиле es5, а затем в стиле es6:
а) конструктор Post, который принимает параметры author, text, date
и сохраняет их как свойства объекта.
Объекты типа Post должны иметь метод edit, который будет принимать текст и записывать его в свойство text объекта.
б) конструктор AttachedPost, который принимает параметры author, text, date. Проинициализируйте эти свойства с помощью конструктора Post, чтобы не дублировать код.
Также в конструкторе AttachedPost должно создаваться свойство highlighted со значением false.
Унаследуйте в объектах типа AttachedPost методы из Post.
Объекты типа AttachedPost должны иметь метод makeTextHighlighted, который будет назначать свойству highlighted значение true.*/

//ES5
function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}
Post.prototype.edit = function () {
    this.text = prompt("Напишите новый текст поста");
}
function AttachedPost(author, text, date) {
    Post.call(this, author, text, date);
    this.highlighted = false;
}

//пустой объект-прослойка для отсоединения от родителя
AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;
AttachedPost.prototype.makeTextHighlighted = function () {
    this.highlighted = true;
}

const post1 = new Post("Leo", "hello world", "22.12.2020");
const post2 = new AttachedPost("Leo", "main attached text", "20.12.2020");
console.log(post1);
console.log(post2);

//изменим тексты постов и сделаем закрепленный пост
post1.edit(); //() - важно, без них не работает!
post2.edit();
post2.makeTextHighlighted();

console.log(post1);
console.log(post2);

//ES6
class PostSimple {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }
    edit_simple() {
        this.text = prompt("Напишите новый текст поста (классы)");
    }
}
class AttachedPostSimple extends PostSimple {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }
    makeTextHighlighted_simple() {
        this.highlighted = true;
    }
}
const post3 = new PostSimple("Leo K", "new simple text", "22.12.2020");
const post4 = new AttachedPostSimple("Leo K", "new attach post simple", "22.12.2020");
console.log(post3);
console.log(post4);

//теперь применим методы edit и highlight
post3.edit_simple();
post4.edit_simple();
post4.makeTextHighlighted_simple();

console.log(post3);
console.log(post4);
