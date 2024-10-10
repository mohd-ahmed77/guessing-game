
let randomNumber;
let maxNumber;
let attempts = 0;

function startGame() {
    maxNumber = parseInt(document.getElementById('max-number').value);
    
    if (isNaN(maxNumber) || maxNumber < 1) {
        alert('Please enter a valid maximum number greater than 0');
        return;
    }

    randomNumber = Math.floor(Math.random() * maxNumber) + 1;
    attempts = 0;
    document.getElementById('setup-container').style.display = 'none';
    document.getElementById('game-container').style.display = 'block';
    document.getElementById('message').textContent = `I'm thinking of a number between 1 and ${maxNumber}`;
    document.getElementById('message').className = '';
    document.getElementById('guess').focus();
}

function checkGuess() {
    const guessInput = document.getElementById('guess');
    const guess = parseInt(guessInput.value);
    const messageDiv = document.getElementById('message');

    if (isNaN(guess) || guess < 1 || guess > maxNumber) {
        messageDiv.textContent = `Please enter a valid number between 1 and ${maxNumber}`;
        messageDiv.className = 'hint';
        return;
    }

    attempts++;

    if (guess === randomNumber) {
        messageDiv.textContent = `Congratulations! You got it right in ${attempts} attempts! The number was ${randomNumber}`;
        messageDiv.className = 'success';
        document.getElementById('guess').disabled = true;
    } else if (guess < randomNumber) {
        messageDiv.textContent = 'Hint: Your guess is too small, try again';
        messageDiv.className = 'hint';
        guessInput.value = '';
        guessInput.focus();
    } else {
        messageDiv.textContent = 'Hint: Your guess is too large, try again';
        messageDiv.className = 'hint';
        guessInput.value = '';
        guessInput.focus();
    }
}

function quitGame() {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = `Game Over! The number was ${randomNumber}`;
    messageDiv.className = 'hint';
    document.getElementById('guess').disabled = true;
}

// Allow Enter key to submit guess
document.getElementById('guess').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        checkGuess();
    }
});

// Allow Enter key to start game
document.getElementById('max-number').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        startGame();
    }
});
