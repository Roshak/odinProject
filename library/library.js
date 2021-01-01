const newButton = document.getElementById('newBookButton');
const showButton = document.getElementById('showBooksButton');
const modal = document.querySelector('.modal');
const closeSpan = document.querySelector('.close');
const confirmInsert = document.getElementById('confirmInsert');
const inputs = document.querySelectorAll('.modalinput');
const tableContainer = document.getElementById('tablecontainer');
let deleteButtons = '';
let readButtons = '';

newButton.addEventListener('click', showModal);
showButton.addEventListener('click', showBooks);
closeSpan.addEventListener('click', closeModal);
confirmInsert.addEventListener('click', addBookToLibrary);

const load = localStorage.getItem('libraryData');

let myLibrary = [];
try {
    myLibrary = JSON.parse(load);
} catch (error) {
    console.error(error);
}

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.info = () => {
            return `${this.title} ${this.author}, ${this.pages} pages, ${(this.read) ? 'read' : 'not read'}`;
        };
    }
}

localStorage.setItem('libraryData', JSON.stringify(myLibrary));

function showModal() {
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}

function addBookToLibrary() {
    let valid = true;
    inputs.forEach((input) => {
        if (input.type !== 'checkbox') {
            (input.value === '')
                ? (input.classList.add('error'), valid = false)
                : input.classList.remove('error');
        }
    });

    if (valid) {
        const newBook = new Book(inputs[0].value
            , inputs[1].value
            , inputs[2].value
            , inputs[3].value === 'on' ? true : false
        );
        myLibrary.push(newBook);
        clearInputs();
        modal.style.display = 'none';
        showBooks();
        localStorage.setItem('libraryData', JSON.stringify(myLibrary));
    }
}

function showBooks() {
    tableContainer.textContent = '';

    let table = document.createElement('table');
    let tbody = document.createElement('tbody');
    
    table.className = 'table is-striped'

    table.appendChild(tbody);


    let row = document.createElement('tr');
    for (const [key, val] of Object.entries(new Book())) {
        if (typeof (val) !== 'function') {
            let header = document.createElement('th');
            header.textContent = key.charAt(0).toUpperCase() + key.slice(1);
            row.appendChild(header);
        }
    }
    tbody.appendChild(row);

    myLibrary.forEach((book, index) => {
        let row = document.createElement('tr');
        for (const [key, val] of Object.entries(book)) {
            if (typeof (val) !== 'function') {
                let cell = document.createElement('td');
                if (key === 'read') {
                    (val) ? cell.textContent = 'Read' : cell.textContent = 'Not Read'
                } else {
                    cell.textContent = val;
                }
                row.appendChild(cell);
            }
        }
        let cell2 = document.createElement('td');
        cell2.innerHTML = `<button class= "button is-info readBtn" data-key= "${index}">Toggle Read</button>`
        row.appendChild(cell2);
        let cell = document.createElement('td');
        cell.innerHTML = `<button class= "button is-danger deleteBtn" data-key= "${index}">Delete</button>`
        row.appendChild(cell);
        tbody.appendChild(row);
    })
    tablecontainer.appendChild(table);

    deleteButtons = document.querySelectorAll('.deleteBtn');
    deleteButtons.forEach((button) => {
        button.addEventListener('click', removeBook);
    })

    readButtons = document.querySelectorAll('.readBtn');
    readButtons.forEach((button) => {
        button.addEventListener('click', toggleRead);
    })
}

function removeBook(e) {
    myLibrary.splice(e.target.dataset.key, 1);
    localStorage.setItem('libraryData', JSON.stringify(myLibrary));
    showBooks();
}

function toggleRead(e) {
    myLibrary[e.target.dataset.key].read = !myLibrary[e.target.dataset.key].read;
    localStorage.setItem('libraryData', JSON.stringify(myLibrary));
    showBooks();
}

window.onclick = function (e) {
    if (e.target == modal) {
        modal.style.display = "none";
    }
}

function clearInputs() {
    inputs.forEach((input) => {
        input.value = '';
    })
}

showBooks();