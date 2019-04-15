
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
            //console.log(`char at index ${i} is ${char}`);
            if(char === " "){
                li.className = 'space';
            } else {
                li.classList.add('hide', 'letter', char);
            }
            ul.appendChild(li);
        }
    }

}

/*

<div id="phrase" class="section">
    <ul>
        <li class="hide letter h">h</li>
        <li class="hide letter o">o</li>
        <li class="hide letter w">w</li>
        <li class="space"> </li>
        <li class="hide letter a">a</li>
        <li class="hide letter r">r</li>
        <li class="hide letter e">e</li>
        <li class="space"> </li>
        <li class="hide letter y">y</li>
        <li class="hide letter o">o</li>
        <li class="hide letter u">u</li>
    </ul>
</div>

*/