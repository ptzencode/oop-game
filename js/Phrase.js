
class Phrase {

    constructor(phrase){
        this.phrase = phrase.toLowerCase();
    }

    /**
     * Display phrase on game board
     */
    addPhraseToDisplay() {
        const phrase = this.phrase;
        const ul = document.querySelector('#phrase ul');

        for(let i=0;i<phrase.length;i++){
            let li = document.createElement('li');
            let char = phrase.charAt(i);
            li.textContent = char;

            if(char === " "){
                li.className = 'space';
            } else {
                li.classList.add('hide', 'letter', char);
            }
            ul.appendChild(li);
        }
    }

    /**
    * Checks if passed letter is in phrase
    * @param (string) letter - Letter to check
    */
    checkLetter(letter) {
        let match = this.phrase.indexOf(letter);
        if(match !== -1){
            console.log(`${letter} found at index: ${match}`);
        }
    }

}
