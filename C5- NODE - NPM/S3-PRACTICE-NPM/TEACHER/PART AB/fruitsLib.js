const FRUIT_FILE = "fruits.json";

/**
 * TODO
 * Import the library fs  to be able to read/write files
 */
const fs = require("fs");

// ---------- FUNCTIONS ----------------------------------------------------------
/**
 * TODO
 * Each fruit is an OBJECT composed of:
 * - the name of the fruit  (string)
 * - the color of the fruit  (string)
 * - the price of the fruit  (integer)
 */
let fruits = [];

/**
 * Add a new fruit
 * @param fruit name
 * @param fruit color
 * @param fruit price
 */
function addFruit(fruitName, fruitColor, fruitPrice) {
  let newFruit = {
    name: fruitName,
    color: fruitColor,
    price: fruitPrice,
  };
  fruits.push(newFruit);

  console.log("fruit added:  " + fruitName);
}

function getColorOf(fruitName) {
  for (fruit of fruits) {
    if (fruitName === fruit.name) {
      return fruit.color;
    }
  }
  return null;
}

function getPriceOf(fruitName) {
  for (fruit of fruits) {
    if (fruitName === fruit.name) {
      return fruit.price;
    }
  }
  return null;
}

function listFruits() {
  let toDisplay = "Here are the fruits:\n";
  for (fruit of fruits) {
    toDisplay += fruit.name + "\n";
  }
  console.log(toDisplay);
}

function save() {
  fs.writeFileSync(FRUIT_FILE, JSON.stringify(fruits));
  console.log("fruits saved");
}

function load() {
  fruits = JSON.parse(fs.readFileSync(FRUIT_FILE));
  console.log("fruits loaded");
}

// ---------- TEST  ----------------------------------------------------------

addFruit("banana", "yellow", 12);
addFruit("apple", "red", 20);
addFruit("mango", "green", 20);
listFruits();

console.log("banana price is :" + getPriceOf("banana"));
console.log("mango color is :" + getColorOf("mango"));

// Save fruits
save();
