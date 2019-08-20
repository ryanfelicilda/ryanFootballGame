
// Coin toss.

let coinFlip = Math.floor(Math.random() * 2) == 0 ? 'Heads' : 'Tails';
console.log(coinFlip);

// Dice roll.

let playerOneDiceFour = Math.floor(Math.random() * 4) + 1;
let playerOneDiceSix = Math.floor(Math.random() * 6) + 1;
let playerOneDiceEight = Math.floor(Math.random() * 8) + 1;
let playerOneDiceTen = Math.floor(Math.random() * 10) + 1;
let playerOneDiceTwelve = Math.floor(Math.random() * 12) + 1;
let playerOneDiceTwenty = Math.floor(Math.random() * 20) + 1;


let playerTwoDiceFour = Math.floor(Math.random() * 4) + 1;
let playerTwoDiceSix = Math.floor(Math.random() * 6) + 1;
let playerTwoDiceEight = Math.floor(Math.random() * 8) + 1;
let playerTwoDiceTen = Math.floor(Math.random() * 10) + 1;
let playerTwoDiceTwelve = Math.floor(Math.random() * 12) + 1;
let playerTwoDiceTwenty = Math.floor(Math.random() * 20) + 1;

let playerOne = (playerOneDiceFour + playerOneDiceSix + playerOneDiceEight + playerOneDiceTen + playerOneDiceTwelve + playerOneDiceTwenty);
let playerTwo = (playerTwoDiceFour + playerTwoDiceSix + playerTwoDiceEight + playerTwoDiceTen + playerTwoDiceTwelve + playerTwoDiceTwenty);


if(playerOne > playerTwo){
console.log("Pass Complete");
}
else if(playerOne < playerTwo){
	console.log("Pass Incomplete");
}
else if(playerOne == playerTwo){
	console.log("Interception!!!");
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
