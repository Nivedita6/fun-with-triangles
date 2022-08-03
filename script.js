const inputs = document.querySelectorAll(".angles");
const isTriangleBtn = document.querySelector("#is-triangle");
const outputTriangle = document.querySelector(".output");

function calcuateSumOfAngles(one, two, three){
    const sumOfAngles = one + two + three;
    return sumOfAngles;
}

function checkTriangle(){
    const sumOfAngles = calcuateSumOfAngles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value));
    if(sumOfAngles === 180){
        outputTriangle.innerText = "Yay! It forms a triangle.";
    }
    else{
        outputTriangle.innerText = "Nope, angles does not form traingle."
}

isTriangleBtn.addEventListener("click", checkTriangle);