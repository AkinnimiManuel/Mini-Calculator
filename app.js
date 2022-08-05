const userInput = document.getElementById('input-number');
const addBtn = document.getElementById('btn-add');
const subtractBtn = document.getElementById('btn-subtract');
const multiplyBtn = document.getElementById('btn-multiply');
const divideBtn = document.getElementById('btn-divide');

const currentResultOutput = document.getElementById('current-result');
const currentCalculationOutput = document.getElementById('current-calculation');

function outputResult(result, text) {
  currentResultOutput.textContent = result;
  currentCalculationOutput.textContent = text;
}





const defaultResult = 0; 
 let currentResult = defaultResult; 
 let logentries = [];

 //Gets inputs from inputs field
 function getUserinput(){
    return parseInt(userInput.value);
 }

 //Generates amd writes calculation log
 function createAndWriteoutput(operator, resultBeforCalc, calcNumber) {
    const calcHistory = `${resultBeforCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcHistory); //from vendor file
 }

 function writeToLog(operationidentifier, prevResult, operationNumber, newResult) {
    const logEntry = {
        operation: operationidentifier,
        prevResult: prevResult,
        number: operationNumber,
        result: newResult
    };
    logentries.push(logentries);
    console.log(logentries);
 }

function calculateResult(calculationType) {
    const enteredNumber = getUserinput();  
    if (calculationType !== 'ADD' && calculationType !== 'SUBTRACT' && calculationType !=='DIVIDE' && calculationType !== 'MULTIPLY' || 
    !enteredNumber  )
    {
        return;
    }
    
    if (calculationType === 'ADD' ||
       calculationType === 'SUBTRACT' ||
       calculationType === 'DIVIDE' ||
       calculationType === 'MULTIPLY') {

    
    const initialResult = currentResult;
    let mathOperator;
    

    if (calculationType === 'ADD') {
        currentResult +=enteredNumber;
        mathOperator = '+';
    } else if (calculationType ==='SUBTRACT') {
        currentResult -=enteredNumber;
        mathOperator = '-';
    } else if (calculationType === 'DIVIDE') {
        currentResult /=enteredNumber;
        mathOperator = '/';
    } else if (calculationType === 'MULTIPLY') {
        currentResult *=enteredNumber;
        mathOperator = '*';
    }

    createAndWriteoutput(mathOperator, initialResult, enteredNumber);
    writeToLog(calculationType, initialResult, enteredNumber, currentResult);
    }   
}

function add(){
 calculateResult('ADD');
}

function subtract() {
   calculateResult('SUBTRACT');
}

function multiply() {
    calculateResult('MULTIPLY');
}

function divide() {
    calculateResult('DIVIDE');
}


addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);