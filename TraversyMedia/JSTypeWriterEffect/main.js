// const TypeWriter = function(txtElement, words, waitTime = 3000){
//     this.txtElement = txtElement;
//     this.words = words;
//     this.txt = '';
//     this.wordIndex = 0;
//     this.waitTime = parseInt(waitTime, 10);
//     this.type();
//     this.isDeleting = false;
// }

// //type method
// TypeWriter.prototype.type = function(){
//     // console.log('hello');
//     // current index of word
//     const current = this.wordIndex % this.words.length;
//     //get full text of current word
//     const fullTxt = this.words[current];

//     //check if deleting
//     if(this.isDeleting){
//         //remove char
//         this.txt = fullTxt.substring(0, this.txt.length - 1);
//     }else{
//         //add char
//         this.txt = fullTxt.substring(0, this.txt.length + 1);
//     }

//     //insert txt into element
//     this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

//     //initial type speed
//     let typeSpeed = 300;

//     if(this.isDeleting){
//         typeSpeed /= 2;
//     }

//     //if word is complete
//     if(!this.isDeleting && this.txt === fullTxt){
//         //make pause at end
//         typeSpeed = this.waitTime;
//         //set delete to true
//         this.isDeleting = true;
//     }else if(this.isDeleting & this.txt === ''){
//         this.isDeleting = false;
//         //move to next word
//         this.wordIndex++;
//         //pause before start typing
//         typeSpeed = 500; 
//     }

//     // console.log(fullTxt);

//     setTimeout(()=> this.type(), typeSpeed);
// }


// init on dom load
document.addEventListener('DOMContentLoaded', init);

// ES6 Class
class TypeWriter{

    constructor(txtElement, words, waitTime = 3000){
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.waitTime = parseInt(waitTime, 10);
        this.type();
        this.isDeleting = false;
    }

    type(){
        // console.log('hello');
        // current index of word
        const current = this.wordIndex % this.words.length;
        //get full text of current word
        const fullTxt = this.words[current];

        //check if deleting
        if(this.isDeleting){
            //remove char
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        }else{
            //add char
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        //insert txt into element
        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

        //initial type speed
        let typeSpeed = 300;

        if(this.isDeleting){
            typeSpeed /= 3;
        }

        //if word is complete
        if(!this.isDeleting && this.txt === fullTxt){
            //make pause at end
            typeSpeed = this.waitTime;
            //set delete to true
            this.isDeleting = true;
        }else if(this.isDeleting & this.txt === ''){
            this.isDeleting = false;
            //move to next word
            this.wordIndex++;
            //pause before start typing
            typeSpeed = 500; 
        }

        // console.log(fullTxt);

        setTimeout(()=> this.type(), typeSpeed);
    }
}

//init app
function init(){
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const waitTime = txtElement.getAttribute('data-wait');

    new TypeWriter(txtElement, words, waitTime);
}
