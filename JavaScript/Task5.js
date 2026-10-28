const game = document.getElementById("game");
const movesDisplay = document.getElementById("moves");
const message = document.getElementById("message");
const restartButton = document.getElementById("restart");

const emojis = ["🍎", "🚀", "🐱", "🌟", "🎵", "⚽", "🍀", "🎈"];

let cards = [];
let firstCard = null;
let secondCard = null;
let moves = 0;
let locked = false;

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));

        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
}

function startGame() {
    game.innerHTML = "";
    moves = 0;
    firstCard = null;
    secondCard = null;
    locked = false;

    movesDisplay.textContent = moves;
    message.textContent = "Choose two cards";

    cards = shuffle([...emojis, ...emojis]);

    cards.forEach(function(emoji) {
        const card = document.createElement("button");

        card.classList.add("card");
        card.textContent = "?";

        card.dataset.emoji = emoji;

        card.addEventListener("click", function() {
            flipCard(card);
        });

        game.appendChild(card);
    });
}

function flipCard(card) {
    if (locked) return;

    if (card === firstCard) return;

    if (card.classList.contains("matched")) return;

    card.textContent = card.dataset.emoji;

    if (firstCard === null) {
        firstCard = card;
        return;
    }

    secondCard = card;
    moves++;

    movesDisplay.textContent = moves;

    
    if (firstCard.dataset.emoji === secondCard.dataset.emoji) {
        firstCard.classList.add("matched");
        secondCard.classList.add("matched");

        message.textContent = "It's a match!";

        firstCard = null;
        secondCard = null;

    
        if (document.querySelectorAll(".matched").length === 16) {
            message.textContent = "Congratulations! You won!";
        }
    } else {

        locked = true;
        message.textContent = "Not a match! Try again.";

        setTimeout(function() {
            firstCard.textContent = "?";
            secondCard.textContent = "?";

            firstCard = null;
            secondCard = null;
            locked = false;
        }, 1000);
    }
}

restartButton.addEventListener("click", startGame);

startGame();