const addA = document.querySelector("#add-a");
const addB = document.querySelector("#add-b");
const addSolve = document.querySelector("#add-solve");
const addResult = document.querySelector("#add-result");

const subtractA = document.querySelector("#subtract-a");
const subtractB = document.querySelector("#subtract-b");
const subtractSolve = document.querySelector("#subtract-solve");
const subtractResult = document.querySelector("#subtract-result");

const multiplyA = document.querySelector("#multiply-a");
const multiplyB = document.querySelector("#multiply-b");
const multiplySolve = document.querySelector("#multiply-solve");
const multiplyResult = document.querySelector("#multiply-result");

const divideA = document.querySelector("#divide-a");
const divideB = document.querySelector("#divide-b");
const divideSolve = document.querySelector("#divide-solve");
const divideResult = document.querySelector("#divide-result");

function add() {
    addResult.value = addA.valueAsNumber + addB.valueAsNumber;
}

function subtract() {
    subtractResult.value = subtractA.valueAsNumber - subtractB.valueAsNumber;
}

function multiply() {
    multiplyResult.value = multiplyA.valueAsNumber * multiplyB.valueAsNumber;
}

function divide() {
    divideResult.value = divideA.valueAsNumber / divideB.valueAsNumber;
}

addSolve.addEventListener("click", add);
subtractSolve.addEventListener("click", subtract);
multiplySolve.addEventListener("click", multiply);
divideSolve.addEventListener("click", divide);
