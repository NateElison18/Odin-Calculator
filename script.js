const numberButtons = document.querySelectorAll('.button');
const operatorButtons = document.querySelectorAll('.operator');
const output = document.querySelector('#output');
const deleteBtn = document.querySelector('.delete');
let lastChar;
let answer;

setButtonListeners();


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
            default:
                element.addEventListener('click', () => {
                    operatorButtonAction(element.textContent);
                });
                break;
        }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
    });

    deleteBtn.addEventListener('click', () => {
        deleteButtonAction();
    });


}

function numberButtonAction(number) {
    output.textContent += number;
    lastChar = number;
}

function clearButtonAction() {
    output.textContent = "";
    lastChar = "";
    answer = undefined;
}

function evaluateButtonAction() {

}

function deleteButtonAction() {
    output.textContent = output.textContent.slice(0, output.textContent.length - 1);
    lastChar = output.textContent.charAt(output.textContent.length - 1);
}

function perenthesisAction() {

}

function operatorButtonAction(operator) {
    if(Number.isInteger(parseInt(lastChar))) {
        output.textContent += operator;
        lastChar = operator;
    } else if(answer != undefined) {
        output.textContent += answer + operator;
        lastChar = operator;
    }
}

function positiveNegativeButtonAction() {

}
