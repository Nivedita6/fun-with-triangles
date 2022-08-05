const sides = document.querySelectorAll(".side-input");
const hypBtn = document.querySelector("#hyp-btn");
const outputEl = document.querySelector("#output");

function calculateSumOfSquares(a, b) {
    const sumOfSquares = a * a + b * b;
    return sumOfSquares;
}

function calculateHypotenuse() {
    const sumOfSquares = calculateSumOfSquares(Number(sides[0].value), Number(sides[1].value));
    const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
    outputEl.innerText = "The length of hypotenuse is " + lengthOfHypotenuse;
}

hypBtn.addEventListener("click", calculateHypotenuse)