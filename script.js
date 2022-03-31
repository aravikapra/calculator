const calculatorScreen = document.querySelector(".calculator-screen");

const updateScreen = (number) => {
    calculatorScreen.value = number
}

const numbers= document.querySelectorAll(".number");

/*numbers.forEach((number) => {
    //console.log(number);

    number.addEventListener("click",(event)=>{
        updateScreen(event.target.value)
    })
})*/
let prevNumber=''
let calculationOperator=''
let currentNumber='0'
const inputNumber = (number) => {
    //currentNumber += number
    if(currentNumber === '0'){
        currentNumber = number
    }else{
        currentNumber += number
    }
}

numbers.forEach((number) => {
    number.addEventListener("click",(event)=>{
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})

const inputOperator = (operator) => {

    //prevNumber = currentNumber
    //calculationOperator = operator
    //currentNumber = ''

    if (calculationOperator === ''){
        prevNumber = currentNumber
    }
    calculationOperator = operator
    currentNumber = '0'
}

const operators = document.querySelectorAll(".operator");

operators.forEach((operator) =>{
    operator.addEventListener("click" , (event)=>{
        inputOperator(event.target.value)
    })
})

const calculate = () =>{
    let result= ''
    switch(calculationOperator){
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currentNumber)
            break
        case "*":
            result = parseFloat(prevNumber) * parseFloat(currentNumber)
            break
        case "/":
            result = parseFloat(prevNumber) / parseFloat(currentNumber)
            break
        default:
            break
    }
    currentNumber = result.toFixed(2)
    calculationOperator=''
}

const equalSign = document.querySelector(".equal-sign");

equalSign.addEventListener("click" , (event)=>{
    calculate()
    updateScreen(currentNumber)
    //console.log("hhhh")
})

const clearbtn = document.querySelector(".all-clear");

clearbtn.addEventListener("click",(event)=>{
    clearAll()
    updateScreen(currentNumber)
})

const clearAll = () =>{
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}

const decimal = document.querySelector(".decimal");

decimal.addEventListener("click", (event)=>{
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})

const inputDecimal = (dot) =>{
    if(currentNumber.includes('.')){
        return
    }
    currentNumber += dot
}

const percentages = document.querySelector(".percentage");

percentages.addEventListener("click" , (event)=>{
    percent()
})

const percent = () =>{
    if( prevNumber === ""){
        currentNumber = currentNumber/100
        updateScreen(currentNumber)
    }
    if( prevNumber !== ""){
        currentNumber = (prevNumber*currentNumber)/100
        updateScreen(currentNumber)
    }
}





