class Game {
    constructor(start) {
        this.wallet = new Wallet(start);
        this.stats = new Statistics();
        this.boards = document.querySelectorAll('.color');
        this.inputBid = document.getElementById('bid');
        document.getElementById('start').addEventListener('click', this.startGame.bind(this));
        this.spanWallet = document.querySelector('.wallet');
        this.spanResult = document.querySelector('.result');
        this.spanGames = document.querySelector('.number');
        this.spanWins = document.querySelector('.win');
        this.spanLosses = document.querySelector('.lose');
        this.render()
    }
    render(colors = ['grey', 'grey', 'grey'], money = this.wallet.getWalletValue(), result = '', stats = [0, 0, 0], bid = 0, wonMoney = 0) {
        this.boards.forEach((board, index) => board.style.backgroundColor = colors[index]);
        this.spanWallet.textContent = money;
        if (result) {
            result = `Wygrałeś ${wonMoney}$`;
        } else if (!result && result !== '') {
            result = `Przegrałeś ${bid}$`
        }
        this.spanResult.textContent = result;
        this.spanGames.textContent = stats[0];
        this.spanWins.textContent = stats[1];
        this.spanLosses.textContent = stats[2];
        this.inputBid.value = '';
    }
    startGame() {
        if (this.inputBid.value < 1) return alert('stawka jest za mała');
        const bid = parseInt(this.inputBid.value);
        if (!this.wallet.checkCanPlay(bid)) return alert('Masz za mało środków lub wartość jest nieprawidłowa');
        this.wallet.changeWallet(bid, '-');
        this.draw = new Draw();
        const colors = this.draw.getDrawResult();
        const win = Result.checkWinner(colors);
        const wonMoney = Result.moneyWinInGame(win, bid);
        this.wallet.changeWallet(wonMoney);
        this.stats.addGameToStatistics(win, bid)
        this.render(colors, this.wallet.getWalletValue(), win, this.stats.showGamesStatistics(), bid, wonMoney)
    }
}