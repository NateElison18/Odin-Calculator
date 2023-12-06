const numberButtons = document.querySelectorAll('.button');
const operatorButtons = document.querySelectorAll('.operator');
const output = document.querySelector('#output');

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
                clearButtonAction();
                break;
            case '( )':
                perenthesisAction();
                break;
            case '=':
                evaluateButtonAction();
                break;
            case '+/-':
                positiveNegativeButtonAction();
                break;
            default:
                operatorButtonAction();
                break;
        }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
    });
}

function numberButtonAction(number) {
    output.textContent += number;

    console.log("Inside numberButtonAction! num: " + number);
}

function clearButtonAction() {
    output.textContent = "";
}

function evaluateButtonAction() {

}

function deleteButtonAction() {

}

function perenthesisAction() {

}

function operatorButtonAction() {


}

function positiveNegativeButtonAction() {

}
