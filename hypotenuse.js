const sides = document.querySelectorAll(".side-input");
const hypBtn = document.querySelector("#hyp-btn");
const outputEl = document.querySelector("#output");

function calculateSumOfSquares(a, b) {
    const sumOfSquares = a * a + b * b;
    return sumOfSquares;
}

function calculateHypotenuse() {
    const sumOfSquares = calculateSumOfSquares(Number(sides.value[0]), Number(sides.value[1]));
    console.log(sumOfSquares);
}

hypBtn.addEventListener("click", calculateHypotenuse)