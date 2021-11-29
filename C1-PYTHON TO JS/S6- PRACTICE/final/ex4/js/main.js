let names = ["Romdul", "Kolap", "Romchong"];
let countries = ["Canada", "Cambodia", "Thai"];
let majors = ["SNA", "WEB", "Database"];

let newArr = [];

for (let i = 0; i < countries.length; i++){
    newArr.push({ names: names[i], countries: countries[i], majors: majors[i] });
}
console.log(newArr);