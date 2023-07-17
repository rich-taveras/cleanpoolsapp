function handleLogin(event) {

  event.preventDefault();



  var username = document.getElementById("username").value;

  var password = document.getElementById("password").value;



  // Check username and password (replace with your own logic)

  if (username === "admin" && password === "password") {

    document.getElementById("loginSection").style.display = "none";

    document.getElementById("dashboardSection").style.display = "block";

  } else {

    alert("Invalid username or password. Please try again.");

  }

}