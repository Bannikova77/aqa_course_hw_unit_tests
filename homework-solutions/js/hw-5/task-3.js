/**
 * Создать строку с информацией о количестве гласных и согласных букв в слове.
 * Переменная `word` уже создана и содержит строку со словом.
 * Ожидаемый результат для `hello`: "hello contains 2 vowels and 3 consonants".
 */
const word = 'hello';

let vowelsAndConsonantsResult = '';

const vowels = 'aeiou';
let vowelCount = 0;
let consonantCount = 0;

for (let char of word.toLowerCase()) {
  if (vowels.includes(char)) {
    vowelCount++;
  } else if (/[a-z]/.test(char)) { // ensure only letters are counted as consonants
    consonantCount++;
  }
}

vowelsAndConsonantsResult = `${word} contains ${vowelCount} vowels and ${consonantCount} consonants`;


export { vowelsAndConsonantsResult };
