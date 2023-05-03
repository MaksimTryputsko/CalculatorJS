"use strict"; 
// const calc = document.querySelector('.calc');
// const result = document.querySelector('#result')

// calc.addEventListener('click',function(event){
//     if(!event.target.classList.contains('calc__btn')) return;
//     const value = event.target.innerText;
//     switch(value){
//         case 'CE':
//             result.innerText = '';
//             break;

//         case '=':
//         result.innerText = eval(result.innerText).toFixed(2);
//         break;

//         default:
//             result.innerText += value;
//     }
// })



let a = '';
let b = '';
let sign = '';
let finish = false;

const digit = ['0','1','2','3','4','5','6','7','8','9','.'];
const action = ['-', '+', 'X','/'];

const out = document.querySelector('.calc__result');


function clearAll() {
    a = '';
    b = '';
    sign = '';
    finish = false;
    out.textContent = 0;
}
document.querySelector('.CE').onclick = clearAll;


document.querySelector('.wrapper').onclick = (event) => {
    if(!event.target.classList.contains('calc__btn')) return;
    if(event.target.classList.contains('CE')) return;

    out.textContent = '';

    const key = event.target.textContent
    if (digit.includes(key)){
        if(b === '' && sign === ''){
        a += key;
        out.textContent = a;

        } else if (a!=='' && b!=='' && finish){
            b = key;
            finish = false;
            out.textContent = b;
        } else {
            b += key;
            out.textContent = b;
        }
        console.table(a,b,sign);
        return
    }
    if(action.includes(key)) {
        sign = key;
        out.textContent = sign;
        console.table(a, b, sign);
        return
    }

    if (key === '=') {
        if (b === "") b = a
        switch (sign) {
            case "+":
                a = (+a) + (+b);
            break;
            case "-":
                    a = a - b;
            break;
            case "X":
                a = a * b;
            break;
            case "/":
                // if (b === a){
                //     out.textContent = 'Infinity';
                //     a = '';
                //     b = '';                                     //При Ошибочном делении, что выводить//
                //     sign = '';
                //     return;
                // }
                a = a / b;
            break;   
        }
        finish = true;
        out.textContent = a;
        console.table(a, b, sign);
    }
        
}

       