// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'

function longestWord(sen) {
  // SOLUTION 1 - Return a single longest word
  /*
  let str = sen.split(' ');
  console.log(str);
  let tab = [];
  let i;
  for( i = 0; i < str.length; i++){
    let t = str[i];
    if(t.length > tab.length){
      tab = t;
    }
  }
  return console.log(tab.toString());
  */

  // SOLUTION 2 - Return an array and include multiple words if they have the same length
  /*
  let str = sen.split(' ');
  let tab = [];
  let tabel = [];
  let i;
  for( i = 0; i < str.length; i++){
    let t = str[i];
    if(t.length > tab.length){
      tab = t;
    }
    tabel = str.filter((val) => {
      return val.length === tab.length;
    })
  }
    return console.log(tabel);
  */

  // SOLUTION 3 - Only return an array if multiple words, otherwise return a string
  let str = sen.split(' ');
  let tab = [];
  let tabel = [];
  let i;
  for( i = 0; i < str.length; i++){
    let t = str[i];
    if(t.length > tab.length){
      tab = t;
    }
    tabel = str.filter((val) => {
      return val.length === tab.length;
    })
  }
  if(tabel.length > 1){
    return console.log(tabel);
  }else {
    return console.log(tab.toString());
  }
}


// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

function chunkArray(arr, len) {}

// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

function flattenArray(arrays) {}

// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

function isAnagram(str1, str2) {}

// CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'

function letterChanges(str) {}

// Call Function
const output = longestWord('Hello, hello, hello, onomatopeja, my name is Brad');

// console.log(output);