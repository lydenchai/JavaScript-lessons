


// 1- 	Using the FS module, read the file ./studentDatabase.json 
//		to get the list of students hobbies and favorites things


// 2- 	Using the module EXPRESS, start to listen to request on PORT 5000

// 3-	Now answer to the following request:

//			GET  /favoriteTeacher?firstName= <student first name> & lastName= <student last name>
//			Return the favorite teacher of the student

//			Example for : 				GET  /favoriteTeacher?firstName=Channary&lastName=Pha
//			you should return : 		rady
// 			because of the JSON file, Channary Pha favorite teacher is Rady


// 4-	Now answer to the following request:

//			GET  /favoriteCountry?firstName= <student first name> & lastName= <student last name>
//			Return the favorite country of the student


// 5-	Now answer to the following request:

//			GET  /students?favoriteTeacher= <teacher name>
//			Return the  list of  students first name  who like this teacher

//			Example for : 		GET  /students?favoriteTeacher=clement
//			you should return :  ["Somphors", "Nimout", "Vouleak", "Som"]
//			Because those students like clement



