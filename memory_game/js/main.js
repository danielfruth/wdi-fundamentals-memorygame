//List of all cards.

let cards = [
     {
          rank: "queen",
          suit: "hearts",
          cardImage: "images/queen-of-hearts.png"
     },
     {
          rank: "queen",
          suit: "diamonds",
          cardImage: "images/queen-of-diamonds.png"
     },
     {
          rank: "king",
          suit: "hearts",
          cardImage: "images/king-of-hearts.png"
     },
     {
          rank: "king",
          suit: "diamonds",
          cardImage: "images/king-of-diamonds.png"
     }
];

let cardsInPlay = [];
let cardElement = null;
let playerScore = 0;

//Initial board setup and listening for user choice

function createBoard() {
     for (let i = 0; i < cards.length; i++) {
          cardElement = document.createElement('img');
          cardElement.setAttribute('src', 'images/back.png');
          cardElement.setAttribute('data-id', i);
          cardElement.addEventListener('click', flipCard);
          document.getElementById('game-board').appendChild(cardElement);
     }
};

let cardId = null;

//identifying user's choice assigning appropriate values to cards

function flipCard() {
     cardId = this.getAttribute('data-id');
     console.log("User flipped " + cards[cardId].rank);
     console.log(cards[cardId].cardImage);
     console.log(cards[cardId].suit);
     this.setAttribute('src', cards[cardId].cardImage);
     cardsInPlay.push(cards[cardId].rank);
     checkForMatch();
};

//end of game, user results in form of pop-up and add or subtract point

function checkForMatch() {
     if (cardsInPlay.length === 2){
          if (cardsInPlay[0] === cardsInPlay[1]) {
               alert("You found a match!");
               playerScore++;
               document.getElementsByTagName('span')[0].innerText = playerScore.toString();
          } else {
               alert("Sorry, try again.");
               playerScore--;
               document.getElementsByTagName('span')[0].innerText = playerScore.toString();
          }
     }
};

createBoard();

//reset all values

let resetButton = document.getElementById('reset');
resetButton.addEventListener('click', resetGame);

function resetGame() {
     document.getElementById('game-board').innerHTML = "";
     cardsInPlay = [];
     createBoard();
};

