
function play(user) {
    let choices = ["rock", "paper", "scissors"];

    let computer = choices[Math.floor(Math.random() * 3)];

    let result = document.getElementById("result");

    if (user == computer) {
        result.innerHTML = "Draw! Both chose " + user;
    }
    else if (
        (user == "rock" && computer == "scissors") ||
        (user == "paper" && computer == "rock") ||
        (user == "scissors" && computer == "paper")
    ) {
        result.innerHTML = "You Win! Computer chose " + computer;
    }
    else {
        result.innerHTML = "You Lose! Computer chose " + computer;
    }
}
