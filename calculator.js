"use strict";


////////////////////

/////////////////////

//////////////// ART №1 with evel()//////////////////

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

////////////////////////////////////// ART 2////////////////////////////////////////////////////////////////////

// let a = '';
// let b = '';
// let sign = '';
// let finish = false;

// const digit = ['0','1','2','3','4','5','6','7','8','9','.',')','(',];
// const action = ['-', '+', 'X','/','%','x!','In','log','√','xʸ','sin','cos','tan','EXP','π','e'];

// const out = document.querySelector('.calc__result');


// function clearAll() {
//     a = '';
//     b = '';
//     sign = '';
//     finish = false;
//     out.textContent = 0;
// }
// document.querySelector('.CE').onclick = clearAll;


// document.querySelector('.wrapper').onclick = (event) => {
//     if(!event.target.classList.contains('calc__btn')) return;
//     if(event.target.classList.contains('CE')) return;

//     out.textContent = '';

//     const key = event.target.textContent
//     if (digit.includes(key)){
//         if(b === '' && sign === ''){
//         a += key;
//         out.textContent = a ;

//         } else if (a!=='' && b!=='' && finish){
//             b = key;
//             finish = false;
//             out.textContent = b;
//         } else {
//             b += key;
//             out.textContent = b;
//         }
//         console.table(a,b,sign);
//         return
//     }
//     if(action.includes(key)) {
//         sign = key;
//         out.textContent = sign;
//         console.table(a, b, sign);
//         return
//     }

//     if (key === '=') {
//         if (b === "") b = a
//         switch (sign) {
//             case "+":
//                 a = (+a) + (+b);
//             break;
//             case "-":
//                     a = a - b;
//             break;
//             case "X":
//                 a = a * b;
//             break;
//             case "/":
//                 // if (b === a){
//                 //     out.textContent = 'Infinity';
//                 //     a = '';
//                 //     b = '';                                     //При Ошибочном делении, что выводить//
//                 //     sign = '';
//                 //     return;
//                 // }
//                 a = a / b;
//             break;
//             case "%":
//                 a = a * (b / 100);
//             break;
//             case "x!":
//                 a = factorial(a)
//             break;
//             case "In":
//                 a = Math.log(a);  ///////Проработать
//             break;
//             case "log":
//             a = Math.log10(a);
//             break;
//             case "√":
//              a = Math. sqrt(a);
//             break;
//             case "xʸ":
//             a = Math.pow(a, b)
//             break;
//             case "sin":
//                a = Math.sin(a)
//             break;
//             case "cos":
//             a = Math.cos(a)
//             break;
//             case "tan":
//                 a = Math.tan(a)
//             break;
//             case "tan":
//                 a = Math.tan(a)
//             break;
//             case "EXP":
//                 a = a * Math.pow(10, b)
//             break;
//             case "π":
//                a = Math.PI 
//             break;
//             case "e":
//                a =  Math.exp(1);
//             break;
//         }
//         finish = true;
//         out.textContent = a;
//         console.table(a, b, sign);
//     }
        
// }

// function factorial(a){
//     return (a != 1)? a * factorial(a-1) :1;
// }
       

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////// art 3//////////////////////////////////////////////////

/*
1. Добавить способность отображение нажатой клавиши в инпуте
2. Создать функцию для очистки
3. Обработать выражение когда нажато равно
        3.1 Выяснить какое сейчас используется математическое действие
        3.2 Выяснить 1ое и второе слагаемое 
        3.3 Обратить внимание на вырожение с один слогаемым
        3.4 Сделать вычесние (=)

*/
const display = document.querySelector('.calc__result__input');

const btnsCalculate = document.querySelectorAll('.calc__btn1');

const btns = document.querySelectorAll('.calc__btn');


const operations = ['+', '-' ,'*' ,'/',"%",'E',"xʸ"]
const ingenerOperations = ['x!','In',"log","√","π","Deg","sin","cos","tan","EXP","RAD","Inv","xʸ","e","Ans"]

const blockResult = document.querySelector('.result_history');

function mathOperationsWithTwoNumbers (str){

                const operation = operations.find(function (element){
                        return str.includes(element)     
                        })
                const splitString = str.split(operation)
                const splitStringNumber1 = +(splitString[0])
                const splitStringNumber2 = +(splitString[1])
                        if (operation === '+'){
                                display.value = splitStringNumber1 + splitStringNumber2
                        }
                        if (operation === '-'){
                                display.value = splitStringNumber1 - splitStringNumber2
                        }
                        if (operation === '*'){
                                display.value = splitStringNumber1 * splitStringNumber2
                        }
                        if (operation === '/'){
                                display.value = splitStringNumber1 / splitStringNumber2
                        }
                        if (operation === '%'){
                                display.value = splitStringNumber1 / 100
                        }
                        if (operation === "E") {
                          display.value = splitStringNumber1 * Math.pow(10,splitStringNumber2)      
                        }
                        if (operation === "xʸ") {
                                display.value = Math.pow(splitStringNumber1,splitStringNumber2)
                        }
                        
                        
}       


btns.forEach((item) => {
        item.addEventListener('click', (e) => {
                let itemText = e.target.textContent;
                
                if(itemText === "X"){
                        itemText = "*";
                }
                if(itemText === "÷"){
                        itemText = "/"
                }
                if(itemText === "EXP"){
                        itemText = "E"
                }
                if(itemText === "CE"){
                        display.value = "";
                }
                if(itemText !== "CE" && itemText !== "="){
                        display.value += itemText;
                }
               
                if(itemText === '='){
                        mathOperationsWithTwoNumbers(display.value)

                }
                // if(itemText === "π"){
                //         display.value = Math.PI
                // }
                
                console.log(itemText)
        })
 })
function factorialize(num) {
                if (num === 0 || num === 1)
                  return 1;
                for (var i = num - 1; i >= 1; i--) {
                  num *= i;
                }
                return num;
              }
 function mathOperationsWithOneNumbers (string){
         const ingenerOperetion = ingenerOperations.find(function (element){ 
                return string.includes(element)
                })

        const splitIngenerString = string.split(ingenerOperetion)
        const splitIngenerStringNumber1 = +(splitIngenerString[1])
        console.log(splitIngenerStringNumber1)
        if (ingenerOperetion === 'cos'){
                display.value = Math.cos(splitIngenerStringNumber1)
        }
        if (ingenerOperetion === 'sin'){
                display.value = Math.sin(splitIngenerStringNumber1)
        }
        if (ingenerOperetion === 'In'){
                display.value = Math.log(splitIngenerStringNumber1)
        }
        if (ingenerOperetion === 'log'){
                display.value = Math.log10(splitIngenerStringNumber1)
        }
        if (ingenerOperetion === 'tan'){
                display.value = Math.tan(splitIngenerStringNumber1)
        }
        if (ingenerOperetion === '√'){
                display.value = Math.sqrt(splitIngenerStringNumber1)
        }
        if (ingenerOperetion === 'π'){
                display.value = Math.PI
        }
        if (ingenerOperetion === 'e'){
                display.value = Math.exp(1)
        }
        if (ingenerOperetion === 'x!'){
                display.value = factorialize(splitIngenerStringNumber1)
        }
        // if (ingenerOperetion === 'In'){
        //         display.value = Math.log(splitIngenerStringNumber1)
        // }
        // if (ingenerOperetion === 'In'){
        //         display.value = Math.log(splitIngenerStringNumber1)
        // }

 }
btnsCalculate.forEach((item) => {
        item.addEventListener('click',(e) => {
                let itemTextCalculate = e.target.textContent;

                if( itemTextCalculate !== "=" && itemTextCalculate !== "Inv" 
                 && itemTextCalculate !== "Rad"  && itemTextCalculate !== "Deg" && itemTextCalculate !== "Ans"){

                        display.value += itemTextCalculate;
                }
                if(itemTextCalculate === "="){
                        mathOperationsWithOneNumbers(display.value)
                }
                
        })
})

