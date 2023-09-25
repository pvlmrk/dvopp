// Array

const myArray = ["Lodash", "React", "Next", "Strapi", "Axios", "Typescript"];
for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}
const reversedArray = myArray.reverse();
console.log(reversedArray);
const sortedArray = myArray.sort();
console.log(sortedArray);

// Object

const car = {
  Brand: "Tesla",
  Model: "Model 3",
  Year: 2021
};
const {
  Brand,
  Model,
  Year
} = car;
console.log(`Značka: ${Brand}, Model: ${Model}, Rok: ${Year}`);

// Generator

const rndNum = Math.floor(Math.random() * 556);
console.log(`Náhodné číslo je: ${rndNum}`);