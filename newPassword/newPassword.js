const oldPasswordData = document.getElementById("oldPass").value;
const newPass = document.getElementById("newPass").value;
const reEnterPass = document.getElementById("enterPass").value;

const submit = document.getElementById("button");

function compare() {
  if (!oldPasswordData) {
    window.alert("Please enter old password");
  } else if (newPass !== reEnterPass) {
    window.alert("Passwords don't match");
  } else {
    console.log("Passwords match");
  }
}

// function compare() {
//   const oldPasswordValue = oldPasswordData.value;
//   if (!oldPasswordValue) {
//     window.alert("Please enter old password");
//     return false;
//   } else if (oldPasswordValue !== oldPasswordData) {
//     window.alert("Incorrect old password");
//     return false;
//   } else {
//     return true;
//   }
// }

submit.addEventListener("click", function () {
  if (compare()) {
    const newPasswordValue = newPasswordField.value;
    const reEnterPasswordValue = reEnterPasswordField.value;
    if (newPasswordValue !== reEnterPasswordValue) {
      window.alert("Passwords don't match");
    } else {
      console.log("Passwords match");
    }
  }
});

// function searchUsers(password) {
//   return users.find((user) => user.password === password);
// }

// replacePassword();
