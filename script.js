function createSquares (number = 16) {
    for (let i = 0; i < (number * number); i++) {
        let content = document.createElement("div");
        const contentContainer = document.querySelector("#container");
        content.classList.add("square");
        contentContainer.appendChild(content);

        let squares = document.querySelectorAll(".square");
        squares.forEach((square) => {
            square.addEventListener("mouseover", function (e) {
                e.target.style.background = "red";
            });
        });
    };
};

window.onload = createSquares();


let squares = document.querySelectorAll(".square");
const button = document.querySelector(".input-squares");
button.addEventListener("click", () => {
    number = prompt("how many squares?");

    if (number > 20) {
        number = prompt("Please enter a number less than 70.")
    };
    squares.forEach((square) => {
        square.remove();
    });
    createSquares(number);
});




