
// Coin toss.

let coinFlip = Math.floor(Math.random() * 2) == 0 ? 'Heads' : 'Tails';
console.log(coinFlip);

// Single dice roll.

function rollSingleDice(numberOfSides) {
	let roll = Math.floor(Math.random() * numberOfSides) + 1;
	return roll;
}

// Six dice roll.

function rollAllSixDice() {
	let rollFour = rollSingleDice(4);
	let rollSix = rollSingleDice(6);
	let rollEight = rollSingleDice(8);
	let rollTen = rollSingleDice(10);
	let rollTwelve = rollSingleDice(12);
	let rollTwenty = rollSingleDice(20);
	let totalRoll = rollFour + rollSix + rollEight + rollTen + rollTwelve + rollTwenty;
	return totalRoll;
}
// Call function.
let playerOneRoll = rollAllSixDice();
let playerTwoRoll = rollAllSixDice();
// console.log(playerOneRoll, playerTwoRoll);


// Run game function.

function runGame(){
	let continueIteration = true;
	let downNumber = 1;
	let yardLine = 0;
	while(continueIteration && downNumber < 5) {

		playerOne = rollAllSixDice();
		playerTwo = rollAllSixDice();
		console.log(playerOne, playerTwo);
		if(playerOne > playerTwo){
			console.log("Pass Complete");
			yardLine += playerOne;
			console.log("You are now at the " + yardLine +" yard line!")
			continueIteration = true;
				if(yardLine > 110){
				console.log("Out of bounds")
				continueIteration = false;
				}
				if(yardLine >= 100 && yardLine <= 110){
				console.log("Touchdown!!!")
				continueIteration = false;
				}
		}
		else if(playerOne < playerTwo){
			console.log("Pass Incomplete");
			continueIteration = false;
		}
		else if(playerOne == playerTwo){
			console.log("Interception!!!");
			continueIteration = false;
		}
		downNumber++;
	}	
}

runGame();
console.log();







// let continueIteration = true;

// while(continueIteration) {

// 	let playerOne = rollAllSixDice();
// 	let playerTwo = rollAllSixDice();

// 	if(playerOne > playerTwo){
// 		console.log("Pass Complete");
// 		continueIteration = false;
// 	}
// 	else if(playerOne == playerTwo){
// 		console.log("Interception!!!");
// 		continueIteration = false;
// 	}
// }






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