// variables
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
// function for login
function loginHandler() {
  const email = emailInput.value;
  const password = passwordInput.value;
  if (email === "1234@gmail.com" && password === "1234") {
    location.href = "bank.html";
  } else {
    alert("Unauthorize user");
  }
}
// ===========end============
