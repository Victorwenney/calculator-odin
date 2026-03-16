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
numberBtn.forEach(item => {
    item.addEventListener('click', () => {
        if(display.textContent != '0'){
            currentNumber += item.textContent;
        }else {
            currentNumber = item.textContent;
        }
        display.textContent = currentNumber;
    });
});

const operatorBtn = Array.from(document.querySelectorAll('.operatorBtn'));
operatorBtn.forEach(item => {
    item.addEventListener('click', () => {
            
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

});
