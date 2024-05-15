const container = document.querySelector(".container");
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
function paint(event){
    const target = event.target;
    if(target.classList.contains("pixel") && event.buttons === 1){
        target.style.backgroundColor = "blue";
    }
}
container.addEventListener("mousedown", paint);
container.addEventListener("mouseover", paint);

createCanvas(16);