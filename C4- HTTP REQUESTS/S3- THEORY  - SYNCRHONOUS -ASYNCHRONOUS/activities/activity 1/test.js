setTimeout(() => {
  setTimeout(() => {
    console.log("APPLE");
  }, 1000);
  console.log("BANANA");
}, 3000);

setTimeout(() => {
  console.log("LEMON");
}, 3000);

console.log("MANGO");

setTimeout(() => {
  console.log("APPLE");
}, 2000);

console.log("JACKFRUIT");
