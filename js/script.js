console.log("Hello nice to see you.");

let photoBart = document.querySelector(".js__photoBart");
let showHidePhotoBartButton = document.querySelector(".js-showHidePhotoBartButton");
let changeColorButton = document.querySelector (".changeBackground");
let container = document.querySelector(".body");

showHidePhotoBartButton.addEventListener("click", () => {
    photoBart.classList.toggle("section__photoBart--hidden");
    if (showHidePhotoBartButton.innerText === "Ukryj zdjęcie") {
        showHidePhotoBartButton.innerText = "Pokaż zdjęcie";
    } else {
        showHidePhotoBartButton.innerText = "Ukryj zdjęcie";
    }
});

changeColorButton.addEventListener("click", () => {
    container.classList.toggle("whiteBackground");
    if (changeColorButton.innerText === "Włącz ciemne tło") {
        changeColorButton.innerText = "Włącz jasne tło";
    } else if (changeColorButton.innerText === "Włącz jasne tło") {
        changeColorButton.innerText = "Włącz ciemne tło";
    }
})
