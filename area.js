const baseHeight = document.querySelectorAll(".bh-input");
const areaBtn = document.querySelector("#area-btn");
const outputEl = document.querySelector("#output");

function calculateArea(){
    if (baseHeight[0].value && baseHeight[1].value){
        if(baseHeight[0].value > 0 && baseHeight[1].value > 0){
            const base = Number(baseHeight[0].value);
            const height = Number(baseHeight[1].value);
            const area = 0.5 * base * height;
            outputEl.innerText = "The area of the triangle is " + area;
        }else{
            outputEl.innerText = "Base and height should be greater than 0."
        }
        
    }else{
        outputEl.innerText = "Please enter base and height.";
    }
    
}

areaBtn.addEventListener("click", calculateArea);