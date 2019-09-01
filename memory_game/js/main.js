
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var cardOne = cards[0];
 cardsInPlay.push(cardOne);
 console.log("User flipped " + cardOne);
	
var cardTwo = cards[2];
 cardsInPlay.push(cardTwo);
 console.log("User flipped " + cardTwo);

 function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[2]){
		console.log("You found a match!");
	} else {
		console.log("Sorry, try again");	
	}
}

function flipCard(cardId) {
console.log("User flipped" + cards [cardId]);
	cardsInPlay.push(cards[cardId]);
	if (cardsInPlay.length === 2){
		checkForMatch(); }
}



flipCard(0);
flipCard(2);