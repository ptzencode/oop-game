
//start game with button click
let game = null;
document.getElementById('btn__reset').addEventListener('click', function() {
    if(game){
        game.resetGame();
        game = null;
    }
    game = new Game();
    game.startGame();
});

//enable click for onscreen buttons
document.getElementById('qwerty').addEventListener('click',function(e){
    let isButton = e.target;
    if(isButton.tagName === 'BUTTON' && isButton.className === 'key'){
        game.handleInteraction(isButton);
    }
});

//enable keyboard interaction for game
document.addEventListener('keyup',function(e){
    let key = e.key;
    let buttons = document.querySelectorAll('#qwerty button.key');
    let clickedButton = null;
    buttons.forEach(button => {
        if(button.textContent === key){
            clickedButton = button;
        }
    });
    if(clickedButton){
        game.handleInteraction(clickedButton);
    }
});

