// Fieldset----------------------------------

// const fieldset = document.createElement("fieldset");
// fieldset.textContent = "Hello World";

// const legend = document.createElement("legend");
// legend.textContent = "Title";

// fieldset.appendChild(legend);
// document.body.appendChild(fieldset);


// Input----------------------------------

// const input = document.createElement("input");
// input.setAttribute("type", "checkbox");
// input.setAttribute("id", "lesson");
// input.setAttribute("name", "book");
// input.setAttribute("value", "book one");

// const lebel = document.createElement("label");
// lebel.textContent = "Book One";
// lebel.setAttribute("for", "lesson");

// document.body.appendChild(input);
// document.body.appendChild(lebel);


// Vidoe-----------------------------------

// const video = document.createElement("video");
// video.src = "myVideo.mp4";
// video.style.width = "1000px";
// video.setAttribute("controls", "");

// const audio = document.createElement("audio");
// audio.src = "boom.mp3";
// audio.style.width = "1000px";
// audio.setAttribute("controls", "");
// document.body.appendChild(audio);
// document.body.appendChild(video);

// remove-------------------------------
// const h1 = document.querySelector("h1");
// h1.remove();

// const newH1 =document.createElement("h1")
// newH1.textContent = "New H1";
// document.body.appendChild(newH1);

// const lis = document.querySelectorAll("li");
// for(li of lis){
//     lis.remove();
// }
// document.body.appendChild(lis);

// DOM with Data Structure--------------

let data = {name : "romdul", age: 18, grade: 10};
const ul = document.querySelector("ul");
for (let user of data){
    const line = document.querySelector("hr");
    const names = document.createElement("li");
    names.textContent = user.name;

    const ages = document.createElement("li");
    ages.textContent = user.age;

    ul.appendChild(names);
    ul.appendChild(ages);
    ul.appendChild(line);
}