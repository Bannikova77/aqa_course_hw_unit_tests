/*
 1. isPalindrom
 Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/

function isPalindrom(word) {

  if (typeof word !== 'string') return false; 
  if (word === '') return true;  

  const normalized = word.toLowerCase();          
  const reversed = normalized.split('').reverse().join('');

  return normalized === reversed;
}


/*
 2. findLongestWords()
 Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
 и возвращает слово с наибольшим количеством букв. 
 Если таких слов несколько - возвращает их все.
*/

function findLongestWords(sentence) {
  if (typeof sentence !== 'string') return []; 
  const trimmed = sentence.trim();
  if (trimmed === '') return [];              

  const words = trimmed.split(/\s+/);          
  let maxLength = 0;

  for (const word of words) {
    if (word.length > maxLength) {
      maxLength = word.length;
    }
  }

  return words.filter(word => word.length === maxLength);
}


export { isPalindrom, findLongestWords };
