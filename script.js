
const numberButtons = document.querySelectorAll('.button');
const operatorButtons = document.querySelectorAll('.operator');
const output = document.querySelector('#output');
const deleteBtn = document.querySelector('#delete');
let lastChar;
let answer;
let firstNumber;
let secondNumber;
let operator;

setButtonListeners();
console.log(evaluateExpression(8, 5, '/' ));

function setButtonListeners() {
    numberButtons.forEach(element => {
        element.addEventListener('click', () => {
            numberButtonAction(element.textContent);
        });
    });
    operatorButtons.forEach(element => {
        switch(element.textContent) {
            case 'C':
                element.addEventListener('click', () => {
                    clearButtonAction();
                });
                break;
            case '( )':
                element.addEventListener('click', () => {
                    perenthesisAction();
                });
                break;
            case '=':
                element.addEventListener('click', () => {
                    evaluateButtonAction();
                });
                break;
            case '+/-':
                element.addEventListener('click', () => {
                    positiveNegativeButtonAction();
                });
                break;
            case '.':
                element.addEventListener('click', () =>{
                    pointButtonAction();
                });
                break;
            case '< Del':
                element.addEventListener('click', () => {
                    deleteButtonAction();
                });
                break;    
            default:
                element.addEventListener('click', () => {
                    operatorButtonAction(element.textContent);
                    console.log(operator);
                });
                break;
        }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
    });       
}

function numberButtonAction(number) {
    if(lastChar) {
        output.textContent = number;
        lastChar = undefined;
    } else
        output.textContent += number;
}

function clearButtonAction() {
    output.textContent = undefined;
    firstNumber = undefined;
    secondNumber = undefined;
    operator = undefined;
    answer = undefined;
    deselectOperatorButton();
}

function evaluateButtonAction() {
    if(!lastChar || operator === '%') {
        secondNumber = output.textContent;
        answer = evaluateExpression(firstNumber, secondNumber, operator);
        checkForDivideByZero(answer);
        if(answer) {
            output.textContent = answer;
            console.log(answer);
            firstNumber = undefined;
            secondNumber = undefined;
            operator = undefined;
            lastChar = undefined;
            deselectOperatorButton();
        }                                                          
    }
}

function deleteButtonAction() {
    output.textContent = output.textContent.slice(0, output.textContent.length - 1);
}

function operatorButtonAction(toSet) {
    if(output.textContent) {
        if(firstNumber === undefined) {
            firstNumber = output.textContent;
        } else {
            secondNumber = output.textContent;
        }
        console.log('first number: ' + firstNumber);
        console.log('operator: ' + operator);
        console.log('second number: ' + secondNumber);
        answer = evaluateExpression(firstNumber, secondNumber, operator);
        checkForDivideByZero(answer);

        if(answer) {
            output.textContent = answer;
            console.log(answer);
            firstNumber = answer;
            secondNumber = undefined;
            operator = undefined;
            lastChar = undefined;
            deselectOperatorButton();
        } 

        operator = toSet;
        lastChar = toSet;
        deselectOperatorButton();
        selectOperatorButton(toSet);
    }
}

function deselectOperatorButton() {
    const selectedOperatorButton = document.querySelector('.selectedOperator');
    if(selectedOperatorButton){
        selectedOperatorButton.setAttribute('class', 'operator');
    }
}

function selectOperatorButton(operator) {
    operatorButtons.forEach(element => {
        if(element.textContent === operator){
            element.setAttribute('class', 'selectedOperator');
        }
    });
}

function evaluateExpression(firstNumber, secondNumber, operator) {
    firstNumber = parseFloat(firstNumber);
    secondNumber = parseFloat(secondNumber);
    switch(operator) {
        case '%':
            return firstNumber / 100;
        case '/': 
            return firstNumber / secondNumber;
        case 'x':
            return firstNumber * secondNumber;
        case '-':
            return firstNumber - secondNumber;
        case '+':
            return firstNumber + secondNumber;
    }
}

function checkForDivideByZero(answer) {
    if(answer == Infinity || answer == -Infinity){
        clearButtonAction();
        output.textContent = 'lol';  
    }
}

function positiveNegativeButtonAction() {
    console.log(parseFloat(output.textContent));
    if(parseFloat(output.textContent) > 0) {
        output.textContent = '-' + output.textContent;
    } else if (parseFloat(output.textContent) < 0) {
        output.textContent = output.textContent.slice(1, output.textContent.length);
    }    

}

function pointButtonAction() {
    let number = output.textContent;
    let containsPoint = number.includes('.');
    console.log(number.includes('.'));
    if(containsPoint) {
        console.log("containtsPoint should be true if we're here: " + containsPoint);
        return;
    } else {
        output.textContent = number + '.';
        console.log("containtsPoint should be false if we're here: " + containsPoint);
    }

}

function perenthesisAction() {

}
