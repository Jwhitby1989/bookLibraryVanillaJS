import index from "../index";
const { users } = require("../index");

console.log(users);
const email = document.getElementById("accountEmail");
const name = document.getElementById("accountName");
const age = document.getElementById("accountAge");
const password = document.getElementById("newPassword");
// user email ID = accountEmail
// user name ID = accountName
// user age ID = accountAge
// user password ID = newPassword
// submit button ID = button

// collate info put into new account fields email, name, age and password
class newUser {
  constructor(accountEmail, accountName, accountAge, newPassword) {
    this.email = accountEmail;
    this.name = accountName;
    this.age = accountAge;
    this.password = newPassword;
  }
}

// create new user object using info
const newUserList = [];

const newUserForm = document.querySelector("form");

newUserForm.onsubmit = function (event) {
  event.preventDefault();

  newUserSubmit = new newUser(
    email.value,
    name.value,
    age.value,
    password.value
  );
  // push new user object into user array
  newUserList.push(newUserSubmit);
  console.log(newUserList);
  clearFields();
};

function clearFields() {
  email.value = "";
  name.value = "";
  age.value = "";
  password.value = "";
}
