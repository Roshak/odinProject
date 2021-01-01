window.addEventListener('keydown', keycontrol);

const text = document.querySelector('.current');
const history = document.querySelector('.history');
const keys = document.querySelectorAll('.key');

keys.forEach(key => { key.addEventListener('click', buttonClick) });

function keycontrol(e) {
    if (e.shiftKey) {
        const key = document.querySelector(`.key[data-key="${e.keyCode}s"]`);
        if (key !== null) {
            printKeys(key.textContent);
        }
    }
    else {
        switch (e.keyCode) {
            case 13:
                printKeys('=');
                break;
            case 27:
                printKeys('CE');
                break;
            case 8:
                printKeys('BSP');
                break;
            default:
                const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
                if (key !== null) {
                    printKeys(key.textContent);
                }
        }
    }
}

function buttonClick(e) {
    printKeys(e.target.textContent);
}

function printKeys(key) {
    const operators = ['+', '-', '*', '/'];
    let operator = operators.includes(key);
    if (operator) {
        if (text.innerHTML !== '') {
            if (history.innerHTML.split('').includes(key)) {
                history.innerHTML = calculate() + key;
                text.innerHTML = '';
            } else {
                history.innerHTML = text.innerHTML + key;
                text.innerHTML = '';
            }
        }
    } else if (key === 'BSP') {
        backSpace();
    } else if (key === 'CE') {
        history.innerHTML = '';
        text.innerHTML = '';
    } else if (key === '=') {
        if (history.innerHTML === '') {
            history.innerHTML = text.innerHTML;
            text.innerHTML = '';
        } else {
            history.innerHTML = calculate();
            text.innerHTML = '';
        }
    } else if (key === '.') {
        if (!text.innerHTML.split('').includes(key)) {
            if (text.innerHTML === '') {
                text.innerHTML = '0.';
            } else {
                text.innerHTML += key;
            }
        }
    } else {
        text.innerHTML += key;
    }
}

function calculate() {
    let a = parseFloat(history.innerHTML.slice(0, -1));
    let b = parseFloat(text.innerHTML);
    if (isNaN(b)) {
        return 0;
    }
    let res = b;
    let op = history.innerHTML.charAt(history.innerHTML.length - 1);
    switch (op) {
        case '+':
            res = a + b;
            break;
        case '-':
            res = a - b;
            break;
        case '*':
            res = a * b;
            break;
        case '/':
            (b === 0) ? res = 'X' : res = a / b;
            break;
        default:
    }
    return (isNaN(res)) ? 'ERROR' : res;
}

function backSpace() {
    text.innerHTML = text.innerHTML.slice(0, -1);
}
/*
            <button data-key="55" class="key">7</button>
            <button data-key="56" class="key">8</button>
            <button data-key="57" class="key">9</button>
            <button data-key="55" class="key">/</button>
            <button data-key="52" class="key">4</button>
            <button data-key="53" class="key">5</button>
            <button data-key="54" class="key">6</button>
            <button data-key="187" class="key">*</button>
            <button data-key="49" class="key">1</button>
            <button data-key="50" class="key">2</button>
            <button data-key="51" class="key">3</button>
            <button data-key="189" class="key">-</button>
            <button data-key="48" class="key">0</button>
            <button data-key="187" class="key">+</button>
            <button data-key="48" class="key equal">=</button>

*/