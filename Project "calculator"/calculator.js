"use strict";

const display = document.querySelector('.calc__result__input');
const btnsCalculate = document.querySelectorAll('.calc__btn1');
const btns = document.querySelectorAll('.calc__btn');
const block = document.querySelectorAll('.block')
const operations = ['+', '-' ,'*' ,'/',"%",'E',"^"];
const ingenerOperations = ['!','In',"log","√","Deg","sin","cos","tan","EXP","RAD","Inv","xʸ","e","Ans"];


function mathOperationsWithTwoNumbers (str){

         const operation = operations.find(function (element){
                return str.includes(element)     
        })
        const splitString = str.split(operation)
        const splitStringNumber1 = +(splitString[0])
        const splitStringNumber2 = +(splitString[1])
                if (operation === '+'){
                        display.value = splitStringNumber1 + splitStringNumber2;
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
                if (operation === "^") {
                        display.value = Math.pow(splitStringNumber1,splitStringNumber2)
                }
}      


btns.forEach((item) => {
        item.addEventListener('click', (e) => {
                console.log(e.target)
                let itemText = e.target.textContent;
                
                
                if(itemText === "X"){
                        itemText = "*";
                         block.forEach(item => item.setAttribute("disabled", "disabled"))
                }
                if(itemText === "÷"){
                        itemText = "/";
                         block.forEach(item => item.setAttribute("disabled", "disabled"))
                }
                if(itemText === "EXP"){
                        itemText = "E";
                        block.forEach(item => item.setAttribute("disabled", "disabled"))
                }
                if(itemText === "CE"){
                        display.value = "";
                }
                if(itemText === "xʸ"){
                        itemText = "^";
                         block.forEach(item => item.setAttribute("disabled", "disabled"))
                }
                if (itemText === "π"){
                        itemText = Math.PI
                         block.forEach(item => item.setAttribute("disabled", "disabled"))
                }
                if (itemText ==='e'){
                        itemText = Math.exp(1);
                         block.forEach(item => item.setAttribute("disabled", "disabled"))
                }
                if(itemText === "x!"){
                        itemText = "!"
                         block.forEach(item => item.setAttribute("disabled", "disabled"))
                }
                if(itemText === "+"){
                         block.forEach(item => item.setAttribute("disabled", "disabled"))
                }
                if(itemText === "-"){
                         block.forEach(item => item.setAttribute("disabled", "disabled"))
                }
                if(itemText === "-"){
                         block.forEach(item => item.setAttribute("disabled", "disabled"))
                }
                if(itemText === "%"){
                         block.forEach(item => item.setAttribute("disabled", "disabled"))
                }
                if(itemText === "log"){
                        block.forEach(item => item.setAttribute("disabled", "disabled"))
               }
                
                if(itemText !== "CE" && itemText !== "="){
                        display.value += itemText;
                }
                if(itemText === '='){
                        mathOperationsWithTwoNumbers(display.value)
                        mathOperationsWithOneNumbers (display.value)
                        block.forEach(item => item.disabled = false)
                }      
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
        const splitIngenerStringNumber2 = +(splitIngenerString[0])

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
        if (ingenerOperetion === '!'){
                display.value = factorialize(splitIngenerStringNumber2)
        }
 }

btnsCalculate.forEach((item) => {
        item.addEventListener('click',(e) => {
                let itemTextCalculate = e.target.textContent;
                if(itemTextCalculate  === "In"){
                        block.forEach(item => item.setAttribute("disabled", "disabled"))
                }
                if(itemTextCalculate  === "√"){
                        block.forEach(item => item.setAttribute("disabled", "disabled"))
                }
                if(itemTextCalculate  === "log"){
                        block.forEach(item => item.setAttribute("disabled", "disabled"))
                }
                if(itemTextCalculate  === "sin"){
                        block.forEach(item => item.setAttribute("disabled", "disabled"))
                }
                if(itemTextCalculate  === "cos"){
                        block.forEach(item => item.setAttribute("disabled", "disabled"))
                }
                if(itemTextCalculate  === "tan"){
                        block.forEach(item => item.setAttribute("disabled", "disabled"))
                }
                if(itemTextCalculate  === "Ans"){
                        block.forEach(item => item.setAttribute("disabled", "disabled"))
                }
                if(itemTextCalculate  === "Inv"){
                        block.forEach(item => item.setAttribute("disabled", "disabled"))
                }
                if(itemTextCalculate  === "Rad"){
                        block.forEach(item => item.setAttribute("disabled", "disabled"))
                }
                if(itemTextCalculate  === "Deg"){
                        block.forEach(item => item.setAttribute("disabled", "disabled"))
                }
                if( itemTextCalculate !== "=" && itemTextCalculate !== "Inv" 
                 && itemTextCalculate !== "Rad"  && itemTextCalculate !== "Deg" && itemTextCalculate !== "Ans"){
                        display.value += itemTextCalculate;
                }
                if(itemTextCalculate === "="){
                        
                }    
        })
})

// после вырожения отключить кнопки кроме ровно 








/*
const operators = {
        '+': (x, y) => x + y,
        '-': (x, y) => x - y,
        '*': (x, y) => x * y,
        '/': (x, y) => x / y
    };
    
    let evaluate = (expr) => {
        let stack = [];
        
        expr.split(' ').forEach((token) => {
            if (token in operators) {
                let [y, x] = [stack.pop(), stack.pop()];
                stack.push(operators[token](x, y));
            } else {
                stack.push(parseFloat(token));
            }
        });
    
        return stack.pop();
    };
*/