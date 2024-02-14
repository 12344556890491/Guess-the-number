const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

document.getElementById('submit').addEventListener('click', function() {
    const guess = document.getElementById('guess').value;
    if (guess === '' || isNaN(guess)) {
        alert('Please enter a valid number.');
        return;
    }
    attempts++;
    if (guess == randomNumber) {
        document.getElementById('result').innerHTML = `Congratulations! You guessed the number in ${attempts} attempts.`;
        document.getElementById('submit').setAttribute('disabled', 'true');
    } else if (guess < randomNumber) {
        document.getElementById('result').innerHTML = 'Try a higher number.';
    } else {
        document.getElementById('result').innerHTML = 'Try a lower number.';
    }
});

document.getElementById('reset').addEventListener('click', function() {
    attempts = 0;
    document.getElementById('result').innerHTML = '';
    document.getElementById('submit').removeAttribute('disabled');
    document.getElementById('guess').value = '';
});

