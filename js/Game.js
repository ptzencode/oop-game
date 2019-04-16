
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

}