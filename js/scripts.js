function validateform() {
  var email = document.getElementById("email");
  var password = document.getElementById("password");

  if (email.value === "" || email.value === null) {
    alert("Email is required");
    return false;
  } else if (password.value === "" || password.value === null) {
    alert("password is required");
    return false;
  } else {
    alert("Proceed to download an image");
  }
  var myInput = document.getElementById("password");
  var letter = document.getElementById("letter");
  var capital = document.getElementById("capital");
  var number = document.getElementById("number");
  var length = document.getElementById("length");
  myInput.onfocus = function() {
    document.getElementById("message").style.display = "block";
  };
  myInput.onblur = function() {
    document.getElementById("message").style.display = "none";
  };
}
myInput.onkeyup = function() {
    // Validate lowercase letters
    var lowerCaseLetters = /[a-z]/g;
    if (myInput.value.match(lowerCaseLetters)) {
      letter.classList.remove("invalid");
      letter.classList.add("valid");
    } else {
      letter.classList.remove("valid");
      letter.classList.add("invalid");
    }