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
numberBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        if(display.textContent != '0' && !operatorToggle){
            currentNumber += btn.textContent;
        }else {
            currentNumber = btn.textContent;
        }
        display.textContent = currentNumber;
        operatorToggle = false;
    });
});

const operatorBtn = Array.from(document.querySelectorAll('.operatorBtn'));
let operatorToggle = false;
operatorBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        if(operator != 0 && !operatorToggle) {
            operate(memoryNumber, currentNumber, operator);
        }
        switch (btn.id) {
            case 'plus': operator = 1; break;
            case 'minus': operator = 2; break;
            case 'multiply': operator = 3; break;
            case 'divide': operator = 4; break;
            default: break; 
        }    
        memoryNumber = display.textContent;   
        operatorToggle = true;
    });
});

const clearBtn = document.querySelector('#clearBtn');
clearBtn.addEventListener('click', () => {
    currentNumber = '';
    memoryNumber = '';
    operator = 0;
    display.textContent = 0;
    operatorToggle = false;
});

const equalsBtn = document.querySelector('#equalsBtn');
equalsBtn.addEventListener('click', () => {
    operate(memoryNumber, currentNumber, operator);
    memoryNumber = '';
    currentNumber = '';
    operatorToggle = false;
});

const delBtn = document.querySelector('#delBtn');
delBtn.addEventListener('click', () => {
    if(display.textContent.slice(0, display.textContent.length - 1) === ''){
        display.textContent = 0;
    }else {
        display.textContent = display.textContent.slice(0, display.textContent.length - 1);
    }
    currentNumber = display.textContent;
    operatorToggle = false;
});

const commaBtn = document.querySelector('#commaBtn');
commaBtn.addEventListener('click', () => {
    if(!display.textContent.includes('.')){
        display.textContent += commaBtn.textContent;
        currentNumber = display.textContent;
    }
    operatorToggle = false;
});
