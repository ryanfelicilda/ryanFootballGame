
// Coin toss.

let coinFlip = Math.floor(Math.random() * 2) == 0 ? 'Heads' : 'Tails';
console.log(coinFlip);

// Dice roll.


function rollSingleDice(numberOfSides) {
	let roll = Math.floor(Math.random() * numberOfSides) + 1;
	return roll;
}

function rollAllSixDice() {
	let roll = 
	// rolls six dice
	// adds up the rolls
	// returns the total
}



let playerOneDiceFour = rollSingleDice(4);
let playerOneDiceSix = rollSingleDice(6);
let playerOneDiceEight = rollSingleDice(8);
let playerOneDiceTen = rollSingleDice(10);
let playerOneDiceTwelve = rollSingleDice(12);
let playerOneDiceTwenty = rollSingleDice(20);


let playerTwoDiceFour = rollSingleDice(4);
let playerTwoDiceSix = rollSingleDice(6);
let playerTwoDiceEight = rollSingleDice(8);
let playerTwoDiceTen = rollSingleDice(10);
let playerTwoDiceTwelve = rollSingleDice(12);
let playerTwoDiceTwenty = rollSingleDice(20);

let playerOne = (playerOneDiceFour + playerOneDiceSix + playerOneDiceEight + playerOneDiceTen + playerOneDiceTwelve + playerOneDiceTwenty);
let playerTwo = (playerTwoDiceFour + playerTwoDiceSix + playerTwoDiceEight + playerTwoDiceTen + playerTwoDiceTwelve + playerTwoDiceTwenty);

let continueIteration = true;

while(continueIteration) {

	let playerOne = rollAllSixDice();
	let playerTwo = rollAllSixDice();

	if(playerOne > playerTwo){
		console.log("Pass Complete");
	}
	else if(playerOne < playerTwo){
		console.log("Pass Incomplete");
		continueIteration = false;
	}
	else if(playerOne == playerTwo){
		console.log("Interception!!!");
		continueIteration = false;
	}
}



// let numberOfPossesion = 3;
// let counter = 0;
// let continueIteration = true;

// if(playerOne > playerTwo){
// 	if(counter === numberOfPossesion){
// 		console.log("Turnover");
// 		continueIteration = false;
// 	}
// 	console.log("Pass Complete");
// 	}
// 	else if(playerOne < playerTwo){
// 		console.log("Pass Incomplete");
// 	}
// 	else if(playerOne == playerTwo){
// 		console.log("Interception!!!");
// 	}
// }


/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////


// for(let i = 0; i < 4; i++){
// 	console.log(i);
// }

// let favoriteNumber = 3;
// let counter = 0;
// let continueIteration = true;

// while(continueIteration === true){
// 	if(counter === favoriteNumber){
// 		console.log("We found my favorite number!");
// 		continueIteration = false;
// 	}
// 	else{
// 		console.log(counter);
// 		counter++;
