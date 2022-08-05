const baseHeight = document.querySelectorAll(".bh-input");
const areaBtn = document.querySelector("#area-btn");
const outputEl = document.querySelector("#output");

function calculateArea(){
    const base = Number(baseHeight[0].value);
    const height = Number(baseHeight[1].value);
    const area = 0.5 * base * height;
    outputEl.innerText = "The area of the triangle is " + area;
}

areaBtn.addEventListener("click", calculateArea);