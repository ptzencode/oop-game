
class Game {

    constructor(){
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }

    /**
    * Creates phrases for use in game
    * @return {array} An array of phrases that could be used in the game
    */
    createPhrases(){
        const phraseObjList = [];
        const phraseStrList = [
        'A Piece of Cake',
        'Cup of Joe',
        'Down To Earth',
        'My Cup Of Tea',
        'Happy As a Clam',
        'Quality Time',
        'Rule of Thumb',
        'Two Peas In a Pod',
        'Right Off The Bat'
        ];

        phraseStrList.forEach(phrase => {
            phraseObjList.push(new Phrase(phrase));
        });

        return phraseObjList;
    }

    /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */
    getRandomPhrase() {
        let randomNum = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomNum];
    }

    /**
    * Begins game by selecting a random phrase and displaying it to user
    */
    startGame() {
        document.getElementById('overlay').style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't won
    */
    checkForWin() {
        if(this.activePhrase){
            let list = document.querySelectorAll('#phrase ul li');

            for(let li of list){
                if(li.classList.contains('hide')){
                    return false;
                }
            }
            return true;
        }
    }

    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
    removeLife() {
        this.missed += 1;
        let listScore = document.querySelectorAll('#scoreboard ol li');
        for(let i=0; i<listScore.length; i++){
            if(i === this.missed-1){
                let img = listScore[i].querySelector('img');
                img.setAttribute('src','images/lostHeart.png');
            }
        }
        if(this.missed === listScore.length){
            this.gameOver(false);
        }

    }

    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(gameWon) {
        const overlay = document.getElementById('overlay');

        let gameOverMessage = '';
        if(gameWon){
            gameOverMessage = 'Great Job, you won!';
            overlay.className = 'win';
        } else {
            gameOverMessage = 'Sorry, you lost!';
            overlay.className = 'lose';
        }
        document.getElementById('game-over-message').textContent = gameOverMessage;

        overlay.style.display = 'flex';
    }

    /**
    * Handles onscreen keyboard button clicks
    * @param (HTMLButtonElement) button - The clicked button element
    */
    handleInteraction(button) {
        let letter = button.textContent;
        let isLetterInPhrase = false;
        button.disabled = true;
        if(this.activePhrase){
            isLetterInPhrase = this.activePhrase.checkLetter(letter);
            if(isLetterInPhrase){
                button.classList.add('chosen');
                this.activePhrase.showMatchedLetter(letter);
                if(this.checkForWin()){
                    this.gameOver(true);
                }
            } else {
                button.classList.add('wrong');
                this.removeLife();
            }
        }
    }

}