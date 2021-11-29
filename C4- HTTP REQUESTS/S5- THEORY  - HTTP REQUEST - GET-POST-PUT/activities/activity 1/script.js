function afterSuccess(response) {
  // 1 - TODO log the data from the response
  //    - male or female
  //    - the probalility
}

axios.get("https://api.genderize.io?name=ronan").then(afterSuccess);
