const inputs = document.querySelectorAll(".angles");
const isTriangleBtn = document.querySelector("#is-triangle");
const outputTriangle = document.querySelector(".output");

function sumOfAngles(one, two, three){
    const sum = one + two + three;
    return sum;
}

function checkTriangle(inputs[0].value, inputs[1].value, inputs[2].value){
    
    
}

isTriangleBtn.addEventListener("click", checkTriangle);