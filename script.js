const submit = document.getElementById("submit");
const fname = document.getElementById("firstname");
const lname = document.getElementById("lastname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const form = document.getElementById("form");

document.addEventListener("DOMContentLoaded", function () {
  submit.addEventListener("click", function (input) {

    if (fname.value === "" || fname.value == null) {
      const label_name = document.getElementById("label-firstname");
      label_name.style.display = "block";
      fname.style.border = "2px solid hsl(0, 100%, 74%)";
      fname.removeAttribute("placeholder");
      fname.style.backgroundImage="url('images/icon-error.svg')";
      fname.style.backgroundRepeat="no-repeat";
      fname.style.backgroundSize="20px";
      fname.style.backgroundPosition="right 10px center" ; 
    } else {
      const label_name = document.getElementById("label-firstname");
      label_name.style.display = "none";
      fname.style.border = "1px solid hsl(246, 25%, 77%)";
      fname.style.backgroundImage="";
    }

    if (lname.value === "" || lname.value == null) {
      const label_name = document.getElementById("label-lastname");
      label_name.style.display = "block";
      lname.style.border = "2px solid hsl(0, 100%, 74%)";
      lname.removeAttribute("placeholder");
      lname.style.backgroundImage="url('images/icon-error.svg')";
      lname.style.backgroundRepeat="no-repeat";
      lname.style.backgroundSize="20px";
      lname.style.backgroundPosition="right 10px center" ; 
    } else {
      const label_name = document.getElementById("label-lastname");
      label_name.style.display = "none";
      lname.style.border = "1px solid hsl(246, 25%, 77%)";
    }

    if (email.value === "" || email.value == null) {
      const label_name = document.getElementById("label-email");
      label_name.style.display = "block";
      email.style.border = "2px solid hsl(0, 100%, 74%)";
      email.placeholder="email@example/com";
      email.style.backgroundImage="url('images/icon-error.svg')";
      email.style.backgroundRepeat="no-repeat";
      email.style.backgroundSize="20px";
      email.style.backgroundPosition="right 10px center" ; 
      
    } else {
      const label_name = document.getElementById("label-email");
      label_name.style.display = "none";
      email.style.border = "1px solid hsl(246, 25%, 77%)";   
    }

    if (password.value === "" || password.value == null) {
      const label_name = document.getElementById("label-password");
      label_name.style.display = "block";
      password.style.border = "2px solid hsl(0, 100%, 74%)";
      password.removeAttribute("placeholder");
      password.style.backgroundImage="url('images/icon-error.svg')";
      password.style.backgroundRepeat="no-repeat";
      password.style.backgroundSize="20px";
      password.style.backgroundPosition="right 10px center" ; 
    } else {
      const label_name = document.getElementById("label-password");
      label_name.style.display = "none";
      password.style.border = "1px solid hsl(246, 25%, 77%)";
    }

    input.preventDefault();
  });
});
