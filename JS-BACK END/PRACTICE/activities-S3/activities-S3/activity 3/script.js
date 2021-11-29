function afterSuccess(response) {
  let data = response.data;
  console.log(data);
}

let employee = { name: "John Doe", occupation: "gardener" };

axios
  .post("https://hookb.in/8P1ELwLGxeuBWWYjD1My", employee)
  .then(afterSuccess);
