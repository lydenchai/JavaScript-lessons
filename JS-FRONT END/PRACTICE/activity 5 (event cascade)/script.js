const grandParent = document.querySelector(".grandParent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

document.addEventListener("click", e =>{
    console.log("Document");
});

grandParent.addEventListener("click", e => {
    console.log("Granparent");
});

parent.addEventListener("click", e => {
    console.log("Parent");
});

child.addEventListener("click", e => {
    console.log("Child");
});


document.addEventListener("click", e =>{
    console.log("Document");
}, {
    capture: true
});
grandParent.addEventListener("click", e => {
    console.log("Granparent");
}, {
    capture: true
});

parent.addEventListener("click", e => {
    console.log("Parent");
}, {
    capture: true
});

child.addEventListener("click", e => {
    console.log("Child");
}, {
    capture: true
});