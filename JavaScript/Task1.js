
let number = Math.floor(Math.random() * 100) + 1;
let count = 0;

function check() {
    let guess = Number(document.getElementById("guess").value);
    let result = document.getElementById("result");

    if (count >= 7) {
        result.innerHTML = "Game Over! The number was " + number;
        return;
    }

    count++;

    if (guess == number) {
        result.innerHTML = "Correct! You won in " + count + " guesses!";
    }
    else if (count == 7) {
        result.innerHTML = "Game Over! The number was " + number;
    }
    else if (guess < number) {
        result.innerHTML = "Too low! Guesses left: " + (7 - count);
    }
    else {
        result.innerHTML = "Too high! Guesses left: " + (7 - count);
    }
}
