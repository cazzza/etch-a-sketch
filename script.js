function createSquares (number = 16) {
    for (let i = 0; i < (number * number); i++) {
        let content = document.createElement("div");
        const contentContainer = document.querySelector("#container");
        content.classList.add("square");
        contentContainer.appendChild(content);
    };
};

window.onload = createSquares();



const button = document.querySelector(".input-squares");
button.addEventListener("click", () => {
    number = prompt("how many squares?");
    squares.forEach((square) => {
        square.remove();
    });
    createSquares(number);
});

const squares = document.querySelectorAll(".square");


squares.forEach((square) => {
    square.addEventListener("mouseover", function (e) {
        e.target.style.background = "red";
    });
});