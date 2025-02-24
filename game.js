class Player {
    constructor(name) {
        this.name = name;
        this.score = 0;
    }

    attemptsOfEach(successRate) {
        if (Math.random() < successRate) {
            this.score++;
            return true; 
        }
        return false;
    }
}

function chance() {
    return Math.random() * 0.5 + 0.5; 
}

function gamePlay(players, attemptsOfEach, round = 1) {
    console.log(`\n🏀 Round ${round} Begins!`);
    
    players.forEach(player => {
        let successRate = chance();
        let shots = 0;

        for (let i = 0; i < attemptsOfEach; i++) {
            if (player.attemptsOfEach(successRate)) {
                shots++; 
            }
        }
        
        console.log(`${player.name} scored ${shots} successful shots.`);
    });
}

function standings(players) {
    return players.sort((a, b) => b.score - a.score);
}

function playerWinners(players) {
    let topScore = players[0].score;
    let winners = players.filter(player => player.score === topScore);

    console.log("\n🏆 Rankings after this round:");
    players.forEach((player, index) => {
        console.log(`${index + 1}. ${player.name} - ${player.score} points`);
    });

    if (winners.length > 1) {
        console.log("\n🔥 Tie-breaker needed between: ", winners.map(p => p.name).join(", "));
        tieBreaker(winners);
    } else {
        console.log(`\n🏆 The champion is ${winners[0].name} with ${winners[0].score} points! `);
    }
}


function tieBreaker(players, round = 2) {
    while (players.length > 1) {
        console.log(`\n🔥 Tiebreaker Round ${round} Begins!`);
        
        players.forEach(player => player.score = 0); 
        gamePlay(players, 5, round);
        standings(players);
        
        playerWinners(players); 
        
        
        let topScore = players[0].score;
        players = players.filter(player => player.score === topScore);

        // Increase round number if still tied
        if (players.length > 1) {
            round++; 
            console.log("🔁 Another tiebreaker round needed!");
        } else {
            return; 
        }
    }
}

let players = [
    new Player("James"),
    new Player("Curry"),
    new Player("Jordan"),
    new Player("Bryant"),
    new Player("Durant"),
];

console.log("🏀 Game Start!");
gamePlay(players, 10); 
standings(players);
playerWinners(players);
