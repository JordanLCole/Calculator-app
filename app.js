"use strict";

//display window
let displayWindow = document.querySelector('.display-window');
let displayValue = '';
let firstValue = null;
let currentOperator = '';

//Operators
const clear = document.querySelector('#clear');
const divide = document.querySelector('#divide');
const calculateEquals = document.querySelector('#equals');
const multiply = document.querySelector('#multiply');

//numbers
const buttons = document.querySelectorAll('button[id].value')

//key press event listeners
clear.addEventListener('click', clearDisplayWindow);
divide.addEventListener('click', operateDivide);
calculateEquals.addEventListener('click', calculate);
multiply.addEventListener('click', operateMultiply);

//functions

//clears the display window and sets current value to 0
function clearDisplayWindow(event) {
    console.log('display window cleared');
    displayWindow.textContent = '0';
    currentOperator = ''
}

//listens for clicks and enters the number into the display window
buttons.forEach(btn => {
    btn.addEventListener('click', function () {
        inputNumber(this.id)
        console.log(this.id);
    });
});

const inputNumber = number => {
    const screenDisplay = displayWindow.textContent;
    if (screenDisplay.length < 16)
        displayWindow.textContent = parseInt(screenDisplay + number).toString();
}
console.log(displayWindow.textContent);

//clears the current display window and stores the current value

function operatorPressed(operator) {
    console.log('operator pressed');
    displayValue = displayWindow.textContent;
    currentOperator = operator.id
    console.log(`stored value is ${displayValue}`);
    console.log(`current operator is ${currentOperator}`);
    clearDisplayWindow();
}

//division operator

function operateDivide(event) {
    console.log('pressed divide');
    operatorPressed(divide);
}

function operateMultiply (event) {
    console.log('pressed multiply');
    operatorPressed(multiply);
}


//calculate

function calculate(event) {
    if (currentOperator == 'divide') {
        displayWindow.textContent = (displayValue / displayWindow.textContent);
        console.log('calculating division');
        displayValue = '';
    } else if (currentOperator = 'multiply') {
        displayWindow.textContent = (displayValue * displayWindow.textContent);
        console.log('calculating multiplication');
        displayValue = ''
    }
};