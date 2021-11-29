
// ******** NOTE***************************
// For each exercices, you code shall work for all the test cases !!

// ------------------------------------------------------------------------------
//	EXERCICE 1 
// ------------------------------------------------------------------------------

// Input to test

// let array = [] ;
// let index1=0;
// let index2=0;
// let countGreater=0
// let result=""
// for(index in array){
//     index2=index;
//     if (index>=1){
//         if (array[index2]>array[index1]){
//             countGreater+=1
//         }
//         index1=index2
//     }
// };
// if(countGreater+1==array.length){
//     result="Valid array"
// }
// else if(array.length==0){
//     result="This array is empty. "
// }
// else{
//     result="Invalid array"
// }
// console.log(result)


// Write your code here



// ------------------------------------------------------------------------------
//	EXERCICE 2 
// ------------------------------------------------------------------------------

// Input to test

// let ex2-testCase1 = "hello! welcome to web programing at pnc"
// let ex2-testCase2 = "him is cute girl"
// let ex2-testCase3 = ""
 

// Write your code here


// ------------------------------------------------------------------------------
//	EXERCICE 3
// ------------------------------------------------------------------------------

// Input to test

// let array = [2.2, 23.4, 3, 33, 10, 50, 90];
// let myarr = [];
// for ( index in array){
//     if (array [index] %1 === 0){
//         myarr.push(array[index]); 
//     }
// };
// console.log(myarr);


// Write your code here



// ------------------------------------------------------------------------------
//	EXERCICE 4
// ------------------------------------------------------------------------------

// Input to test

// let students = ["Romdul", "RomChong", "Kolap"]
// let countries = ["Canada", "Cambodia", "Thai"]
// let majors = ["SNA", "WEB", "Database"]

// Write your code here

// let array_student=["Romdul","RomChong","Kolap"];
// let array_country=["Canada","Cambodia","Thai"];
// let array_major=["SNA","WEB","Database"];
// let array=[];
// let dic={}
// for(index in array_student){
//     dic.student=array_student[index];
//     dic.country=array_country[index];
//     dic.major=array_major[index];
//     array.push(dic)
//     dic={}
// }
// console.log(array)


let ex2_testCase1 = "hello! welcome to web programing at pnc"
let ex2_testCase2 = "him is cute girl"
let ex2_testCase3 = ""
// Write your code here
let Array = [];
let word = "";
let Istrue = true;
for (let char of ex2_testCase1){
    if (char === " "){
        if ( ! (word[0].toUpperCase() === "W")){
            Array.push(word);
        }
        word = "";
        Istrue = true;
    } else{
        if (Istrue){
            word += char.toUpperCase();
            Istrue = false;
        } else{
            word += char;
        }
    }
}
Array.push(word);
console.log(Array);