let screen = document.querySelector('.screen');
let numberButtons = Array.from(document.querySelectorAll('.button'));

numberButtons.map(button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'AC':
                screen.innerText = '';
                break;
            case '=':
                try{
                    screen.innerText = eval(screen.innerText);
                } catch{
                    screen.innerText = 'Error';
                }
                break;
            default:
                screen.innerText += e.target.innerText;
        }

        
    });
});
