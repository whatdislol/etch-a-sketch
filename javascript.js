const container = document.querySelector(".container");
const resizeButton = document.createElement("button");
const body = document.querySelector("body");

function createCanvas(size){
    for(let i = 0; i < size; i++){
        const row = document.createElement("div");
        row.classList.add("row");
        for(let j = 0; j < size; j++){
            const pixel = document.createElement("div");
            pixel.classList.add("pixel");
            row.appendChild(pixel);
        }
        container.appendChild(row);
    }
}
function clearCanvas(){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
}
function paint(event){
    const target = event.target;
    if(target.classList.contains("pixel") && event.buttons === 1){
        target.style.backgroundColor = "blue";
    }
}
resizeButton.textContent = "Resize";

container.addEventListener("mousedown", paint);
container.addEventListener("mouseover", paint);
resizeButton.addEventListener("click", () => {
    const userInput = +prompt('Enter grid size');
    if(typeof(userInput) === "number" && userInput > 0){
        clearCanvas();
        createCanvas(userInput);
    }
});

body.appendChild(resizeButton)

createCanvas(16);