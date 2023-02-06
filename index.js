function soma() {
  let numOne = document.getElementById("num-one").value;
  let numTwo = document.getElementById("num-two").value;
  let numOneNumber = parseFloat(numOne);
  let numTwoNumber = parseFloat(numTwo);
  let result = numOneNumber + numTwoNumber;
  let resultContainer = document.getElementById("results");
  resultContainer.innerHTML = "<h1>" + result + "</h1>";
}

function minus() {
    let numOne = document.getElementById("num-one").value;
    let numTwo = document.getElementById("num-two").value;
    let numOneNumber = parseFloat(numOne);
    let numTwoNumber = parseFloat(numTwo);
    let result = numOneNumber - numTwoNumber;
    let resultContainer = document.getElementById("results");
    resultContainer.innerHTML = "<h1>" + result + "</h1>";
  }


  function divide() {
    let numOne = document.getElementById("num-one").value;
    let numTwo = document.getElementById("num-two").value;
    let numOneNumber = parseFloat(numOne);
    let numTwoNumber = parseFloat(numTwo);
    let result = numOneNumber / numTwoNumber;
    let resultContainer = document.getElementById("results");
    resultContainer.innerHTML = "<h1>" + result + "</h1>";
  }

  function multiply() {
    let numOne = document.getElementById("num-one").value;
    let numTwo = document.getElementById("num-two").value;
    let numOneNumber = parseFloat(numOne);
    let numTwoNumber = parseFloat(numTwo);
    let result = numOneNumber * numTwoNumber;
    let resultContainer = document.getElementById("results");
    resultContainer.innerHTML = "<h1>" + result + "</h1>";
  }
