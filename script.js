const inputs = document.querySelectorAll(".angles");
const isTriangleBtn = document.querySelector("#is-triangle");
const outputTriangle = document.querySelector(".output");

function calcuateSumOfAngles(one, two, three){
    const sumOfAngles = one + two + three;
    return sumOfAngles;
}

function checkTriangle(){

    if(inputs[0].value>0  && inputs[1].value>0 && inputs[2].value > 0){
        const sumOfAngles = calcuateSumOfAngles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value));
        if(sumOfAngles === 180){
            outputTriangle.innerText = "Yay! It forms a triangle.";
        }
        else{
            outputTriangle.innerText = "Nope, angles does not form triangle.";
        }
    }else{
        outputTriangle.innerText = "The angles should be greater than 0";
    }
    
}

isTriangleBtn.addEventListener("click", checkTriangle);