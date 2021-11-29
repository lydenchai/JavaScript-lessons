let fruitLib = require("./fruitsLib.js");

// ---------- TEST  ----------------------------------------------------------

fruitLib.addFruit("banana", "yellow", 12);
fruitLib.addFruit("apple", "red", 20);
fruitLib.addFruit("mango", "green", 20);
fruitLib.listFruits();

console.log("banana price is :" + fruitLib.getPriceOf("banana"));
console.log("mango color is :" + fruitLib.getColorOf("mango"));

// Save fruits
fruitLib.save();
