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

function chunkArray(arr, len) {
  let i = 0;
  let t = [];
  let t2 = [];

  for(i = 0; i < arr.length; i++){
    t.push(arr[i]);
    if(t.length === len){
      t2.push(t);
      t = [];
    }else if( i === arr.length-1){
      t2.push(t);
    }
  }
  return console.log(t2);
}

// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

function flattenArray(arrays) {
  let arr = [];
  let i, j;

  for( i = 0; i < arrays.length; i++){
    for(j = 0; j < arrays[i].length; j++){
      arr.push(arrays[i][j]);
    }
  }
  return console.log(arr);
}

// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

function isAnagram(str1, str2) {
  let tab1 = str1.toLowerCase().split('').sort().filter( (value) => {
    return value != ' ';
  });

  let tab2 = str2.toLowerCase().split('').sort().filter( (value) => {
    return value != ' ';
  });

  let tr = 0, fa = 0, i;
  for( i = 0; i < tab1.length; i++){
    if(tab1[i] === tab2[i]){
      tr++;
    }else{
      fa++;
    }
  }

  if(tr === tab1.length){
    return true;
  }else{
    return false;
  }
}

// CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'

function letterChanges(str) {
  let i, lett, lett2, end = '', words = ' ';

  for( i = 0; i < str.length; i++){
    lett = str.charCodeAt(i);
    letter = str.charAt(i);

    if(letter!== ' '){
      if(lett >= 122){
        lett = 97;
        lett2 = String.fromCharCode(lett);
        if(lett2 === 'u' || lett2 === 'i' || lett2 === 'a' || lett2 === 'e' || lett2 === 'o' ){
          words += end.concat(lett2.toUpperCase());
        }else{
          words += end.concat(lett2);
        }
      }else{
        lett2 = String.fromCharCode(lett+1);
        if(lett2 === 'u' || lett2 === 'i' || lett2 === 'a' || lett2 === 'e' || lett2 === 'o' ){
          words += end.concat(lett2.toUpperCase());
        }else{
          words += end.concat(lett2);
        }
      }

    }else{
      words += end.concat(' ');
    }
  }
  console.log(words);
}

// Call Function

// console.log(output);