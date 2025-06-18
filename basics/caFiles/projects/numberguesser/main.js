// Number Guesser Game - Core Functions

// Global variables to track game state
let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Task 1: Generate a random target number between 0 and 9
function generateTarget() {
    // Math.random() generates a number between 0 (inclusive) and 1 (exclusive)
    // Multiply by 10 to get 0-9.999..., then Math.floor() rounds down to get 0-9
    return Math.floor(Math.random() * 10);
}

// Bonus Task 6: Helper function to calculate absolute distance between two numbers
function getAbsoluteDistance(num1, num2) {
    // Math.abs() returns the absolute (positive) difference between two numbers
    // This helps us determine which guess is closer to the target
    return Math.abs(num1 - num2);
}

// Task 2: Compare human and computer guesses to determine the winner
function compareGuesses(humanGuess, computerGuess, targetNumber) {
    // Calculate how far each guess is from the target number
    const humanDistance = getAbsoluteDistance(humanGuess, targetNumber);
    const computerDistance = getAbsoluteDistance(computerGuess, targetNumber);
    
    // Determine the winner based on which guess is closer to target
    // If distances are equal (tie), human wins as specified in requirements
    if (humanDistance <= computerDistance) {
        return true;  // Human wins
    } else {
        return false; // Computer wins
    }
}

// Task 3: Update the score based on the winner
function updateScore(winner) {
    // Check the winner parameter and increment the appropriate score
    if (winner === 'human') {
        humanScore += 1; // Increase human score by 1
    } else if (winner === 'computer') {
        computerScore += 1; // Increase computer score by 1
    }
    // Function doesn't return anything as specified
}

// Task 4: Advance to the next round
function advanceRound() {
    // Increment the current round number by 1
    currentRoundNumber += 1;
}

// Bonus Task 6: Validate that user input is within the valid range (0-9)
function validateUserGuess(guess) {
    // Check if the guess is a number and within the valid range
    if (guess < 0 || guess > 9) {
        alert('Your guess must be between 0 and 9!');
        return false; // Invalid guess
    }
    return true; // Valid guess
}

// Task 5: Test functions with sample inputs
console.log('=== Testing Number Guesser Functions ===');

// Test generateTarget() - should return numbers between 0-9
console.log('Testing generateTarget():');
for (let i = 0; i < 5; i++) {
    const target = generateTarget();
    console.log(`Target ${i + 1}: ${target}`);
}

// Test getAbsoluteDistance()
console.log('\nTesting getAbsoluteDistance():');
console.log(`Distance between 5 and 8: ${getAbsoluteDistance(5, 8)}`); // Should be 3
console.log(`Distance between 2 and 7: ${getAbsoluteDistance(2, 7)}`); // Should be 5
console.log(`Distance between 4 and 4: ${getAbsoluteDistance(4, 4)}`); // Should be 0

// Test compareGuesses()
console.log('\nTesting compareGuesses():');
console.log(`Human: 5, Computer: 3, Target: 4 - Human wins: ${compareGuesses(5, 3, 4)}`); // Should be true (tie goes to human)
console.log(`Human: 7, Computer: 2, Target: 3 - Human wins: ${compareGuesses(7, 2, 3)}`); // Should be false (computer closer)
console.log(`Human: 1, Computer: 9, Target: 2 - Human wins: ${compareGuesses(1, 9, 2)}`); // Should be true (human closer)

// Test updateScore()
console.log('\nTesting updateScore():');
console.log(`Initial scores - Human: ${humanScore}, Computer: ${computerScore}`);
updateScore('human');
console.log(`After human win - Human: ${humanScore}, Computer: ${computerScore}`);
updateScore('computer');
updateScore('computer');
console.log(`After 2 computer wins - Human: ${humanScore}, Computer: ${computerScore}`);

// Test advanceRound()
console.log('\nTesting advanceRound():');
console.log(`Initial round: ${currentRoundNumber}`);
advanceRound();
console.log(`After advancing: ${currentRoundNumber}`);
advanceRound();
console.log(`After advancing again: ${currentRoundNumber}`);

// Test validateUserGuess()
console.log('\nTesting validateUserGuess():');
console.log(`Valid guess (5): ${validateUserGuess(5)}`); // Should be true
console.log(`Invalid guess (-1): ${validateUserGuess(-1)}`); // Should be false and show alert
console.log(`Invalid guess (15): ${validateUserGuess(15)}`); // Should be false and show alert

// Simulate a complete game round
console.log('\n=== Simulating Complete Game Round ===');
const secretTarget = generateTarget();
const humanGuess = 4;
const computerGuess = 7;

console.log(`Round ${currentRoundNumber}`);
console.log(`Secret target: ${secretTarget}`);
console.log(`Human guess: ${humanGuess}`);
console.log(`Computer guess: ${computerGuess}`);

const humanWins = compareGuesses(humanGuess, computerGuess, secretTarget);
console.log(`Human wins this round: ${humanWins}`);

if (humanWins) {
    updateScore('human');
    console.log('Human scores a point!');
} else {
    updateScore('computer');
    console.log('Computer scores a point!');
}

console.log(`Current scores - Human: ${humanScore}, Computer: ${computerScore}`);
advanceRound();
console.log(`Moving to round ${currentRoundNumber}`);

console.log('\n=== Game Functions Ready! ===');
