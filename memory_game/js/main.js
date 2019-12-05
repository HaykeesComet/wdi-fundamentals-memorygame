console.log("Up and running!");

var cardOne = "King of Diamonds";
var cardTwo = "King of Hearts";
var cardThree = "Queen of Diamonds";
var cardFour = "Queen of Hearts";

console.log("You flipped the " + cardOne);
console.log("You flipped " + cardThree);

const cards = ['queen', 'queen', 'king', 'king'];

cardsInPlay = [];
var cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("You flipped " + cardsInPlay);

cardsInPlay = [];
var cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("You flipped " + cardsInPlay);

if (cardsInPlay.length === 2) {
    alert("You found a match!");
} else {
    alert("Sorry, try again.");
}