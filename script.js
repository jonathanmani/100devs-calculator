// class Calculator{
//     constructor(currentOperandTextElement){
//         this.currentOperandTextElement = currentOperandTextElement;
//         this.clear();
//     }

//     clear(){
//         this.currentOperand = '';
//         this.operation = undefined;
//     }

//     appendNumber(number){
//         if (number === '.' && this.currentOperand.includes('.')){
//             return;
//         }
//         this.currentOperand = this.currentOperand.toString() + number.toString();
//     }

//     chooseOperation(operation){
//         if (this.currentOperand == ''){
//             return;
//         }

//         if (this.currentOperand !== ''){
//             this.compute();
//         }
//         this.operation = operation;
//         this.currentOperand = '';
//     }

//     compute(){
//         let computation;
//         let prev = parseFloat(this.currentOperand)
//     }

//     updateScreen(){
//         this.currentOperandTextElement.innerText = this.currentOperand;
//     }
    
// }


let screen = document.querySelector('.screen');
let numberButtons = Array.from(document.querySelectorAll('.button'));


// const operationButtons = document.querySelectorAll('[data-operation]')
// const equalButton = document.querySelector('[data-equals]')
// const currentOperandTextElement = document.querySelector('[data-current-operand]')
// const clearButton = document.querySelector('[data-clear]')

// const calc = new Calculator(currentOperandTextElement);

numberButtons.map(button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'AC':
                screen.innerText = '';
                break;
            case '=':
                screen.innerText = eval(screen.innerText);
            default:
                screen.innerText += e.target.innerText;
        }

        
    });
})
