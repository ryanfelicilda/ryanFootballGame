
// Coin toss.

let coinFlip = Math.floor(Math.random() * 2) == 0 ? 'Heads' : 'Tails';
console.log(coinFlip);

// if(Heads){

// }

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
			console.log("Pass Complete!");
			yardLine += playerOne;
			console.log("You are now at the " + yardLine +" yard line!")
			continueIteration = true;
			// if(playerOne > playerTwo && downNumber >= 4 && yardLine > 110){
			// 	console.log("Outbounds! Turnover!")
			// }
			if(yardLine > 110){
				console.log("Out of bounds!");
				continueIteration = false;
			}
			if(yardLine > 110 && downNumber >= 4){
				console.log("Turnover!");
				continueIteration = false;
			}
			if(yardLine >= 100 && yardLine <= 110){
				console.log("Touchdown!!!");
				continueIteration = false;
			}
			if(playerOne > playerTwo && yardLine < 100 && downNumber >= 4){
				console.log("Turnover!");
				continueIteration = true;
			}
			if(playerOne > playerTwo && yardLine < 100 && downNumber == 3){
				console.log("Pass complete. 4th down!");
				continueIteration = true;
			}
			if(playerOne < playerTwo && yardLine < 100 && downNumber == 3){
				console.log("Pass incomplete. 4th down!");
				continueIteration = true;
			}
		}
		else if(playerOne < playerTwo && downNumber >= 4){
			console.log("Pass Incomplete. Turnover!");
			continueIteration = false;
		}
		else if(playerOne < playerTwo){
				console.log("Pass Incomplete!");
				continueIteration = true;
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