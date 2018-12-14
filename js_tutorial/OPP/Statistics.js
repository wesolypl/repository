class Statistics {
    constructor() {
        this.gameResults = [];
    }
    addGameToStatistics(win, bid) {
        let gameResult = {
            win: win,
            bid: bid
        }
        // console.log(gameResult);
        this.gameResults.push(gameResult);
    }
    showGamesStatistics() {
        let games = this.gameResults.length;
        let wins = this.gameResults.filter(result => result.win).length;
        let losses = this.gameResults.filter(result => !result.win).length;
        return [games, wins, losses];
    }
}

const stats = new Statistics();