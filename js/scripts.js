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
