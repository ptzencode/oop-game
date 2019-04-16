
//start game with button click
var game;
document.getElementById('btn__reset').addEventListener('click', function() {
    game = new Game();
    game.startGame();
    console.log(`Active phrase - phrase: ${game.activePhrase.phrase}`);
});