

const game = new Game();

game.phrases.forEach((phrase,index) => {
    console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
});

const logPhrase = phrase => {
    console.log(`Phrase - phrase: ${phrase.phrase}`);
};


console.log(logPhrase(game.getRandomPhrase()));
console.log(logPhrase(game.getRandomPhrase()));
console.log(logPhrase(game.getRandomPhrase()));
console.log(logPhrase(game.getRandomPhrase()));
console.log(logPhrase(game.getRandomPhrase()));
