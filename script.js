class Calculator{
    constructor(currentOperandTextElement){
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear();
    }

    clear(){
        this.currentOperand = '';
        this.operation = undefined;
    }

    appendNumber(number){
        this.currentOperand = number;
    }

    chooseOperation(operation){

    }

    compute(){

    }

    updateScreen(){
        this.currentOperandTextElement.innerText = this.currentOperand;
    }
    
}



const numberButtons = document.querySelectorAll('[data-numbers]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalButton = document.querySelector('[data-equals]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')
const clearButton = document.querySelector('[data-clear]')

const calc = new Calculator(currentOperandTextElement);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calc.appendNumber(button.innerText);
        calc.updateScreen();
    })
})