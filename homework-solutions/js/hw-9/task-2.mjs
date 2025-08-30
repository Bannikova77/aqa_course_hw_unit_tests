/*
 1. Напишите функцию addCharacter(character) позволяющую добавить новый объект в массив characters. 
     Объект должен иметь поля name (string) и age (number)
 2. Напишите функцию getCharacter(name), позволяющую получить объект персонажа по его имени// getCharacter('Fred') => { 'name': 'Fred', 'age': 40 }
 3. Напишите функцию getCharactersByAge(minAge), возвращающую массив персонажей НЕ МЛАДШЕ minAge // getCharactersByAge(40) => [{ 'name': 'Fred', 'age': 40 },{ 'name': 'Jack', 'age': 50 }]
 4. Напишите функцию updateCharacter(name, newCharacter). (Методом getCharacter(name) получаем ссыклку на нужного персонажа, а потом меняем ему данные)
 5. Напишите функцию для удаления персонажа removeCharacter(name) (Реализовать через splice, индекс персонажа искать методом findInxex)
 */

const characters = [
  { name: 'Barney', age: 35 },
  { name: 'Fred', age: 39 },
  { name: 'Jack', age: 49 },
];

function addCharacter(character) {
  if (
    !character || typeof character.name !== 'string' || typeof character.age !== 'number'
  ) {
    throw new Error('Invalid character');
  }
  characters.push(character);
  return characters;
}

function getCharacter(name) {
  return characters.find(char => char.name === name);
}

function getCharactersByAge(minAge) {
  if (typeof minAge !== 'number') {
    throw new Error('Invalid age');
  }
  return characters.filter(char => char.age >= minAge);
}

function updateCharacter(name, newCharacter) {
  const char = getCharacter(name); 
  if (!char) {
    throw new Error('Character not found');
  }
    char.name = newCharacter.name ?? char.name;
    char.age = newCharacter.age ?? char.age;
  return char;
}

function removeCharacter(name) {
   const index = characters.findIndex(char => char.name === name);
  if (index === -1) {
    throw new Error('Character not found');
  }
  characters.splice(index, 1);
  return characters;
}

export { characters, addCharacter, updateCharacter, getCharacter, getCharactersByAge, removeCharacter };
