// javascript code
//
// Blackjack Game
// by Bob Cobb
//

// Added with Javascript Basics Section

// let card1 = "Ace of Spades",
//     card2 = "Ten of Hearts";

// let deck = [
//   "Ace of Spades",
//   "Two of Spades",
//   "Three of Spades"
// ];

let suits = ["Hearts", "Clubs", "Diamonds", "Spades"];
let values = ["Ace", "King", "Queen", "Jack", "Ten", "Nine", "Eight", "Seven", "Six", "Five", "Four", "Three", "Two"];

let deck = [];

for (let suitIds = 0; suitIds < suits.length; suitIds++) {
  for (let valueIds = 0; valueIds < values.length; valueIds++) {
    deck.push(values[valueIds] + ' of ' + suits[suitIds]);
  }
}

// for (let i = 0; i < deck.length; i++) {
//   console.log(deck[i]);
// }

console.log(deck.length);

let playerCards = [deck[0], deck[2]];

console.log("Welcome to Blackjack");

console.log("You are dealt: ");
console.log(" " + playerCards[0]);
console.log(" " + playerCards[1]);