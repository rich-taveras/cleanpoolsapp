// Get the login form element
var loginFormEl = document.getElementById("loginForm");

// Add submit event listener to the login form
loginFormEl.addEventListener("submit", handleLogin);

// Function to handle login
function handleLogin(event) {
  event.preventDefault();

  // Get the username and password values
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Perform login validation
  // Example: Check if the username and password are correct

  if (username === "admin" && password === "password") {
    // Successful login, show the dashboard section and hide the login section
    var loginSection = document.getElementById("loginSection");
    var dashboardSection = document.getElementById("dashboardSection");

    loginSection.style.display = "none";
    dashboardSection.style.display = "block";
  } else {
    // Invalid login, display an error message or perform appropriate action
    alert("Invalid username or password. Please try again.");
  }
}
// Get the water chemistry link element
var waterChemistryLink = document.getElementById("waterChemistryLink");

// Get the chemical levels section element
var chemicalLevelsSection = document.getElementById("chemicalLevelsSection");

// Add click event listener to the water chemistry link
waterChemistryLink.addEventListener("click", displayChemicalLevels);

// Function to display the chemical levels section
function displayChemicalLevels(event) {
  event.preventDefault();

  // Show the chemical levels section
  chemicalLevelsSection.style.display = "block";
}




// Get the logout button element
var logoutBtn = document.getElementById("logoutBtn");

// Add click event listener to the logout button
logoutBtn.addEventListener("click", handleLogout);

// Function to handle logout
function handleLogout() {
  // Perform logout operations
  // Example: redirect to login page, clear session data, etc.

  // For demonstration purposes, we'll hide the dashboard section
  var dashboardSection = document.getElementById("dashboardSection");
  dashboardSection.style.display = "none";
}

// Get the customer link element
var customerLink = document.getElementById("customerLink");

// Add click event listener to the customer link
customerLink.addEventListener("click", openCustomerSearch);

// Function to open customer search
function openCustomerSearch(event) {
  event.preventDefault();

  // Perform action to open a new customer search or navigate to a new page
  var searchQuery = prompt("Enter the customer name, address, or phone number:");

  if (searchQuery) {
    // Perform customer search logic
    // Example: search for the customer in the system based on the search query

    if (customerFound) {
      // Customer found, display customer profile or perform the desired action
      alert("Customer found: " + customerName);
    } else {
      // Customer not found, display appropriate message or perform the desired action
      alert("Customer not found.");
    }
  }
}
// Get the chemicals link element
var chemicalsLink = document.getElementById("chemicalsLink");

// Add click event listener to the chemicals link
chemicalsLink.addEventListener("click", openChemicalInputs);

// Function to open chemical inputs
function openChemicalInputs(event) {
  event.preventDefault();

  // Open a new window or dialog box to input the chemical levels
  var chemicalInputWindow = window.open("chemical-input.html", "_blank", "width=400, height=300");

  // Function to handle the chemical data from the input window
  function handleChemicalData(event) {
    var data = event.data;

    // Perform action to store the chemical data in the chemical records weekly
    var chemicalRecordsTable = document.getElementById("chemical-records-table");

    var newRow = document.createElement("tr");
    Object.values(data).forEach(function (value) {
      var cell = document.createElement("td");
      cell.textContent = value;
      newRow.appendChild(cell);
    });

    chemicalRecordsTable.appendChild(newRow);
  }

  // Listen for message events from the chemical input window
  window.addEventListener("message", handleChemicalData);
}
