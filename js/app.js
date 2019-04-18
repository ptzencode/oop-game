
//start game with button click
var game;
document.getElementById('btn__reset').addEventListener('click', function() {
    game = new Game();
    game.startGame();

    console.log(`Active phrase - phrase: ${game.activePhrase.phrase}`);
    console.log(`checkLetter ${game.activePhrase.checkLetter('a')}`);
    console.log(`showMatchedLetter ${game.activePhrase.showMatchedLetter('a')}`);
    console.log(`checkForWin ${game.checkForWin()}`);
    console.log(`removeLife ${game.removeLife()}`);
});