const cards = ["💖", "💖", "😍", "😍", "💌", "💌", "💕", "💕", "💘", "💘", "💓", "💓"];
let flippedCards = [];
let matchedCards = [];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function createBoard() {
  const gameBoard = document.getElementById("game-board");
  const shuffledCards = shuffle(cards);
  shuffledCards.forEach((card, index) => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    cardElement.dataset.index = index;
    cardElement.dataset.value = card;
    cardElement.textContent = "?";
    gameBoard.appendChild(cardElement);
  });
}

createBoard();