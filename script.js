class Calculator{
    constructor(currentOperandTextElement){
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear();
    }

    clear(){
        this.currentOperandTextElement = '';
        this.operation = undefined;
    }

    appendNumber(number){

    }

    chooseOperation(operation){

    }

    compute(){

    }

    updateScreen(){

    }
    
}



const numberButtons = document.querySelectorAll('[data-numbers]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalButton = document.querySelector('[data-equals]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')
const clearButton = document.querySelector('[data-clear]')