
let box = document.getElementById("box");
let message = document.getElementById("message");

let startTime;
let reactionTimer;
let waiting = false;
let canClick = false;

let best = localStorage.getItem("bestTime");

if (best !== null) {
    document.getElementById("best").innerHTML = best;
}

function startGame() {
    clearTimeout(reactionTimer);

    box.classList.remove("green");
    box.innerHTML = "Wait for green!";
    message.innerHTML = "Get ready...";
    document.getElementById("time").innerHTML = "-";

    waiting = true;
    canClick = false;

    let delay = Math.floor(Math.random() * 3000) + 2000;

    reactionTimer = setTimeout(function() {
        box.classList.add("green");
        box.innerHTML = "CLICK NOW!";
        message.innerHTML = "Click as fast as you can!";

        startTime = Date.now();
        waiting = false;
        canClick = true;
    }, delay);
}

box.addEventListener("click", function() {
    if (waiting) {
        clearTimeout(reactionTimer);
        waiting = false;
        box.innerHTML = "Too early!";
        message.innerHTML = "You clicked too early! Try again.";
    }
    else if (canClick) {
        let reactionTime = Date.now() - startTime;

        box.classList.remove("green");
        box.innerHTML = "Finished!";
        message.innerHTML = "Your reaction time: " + reactionTime + " ms";

        document.getElementById("time").innerHTML = reactionTime;

        canClick = false;

        if (best === null || reactionTime < Number(best)) {
            best = reactionTime;
            localStorage.setItem("bestTime", best);
            document.getElementById("best").innerHTML = best;
        }
    }
});
