// Customer list data
var customerList = [];

// Function to handle login
function handleLogin() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Check username and password
  if (username === 'admin' && password === 'password') {
    document.getElementById('loginSection').style.display = 'none';
    document.getElementById('customerSelectionSection').style.display = 'block';
  } else {
    alert('Invalid username or password. Please try again.');
  }
}

// Function to show the add customer form
function showAddCustomerForm() {
  document.getElementById('customerSelectionSection').style.display = 'none';
  document.getElementById('addCustomerSection').style.display = 'block';
}

// Function to show the existing customer form
function showExistingCustomerForm() {
  document.getElementById('customerSelectionSection').style.display = 'none';
  document.getElementById('existingCustomerSection').style.display = 'block';
}

// Function to add a new customer
function addCustomer() {
  var name = document.getElementById('name').value;
  var address = document.getElementById('address').value;
  var phone = document.getElementById('phone').value;
  var email = document.getElementById('email').value;
  var poolType = document.getElementById('poolType').value;
  var gateCode = document.getElementById('gateCode').value;

  // Create a new customer object
  var customer = {
    name: name,
    address: address,
    phone: phone,
    email: email,
    poolType: poolType,
    gateCode: gateCode
  };

  // Add the customer to the list
  customerList.push(customer);

  // Clear the input fields
  document.getElementById('name').value = '';
  document.getElementById('address').value = '';
  document.getElementById('phone').value = '';
  document.getElementById('email').value = '';
  document.getElementById('gateCode').value = '';

  alert('Customer added successfully!');
}

// Function to handle selecting an existing customer
function selectExistingCustomer() {
  var customerName = document.getElementById('customerName').value;

  // Search for the customer in the list
  var existingCustomer = customerList.find(function(customer) {
    return customer.name === customerName;
  });

  if (existingCustomer) {
    // Perform actions for the selected existing customer
    alert('Selected existing customer: ' + existingCustomer.name);
  } else {
    alert('Customer not found. Please try again.');
  }
}
