function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = () => {
        return `${this.title} ${this.author}, ${this.pages} pages, 
            ${(this.read) ? 'read' : 'not read'}`
    }
}

function Index(start, end) {
    this.start = start;
    this.end = end;

}

Index.prototype = new Book();

Book.prototype.info2 = function () {
    return `Title: ${this.title}`
}

const book = new Book('"Questo è il titolo"', 'autore', 100, true)
console.log(book.info());
console.log(book.info2());

const test = new Index(100, 200);
console.log(test.info());

let animal = {
    jumps: null
};
let rabbit = {
    __proto__: animal,
    jumps: true
};

console.log(rabbit.jumps);
delete rabbit.jumps;
console.log(rabbit.jumps);
delete animal.jumps;
console.log(rabbit.jumps);

let head = {
    glasses: 1
};

let table = {
    pen: 3,
    __proto__: head
};

let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table
};

let pockets = {
    money: 2000,
    __proto__: bed
};

console.log(pockets.glasses);
console.log(head.glasses);

let hamster = {
    stomach: [],

    eat(food) {
        this.stomach.push(food);
    }
};

let speedy = {
    __proto__: hamster
};

let lazy = {
    __proto__: hamster
};

speedy.eat("apple");
console.log(speedy.stomach);

// This one also has it, why? fix please.
console.log(lazy.stomach); 