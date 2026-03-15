let numberA = 0;
let numberB = 0;
let operator = 0;

function add(numberA, numberB) {
    return numberA + numberB;
}

function subtract(numberA, numberB) {
    return numberA - numberB;
}

function multiply(numberA, numberB) {
    return numberA * numberB;
}

function divide(numberA, numberB) {
    return numberA / numberB;
}

function operate(numberA, numberB, operator) {
    switch (operator) {
        case 1: return add(numberA, numberB);
        case 2: return subtract(numberA, numberB);
        case 3: return multiply(numberA, numberB);
        case 4: return divide(numberA, numberB);
        default: return null;
    }
}