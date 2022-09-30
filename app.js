"use strict";

//display window
let displayWindow = document.querySelector('#display-window');
let calculatingWindow = document.querySelector('#calculating');
let displayValue = '';
let currentOperator = '';
let currentTotal = '';
let answer = ''

//Operators
const clear = document.querySelector('#clear');
const clearAll = document.querySelector('#clear-all');
const divide = document.querySelector('#divide');
const calculateEquals = document.querySelector('#equals');
const multiply = document.querySelector('#multiply');
const subtract = document.querySelector('#minus');
const add = document.querySelector('#plus');

//numbers
const buttons = document.querySelectorAll('button[id].value')
const decimal = document.querySelector('#decimal');

//key press event listeners
clear.addEventListener('click', clearDisplayWindow);
clearAll.addEventListener('click', clearMemory);
divide.addEventListener('click', operateDivide);
calculateEquals.addEventListener('click', calculate);
multiply.addEventListener('click', operateMultiply);
decimal.addEventListener('click', decimalAdded);
subtract.addEventListener('click', operateSubtract);
add.addEventListener('click', operateAddition);


//functions

//clears the display window and sets current value to 0
function clearDisplayWindow(event) {
    console.log('display window cleared');
    displayWindow.textContent = '';
    //currentOperator = ''
}

//clears the memory and the current display
function clearMemory(event) {
    clearDisplayWindow();
    calculatingWindow.textContent = '';
    currentOperator = '';
    displayValue = '';
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
    if (displayValue === '') {
        console.log('operator pressed');
        displayValue = displayWindow.textContent;
        currentOperator = operator.id
        calculatingWindow.textContent = displayValue + operator;
        clearDisplayWindow();
    } else {
        currentTotal = calculatingWindow.textContent + displayWindow.textContent;
        answer = eval(currentTotal);
        console.log(currentTotal);
        console.log(answer);
        calculatingWindow.textContent = answer + operator;
        clearDisplayWindow();
    };
};


//Decimalisation - not functional....

function decimalAdded(event) {
    console.log('decimal added')
    displayWindow.textContent = displayValue + '.';
}

//Operators

function operateDivide(event) {
    console.log('pressed divide');
    operatorPressed('/');
}

function operateMultiply (event) {
    console.log('pressed multiply');
    operatorPressed('*');
}

function operateAddition (event) {
    console.log('pressed add');
    operatorPressed('+');
}

function operateSubtract (event) {
    console.log('pressed subtract');
    operatorPressed('-');
}

//calculate
function calculate(event) {
    currentTotal = calculatingWindow.textContent + displayWindow.textContent;
    answer = eval(currentTotal);
    console.log(currentTotal);
    console.log(answer);
    calculatingWindow.textContent = 'ANSWER BELOW';
    currentTotal = '';
    displayValue = '';
    displayWindow.textContent = answer;
}

//function calculate(event) {
    //if (currentOperator == 'divide') {
        //displayWindow.textContent = (displayValue / displayWindow.textContent);
        //console.log('calculating division');
        // = '';
    //} else if (currentOperator = 'multiply') {
        //displayWindow.textContent = (displayValue * displayWindow.textContent);
        //console.log('calculating multiplication');
        //displayValue = ''
    //}
//};