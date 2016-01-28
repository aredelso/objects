var userId;

var password;

function isUserIdValid(userId) {
  return !(userId.includes("&") || userId.includes("#") || userId.includes("!")) && userId.length > 5;
};

function checkCase(password) {
  return password.toUpperCase() != password && password.toLowerCase() != password
};

function test(str) {
  return /\d/.test(str);
};

function isPasswordValid(password) {
  return (password.includes("$") || password.includes("#") || password.includes("!")) && password.length >5 && !password.includes("password") && checkCase(password) && test(password);
};

function areCredentialsValid(userId, password) {
  return alert("Your credentials are valid: " + (isUserIdValid(userId) && isPasswordValid(password)));
};

function getUserId() {
  userId=prompt("Enter User ID");
};

function getUserPassword() {
  password=prompt("Enter Password");
};

function login() {
  getUserId();
  getUserPassword();
  areCredentialsValid(userId, password);
};
