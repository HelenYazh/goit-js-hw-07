function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}


const input = document.querySelector("input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

createBtn.addEventListener("click", handleClick);

function handleClick(event) {
    if (input.value < 1 || input.value > 100) {
        return;
    }

    createBoxes(input.value);
    input.value = "";
}

function createBoxes(amount) {
    for (let i = 0; i < amount; i++) {
        const box = document.createElement("div");
        const size = 30 + 10 * i;
        box.style.width = `${size}px`;
        box.style.height = `${size}px`;
        box.style.backgroundColor = getRandomHexColor();

        boxesContainer.appendChild(box);
    }
}


destroyBtn.addEventListener("click", (event) => boxesContainer.innerHTML = "");