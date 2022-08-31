const sides = document.querySelectorAll(".side-input");
const hypBtn = document.querySelector("#hyp-btn");
const outputEl = document.querySelector("#output");

function calculateSumOfSquares(a, b) {
    const sumOfSquares = a * a + b * b;
    return sumOfSquares;
}

function calculateHypotenuse() {
    if(sides[0].value && sides[1].value){
        if(sides[0].value > 0 && sides[1].value > 0){
            const sumOfSquares = calculateSumOfSquares(Number(sides[0].value), Number(sides[1].value));
            const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
            outputEl.innerText = "The length of hypotenuse is " + lengthOfHypotenuse;
        }else{
            outputEl.innerText = "Input values should be greater than 0";
        }
        
    }else{
        outputEl.innerText = "Please enter all the input fields.👆"
    }
    
}

hypBtn.addEventListener("click", calculateHypotenuse)