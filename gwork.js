console.log("gwork1-3.js loaded");
const inputMin = document.getElementById("minInput");
const inputMax = document.getElementById("maxInput");

inputMin.value = 1;
inputMax.value = 100;

inputMin.onkeyup = function (e) {
    this.value = inputMin.value.replace(/^(0*)/, "");
    if (inputMin.value >= 1 && inputMin.value <= 100) {
        this.value = inputMin.value;
    } else if (inputMin.value.length === 0) {
        inputMin.value = null;
    } else {
        inputMin.value = null;
        alert("Incorrect number!");
    }
};

inputMax.onkeyup = function (e) {
    this.value = inputMax.value.replace(/^(0*)/, "");
    if (inputMax.value >= 1 && inputMax.value <= 100) {
        this.value = inputMax.value;
    } else if (inputMax.value.length === 0) {
        inputMax.value = null;
        
    } else {
        inputMax.value = null;
        alert("Incorrect number!");
    }
};

function addElement() {
    const parentElement = document.getElementById("container");
    const newElement = document.createElement("div");
    newElement.classList.add("new-element");
    parentElement.appendChild(newElement);
    const numElements = parentElement.childElementCount;
    newElement.id = "new-element-" + numElements;
    var x = inputMin.value, y = numElements, newNumelement;
    newNumelement = x - 1 + y;
    if (newNumelement % 3 === 0 && newNumelement % 5 === 0) {
        newElement.classList.add("FizzBuzz");
        newElement.innerText = `No. ${newNumelement}= FizzBuzz`;
        } else if (newNumelement % 3 === 0) {
        newElement.classList.add ("Fizz");
        newElement.innerText = `No. ${newNumelement}= Fizz`;
        } else if (newNumelement % 5 === 0) {
        newElement.classList.add("Buzz");
        newElement.innerText = `No. ${newNumelement}= Buzz`;
    } else {
        newElement.classList.add("num");
        newElement.innerText = `No. ${newNumelement} `;
    }
    newElement.setAttribute("value", newNumelement);
    parentElement.appendChild(newElement);

}

function removeElements() {
    const parentElement = document.getElementById("container");
    while (parentElement.firstChild) {
        parentElement.removeChild(parentElement.firstChild);
    }
}


function addElements() {
    const min = parseInt(inputMin.value);
    const max = parseInt(inputMax.value);
    for (let i = min; i <= max; i++) {
        addElement();
    }
}


const add1Button = document.getElementById("add1Button");
const addAllButton = document.getElementById("addAllButton");
const removeButton = document.getElementById("removeButton");
add1Button.addEventListener("click", addElement);
addAllButton.addEventListener("click", addElements);
removeButton.addEventListener("click", removeElements);
