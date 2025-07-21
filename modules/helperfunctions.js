'use strict';

// CAPITALIZES SINGLE WORD (FIRST LETTER UPPERCASE) //
const capitalizeWord = function (word) {
  // split word into letters
  const letters = word.split('');
  // capitalize first letter
  letters[0] = letters[0].toUpperCase();
  // optional: make other letters lowercase
  for (let i = 1; i < letters.length; i++) {
    letters[i] = letters[i].toLowerCase();
  }
  // join letters back into a word and return it
  return letters.join('');
};

// CAPITALIZES STRING (FIRST LETTER OF EACH WORD)
const capitalizeString = function (str) {
  // split string into words, separator is space
  const words = str.split(' ');
  // capitalize each word
  for (let i = 0; i < words.length; i++) words[i] = capitalizeWord(words[i]);
  // join words back into string and return it
  return words.join(' ');
};

// ***************************** //

// COUNTS OCCURRENCES OF SUBSTRING IN STRING
const countOccurrences = (str, substr) => str.split(substr).length - 1;

// FINDS AND REPLACES ALL OCCURRENCES OF ONE SUBSTRING WITH ANOTHER
const findAndReplace = function (str, substr1, substr2) {
  while (str.includes(substr1)) {
    str = str.replace(substr1, substr2);
  }
  return str;
};

// ***************************** //

// RETURNS REVERSED ARRAY WITHOUT MODIFYING ORIGINAL
const reverseArray = function (array) {
  const reversed = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reversed.push(array[i]);
  }
  return reversed;
};

// ***************************** //

// RETURNS RANDOM WHOLE NUMBER IN RANGE
const randomNumberGenerator = function (start, end) {
  if (typeof start !== 'number' || typeof end !== 'number') {
    throw new Error('Both start and end must be numbers.');
  }
  if (!Number.isInteger(start) || !Number.isInteger(end)) {
    throw new Error('Both start and end must be integers.');
  }
  if (start > end) {
    [start, end] = [end, start]; // swap if start is greater than end
  }

  return Math.floor(Math.random() * (end - start + 1)) + start;
};

// RETURNS RANDOM ITEM FROM ARRAY OR NUMERICALLY KEYED OBJECT
function getRandomItem(data) {
  if (Array.isArray(data)) {
    if (data.length === 0) throw new Error('Array is empty.');
    const index = Math.floor(Math.random() * data.length);
    return data[index];
  } else if (typeof data === 'object' && data !== null) {
    const keys = Object.keys(data).filter(k => !isNaN(k));
    if (keys.length === 0) throw new Error('Object has no numeric keys.');
    const numericKeys = keys.map(Number);
    const randomKey =
      numericKeys[Math.floor(Math.random() * numericKeys.length)];
    return data[randomKey];
  } else {
    throw new Error('Input must be an array or an object with numeric keys.');
  }
}

export {
  capitalizeWord,
  capitalizeString,
  countOccurrences,
  findAndReplace,
  reverseArray,
  randomNumberGenerator,
  getRandomItem,
};
