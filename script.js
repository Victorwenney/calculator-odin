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
        case 1: display.textContent = add(memoryNumber, currentNumber);
                memoryNumber = display.textContent; break;
        case 2: display.textContent = subtract(memoryNumber, currentNumber);
                memoryNumber = display.textContent; break;
        case 3: display.textContent = multiply(memoryNumber, currentNumber);
                memoryNumber = display.textContent; break;
        case 4: display.textContent = divide(memoryNumber, currentNumber);
                memoryNumber = display.textContent; break;
        default: break;
    }
}

const display = document.querySelector('#display');

const numberBtn = Array.from(document.querySelectorAll('.numberBtn'));
numberBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        if(display.textContent != '0'){
            currentNumber += btn.textContent;
        }else {
            currentNumber = btn.textContent;
        }
        display.textContent = currentNumber;
    });
});

const operatorBtn = Array.from(document.querySelectorAll('.operatorBtn'));
operatorBtn.forEach(btn => {
    btn.addEventListener('click', () => {
            //Passing display.textContent instead of currentNumber in case an operator is pressed numerous times and the
            //currentNumber variable is already '', this way we prevent memoryNumber to also turn ''.
            memoryNumber = display.textContent;
            currentNumber = '';
            switch (btn.id) {
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
    currentNumber = '';
    memoryNumber = '';
    operator = 0;
    display.textContent = 0;
});

const equalsBtn = document.querySelector('#equalsBtn');
equalsBtn.addEventListener('click', () => {
    operate(memoryNumber, currentNumber, operator);
})

const delBtn = document.querySelector('#delBtn');
delBtn.addEventListener('click', () => {
    if(display.textContent.slice(0, display.textContent.length - 1) === ''){
        display.textContent = 0;
    }else {
        display.textContent = display.textContent.slice(0, display.textContent.length - 1);
    }
});

const commaBtn = document.querySelector('#commaBtn');
commaBtn.addEventListener('click', () => {
    if(!display.textContent.includes('.')){
        display.textContent += commaBtn.textContent;
        currentNumber = display.textContent;
    }
});
