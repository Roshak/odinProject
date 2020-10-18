const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

const p1 = document.createElement('p')
p1.classList.add('red')
p1.textContent = "Hey I'm red!"

const h3 = document.createElement('h3')
h3.classList.add('blueh3')
h3.style.color = 'blue'
h3.textContent = "I'm a blue h3!"

const div1 = document.createElement('div')
div1.classList.add('blackPink')
div1.style.cssText = "background-color: pink; border-color: black; border-style: solid"

const h1div = document.createElement('h1')
h1div.classList.add('h1div')
h1div.textContent = "ME TOO!"

const p2 = document.createElement('p')
p2.classList.add('p2indiv')
p2.textContent = "ME TOO!"

container.appendChild(content);
container.appendChild(h3);
container.appendChild(div1);
div1.appendChild(h1div);
div1.appendChild(p2);

const btn1 = document.querySelector('#btn1');
btn1.onclick = () => alert('Hello World');

const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', (e) => {
    alert(e.target);
    e.target.style.background = 'orangered';
});

const buttons = document.querySelectorAll('button')
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        alert(button.id)
    })
})
