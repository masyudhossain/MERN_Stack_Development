/* Create a business name generator by combining list of adjectives and shop name and another word
without using array

Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub



*/
let objAdjective = {
  1: "Crazy",
  2: "Amazing",
  3: "Fire",
};

let objShopName = {
  1: "Engine",
  2: "Food",
  3: "Garments",
};

let objAnotherWord = {
  1: "Bros",
  2: "Limited",
  3: "Hub",
};

function getRandomKey() {
  return Math.floor(Math.random() * 3) + 1;
}

function businessNameGenerator() {
  let adj = objAdjective[getRandomKey()];
  let shop = objShopName[getRandomKey()];
  let word = objAnotherWord[getRandomKey()];

  console.log(`${adj} ${shop} ${word}`);
}

businessNameGenerator();
// console.log(Math.floor(Math.random() * 4) + 1);
