// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
  var revStr = "";
  var i;
  for (i = str.length; i >= 0; i--) {
    revStr += str.charAt(i);
  }
  return revStr;
}

// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {
    let i, j, a, b;
    let sum = 0;

  for(i = 0, j = str.length-1; i < str.length, j >= 0; i++, j--){
      b = str.charAt(j);
      a = str.charAt(i);
    if(a.toLowerCase() === b.toLowerCase()){
      sum++;
    }
  }

  if(sum === str.length){
    return true;
  } else {
    return false;
  }
}

// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {
  let a = int.toString();
  // console.log(a);
  let newInt = [];
  let i;
  for(i = a.length; i >= 0 ; i--){
    newInt += a.charAt(i);
  }
  return parseInt(newInt);
}

// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'

function capitalizeLetters(str) {
  var capLet = "";
  var i;
  capLet += str.charAt(0).toUpperCase();
  for (i = 1; i < str.length; i++) {
    if(str.charAt(i-1) === ' '){
      capLet += str.charAt(i).toUpperCase();
    }else{
      capLet += str.charAt(i);
    }
  }
  return capLet;
}

// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) {
  let tab = str.split('');
  let tab2 = [];
  console.log(tab);
  let letter;
  let i, x;
  for(i = 0; i < tab.length-1; i++){
    x = tab[i];
    letter = tab.filter((val) => {
      return val === x;
    });
    if(letter.length > tab2.length){
      tab2 = letter;
    }
  };
  return tab2[0];
}

// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {
  let i = 0;
  for(i = 1; i <= 100; i++){
    if((i%3 == 0) && (i%5 == 0)){
      console.log("FizzBuzz");
    } else if((i%5 == 0)&&(i%3 !== 0)){
      console.log("Buzz");
    } else if ((i%3 == 0)&&(i%5 !== 0)){
      console.log("Fizz");
    }else{
      console.log(i);
    }
  }
}

