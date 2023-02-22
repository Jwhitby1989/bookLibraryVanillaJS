// needs some sort of webpack to connect the users array across different pages
const users = [
  { name: "Jay", age: 33, email: "jay@hotmail.com", password: "password1" },
  { name: "Gaz", age: 89, email: "gaz@hotmail.com", password: "password2" },
  { name: "Jack", age: 54, email: "je@hotmail.com", password: "password3" },
];

function submit() {
  const nameData = document.getElementById("username").value;
  const password = document.getElementById("passwordEntry").value;
  const searchUser = searchUsers(nameData);
  if (!searchUser) {
    // handle no matching users
  } else {
    // matching users
    if (password === searchUser.password) {
      successfulLogin();
    } else {
      window.alert("passwords don't match");
    }
  }
  console.log();
}

function successfulLogin() {
  window.open("library/library.html", "_self");
}

function searchUsers(username) {
  return users.find((user) => user.email === username);
}

function displayUser(user) {
  const container = document.getElementById("profile-page");

  const div = document.createElement("div");
  const node = document.createTextNode(`Name: ${user.name} `);
  div.appendChild(node);

  const div2 = document.createElement("div");
  const node2 = document.createTextNode(`Password: ${user.password}`);
  div.appendChild(node2);

  const div3 = document.createElement("div");
  const node3 = document.createTextNode(`Age: ${user.age}`);
  div.appendChild(node3);

  const div4 = document.createElement("div");
  const node4 = document.createTextNode(`Email: ${user.email}`);
  div.appendChild(node4);

  container.appendChild(div);
  container.appendChild(div2);
  container.appendChild(div3);
  container.appendChild(div4);

  div.classList.add("profile-items");
  div2.classList.add("profile-items");
  div3.classList.add("profile-items");
  div4.classList.add("profile-items");
}

const button = document.getElementById("button");
button.addEventListener("click", submit);

// const profileReveal = document.getElementById("profile-page");

// const reveal = document.getElementById("button");
// button.addEventListener("click", function () {
//   profileReveal.style.visibility = "visible";
// });

// replace profile page/info when the submit button is pressed a second time with new info...

// const hideProfPage = document.getElementById("button");

// hideProfPage.addEventListener("click", function () {
//   const container = document.getElementById("profile-page");

//   while (container.firstChild) {
//     container.removeChild(container.firstChild);
//   }
// });

// open new pages within parent page when button clicked...

const fgtPass = document.getElementById("forgotPass");

function forgotPassword() {
  fgtPass.addEventListener("click", function () {
    window.open("newPassword.html", "_self");
  });
}

forgotPassword();

// const newUser = document.getElementById("newUser");

// function newUserPage() {
//   newUser.addEventListener("click", function () {
//     window.open("newAccount.html");
//   });
// }

// newUserPage();

// ---- Notes: Info to go on new account page - name, age, email, password, personal info, auto welcome email sent when new account is made, submit button, takes you back to login screen

// ---- Notes: Info to go on forgot password page - old/current password field, new password field, confirm new password field, submit button, takes you back to login screen
