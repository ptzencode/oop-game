
//start game with button click
let game = null;
document.getElementById('btn__reset').addEventListener('click', function() {
    game = new Game();
    game.startGame();
});

document.getElementById('qwerty').addEventListener('click',function(e){
    let isButton = e.target;
    if(isButton.tagName === 'BUTTON' && isButton.className === 'key'){
        game.handleInteraction(isButton);
    }
});

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

