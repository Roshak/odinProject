const totalGridSize = 600;
let shadowsMode = false;
let rainbowMode = false;

const reset = document.querySelector('#reset')
reset.addEventListener('click', clear)

function clear() {
    const rows = document.querySelectorAll('.row');
    rows.forEach(row => {
        row.parentNode.removeChild(row);
    });
    generateGrid();
}

function colorOnHover(e) {
    if (shadowsMode) {
        e.target.classList.add('selectedShadow');
        let currentBg = getComputedStyle(e.target).backgroundColor.substr(14, 3);
        let newBg = parseFloat(currentBg) + 0.1;
        if (newBg <= 0.7) {
            e.target.style.setProperty('border-color', 'black', 'important');
        } else {
            e.target.style.setProperty('border-color', 'white', 'important');
        }
        e.target.style.setProperty('background-color', `rgba(0,0,0,${newBg}`, 'important');
    } else if (rainbowMode) {

        if (!e.target.classList.contains('selectedRainbow')) {
            e.target.style.setProperty('background-color', `rgba(${randomColor()},${randomColor()},${randomColor()},1)`, 'important');
            e.target.classList.add('selectedRainbow');
        }
    } else {
        e.target.classList.add('selected');
    }
}

function generateGrid() {
    const grid = document.querySelector('.grid');
    const size = document.querySelector('#gridSize');

    let gridSize = (size.value !== '') ? size.value : 10
    let blockSize = (totalGridSize / gridSize) - 2 // -2 per avere il bordo di 1px in ogni direzione
    for (x = 0; x < gridSize; x++) {
        const row = document.createElement('div')
        row.classList.add('row');
        grid.appendChild(row);
        for (y = 0; y < gridSize; y++) {
            const block = document.createElement('div');
            block.classList.add('block');
            block.style.setProperty('height', `${blockSize}px`, 'important');
            block.style.setProperty('width', `${blockSize}px`, 'important');

            row.appendChild(block);
        }
    }
    const blocks = document.querySelectorAll('.block')
    blocks.forEach(block => {
        block.addEventListener('mouseenter', colorOnHover);
    });
}

const cbShadows = document.querySelector('#shadows');
const cbRainbow = document.querySelector('#rainbow');

cbShadows.addEventListener('click', setSpecialModes);
cbRainbow.addEventListener('click', setSpecialModes);

function setSpecialModes(e) {
    if (cbShadows.checked && e.target.id === 'rainbow') cbShadows.checked = false;
    if (cbRainbow.checked && e.target.id === 'shadows') cbRainbow.checked = false;

    shadowsMode = cbShadows.checked;
    rainbowMode = cbRainbow.checked;
    clear();
}

function randomColor() {
    return Math.round(Math.random() * (255 - 0)) + 0;
}

generateGrid();