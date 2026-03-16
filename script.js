let currentNumber = '';
let memoryNumber = '';
let operator = 0;

function add(memoryNumber, currentNumber) {
    return +memoryNumber + +currentNumber;
}

function subtract(memoryNumber, currentNumber) {
    return +memoryNumber - +currentNumber;
}

function multiply(memoryNumber, currentNumber) {
    return +memoryNumber * +currentNumber;
}

function divide(memoryNumber, currentNumber) {
    return +memoryNumber / +currentNumber;
}

function operate(memoryNumber, currentNumber, operator) {
    switch (operator) {
        case 1: display.textContent = add(memoryNumber, currentNumber); break;
        case 2: display.textContent = subtract(memoryNumber, currentNumber); break;
        case 3: display.textContent = multiply(memoryNumber, currentNumber); break;
        case 4: display.textContent = divide(memoryNumber, currentNumber); break;
        default: break;
    }
}

const display = document.querySelector('#display');
const numberBtn = Array.from(document.querySelectorAll('.numberBtn'));
numberBtn.forEach(item => {
    item.addEventListener('click', () => {
        if(display.textContent != 0)
            display.textContent += item.textContent;
        else {
            display.textContent = item.textContent;
        }
    });
});