const gameSummary = {
    numbers: 0,
    wins: 0,
    loses: 0,
    draws: 0
}

const game = {
    playerHand: null,
    aiHand: null
}

const hands = document.querySelectorAll('img');

function handSelection() {
    game.playerHand = this.dataset.option;
    hands.forEach(hand => hand.style.boxShadow = '');
    this.style.boxShadow = '0 0 0 10px yellow';
    console.log(game.playerHand);
}

const btn = document.querySelector('button');

function aiChoice() {
    const choice = hands[Math.floor(Math.random() * hands.length)].dataset.option;
    return choice;
}

function checkResult(player, ai) {
    if (player === ai) {
        return 'draw';
    } else if ((player === 'paper' && ai === 'rock') || (player === 'scissors' && ai === 'paper') || (player === 'rock' && ai === 'scissors')) {
        return 'win';
    } else {
        return 'lose';
    }
}

function displayResults(result, player, ai) {
    document.querySelector('[data-summary="your-choice"]').textContent = player;
    document.querySelector('[data-summary="ai-choice"]').textContent = ai;

    document.querySelector('p.numbers span').textContent = ++gameSummary.numbers;
    if (result === 'draw') {
        document.querySelector('p.draws span').textContent = ++gameSummary.draws;
        document.querySelector('[data-summary="who-win"]').style.color = 'cadetblue';
        document.querySelector('[data-summary="who-win"]').textContent = 'remis';
    } else if (result === 'win') {
        document.querySelector('p.wins span').textContent = ++gameSummary.wins;
        document.querySelector('[data-summary="who-win"]').style.color = 'green';
        document.querySelector('[data-summary="who-win"]').textContent = 'TY!!!';
    } else {
        document.querySelector('p.loses span').textContent = ++gameSummary.loses;
        document.querySelector('[data-summary="who-win"]').style.color = 'red';
        document.querySelector('[data-summary="who-win"]').textContent = 'komputer :(';
    }
}

function resetChoice() {
    document.querySelector(`[data-option="${game.playerHand}"]`).style.boxShadow = '';
    game.playerHand = null;
    game.aiHand = null;
}

function letsPlay() {
    if (!game.playerHand) {
        return alert("Nie wybrano");
    }
    game.aiHand = aiChoice();
    const gameResult = checkResult(game.playerHand, game.aiHand);
    displayResults(gameResult, game.playerHand, game.aiHand);
    resetChoice();
}


btn.addEventListener('click', letsPlay);
hands.forEach(hand => hand.addEventListener('click', handSelection));