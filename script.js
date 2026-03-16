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
        if(display.textContent === '0' || currentNumber === ''){
            display.textContent = item.textContent;
            currentNumber += item.textContent;
        }else {
            display.textContent += item.textContent;
            currentNumber += item.textContent;
        }
    });
});

const operatorBtn = Array.from(document.querySelectorAll('.operatorBtn'));
operatorBtn.forEach(item => {
    item.addEventListener('click', () => {
        if(operator != 0){
            operate(memoryNumber, currentNumber, operator);
        }
        memoryNumber = display.textContent;
        currentNumber = '';
        switch (item.getAttribute('id')) {
            case 'plus': operator = 1; break;
            case 'minus': operator = 2; break;
            case 'multiply': operator = 3; break;
            case 'divide': operator = 4; break;
            default: break;
        }      
    });
});

const clearBtn = document.querySelector('#clearBtn');
clearBtn.addEventListener('click', () => {
    display.textContent = '0';
    operator = 0;
    memoryNumber = '';
    currentNumber = '';
});