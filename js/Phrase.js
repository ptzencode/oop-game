
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
    * @return {boolean} True if letter found in phrase
    */
    checkLetter(letter) {
        let match = this.phrase.indexOf(letter);
        if(match !== -1){
            console.log(`${letter} found at index: ${match}`);
            return true;
        }
    }

    /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */
    showMatchedLetter(letter) {
        let list = document.querySelectorAll('#phrase ul li');

        for(let li of list){
            if(li.classList.contains(letter)){
                li.classList.replace('hide','show');
            }
        }
    }

}
