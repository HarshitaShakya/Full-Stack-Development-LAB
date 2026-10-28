
let score = 0;
let time = 30;
let gameInterval;
let timerInterval;

let grid = document.getElementById("grid");


for (let i = 0; i < 9; i++) {
    let cell = document.createElement("div");
    cell.classList.add("cell");
    grid.appendChild(cell);
}


function showMole() {
    let cells = document.querySelectorAll(".cell");

    cells.forEach(cell => cell.classList.remove("mole"));

    let random = Math.floor(Math.random() * 9);
    cells[random].classList.toggle("mole");
}


grid.addEventListener("click", function(event) {
    if (event.target.classList.contains("mole")) {
        score++;
        document.getElementById("score").innerHTML = score;
        event.target.classList.remove("mole");
    }
});


function startGame() {
    clearInterval(gameInterval);
    clearInterval(timerInterval);

    score = 0;
    time = 30;

    document.getElementById("score").innerHTML = score;
    document.getElementById("time").innerHTML = time;

    showMole();

    gameInterval = setInterval(showMole, 800);

    timerInterval = setInterval(function() {
        time--;
        document.getElementById("time").innerHTML = time;

        if (time == 0) {
            clearInterval(gameInterval);
            clearInterval(timerInterval);
            alert("Game Over! Your score is " + score);
        }
    }, 1000);
}
