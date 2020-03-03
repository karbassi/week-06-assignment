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
    const a = parseInt(addA.value, 10);
    const b = parseInt(addB.value, 10);

    addResult.value = a + b;
}

function subtract() {
    const a = parseInt(subtractA.value, 10);
    const b = parseInt(subtractB.value, 10);

    subtractResult.value = a - b;
}

function multiply() {
    const a = parseInt(multiplyA.value, 10);
    const b = parseInt(multiplyB.value, 10);

    multiplyResult.value = a * b;
}

function divide() {
    const a = parseInt(divideA.value, 10);
    const b = parseInt(divideB.value, 10);

    divideResult.value = a / b;
}

addSolve.addEventListener("click", add);
subtractSolve.addEventListener("click", subtract);
multiplySolve.addEventListener("click", multiply);
divideSolve.addEventListener("click", divide);
