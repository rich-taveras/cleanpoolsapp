// Customer list data
var customerList = [];

// Function to handle login
function login() {
  // Implement your login logic here
}

// Function to show the customer form for adding a new customer
function showAddCustomerForm() {
  document.getElementById('customerSelect').selectedIndex = 0;
  document.getElementById('customerFormSection').style.display = 'block';
}

// Function to handle customer selection
function selectCustomer() {
  var selectElement = document.getElementById('customerSelect');
  var selectedIndex = selectElement.selectedIndex;

  if (selectedIndex > 0) {
    // Existing customer selected
    var selectedCustomerId = selectElement.options[selectedIndex].value;

    // Perform any necessary actions for the selected customer, e.g., displaying data, etc.
    // You can access the customer details using the selectedCustomerId

    // Get the customer's chemical data
    var customerChemicals = getCustomerChemicals(selectedCustomerId);

    // Sort the chemicals by date in descending order
    customerChemicals.sort(function(a, b) {
      return new Date(b.date) - new Date(a.date);
    });

    // Generate the HTML for the chemical list
    var chemicalsListHtml = '';
    for (var i = 0; i < customerChemicals.length; i++) {
      var chemical = customerChemicals[i];
      chemicalsListHtml += '<li>Date: ' + chemical.date + '</li>';
      chemicalsListHtml += '<li>Chlorine Level: ' + chemical.chlorine + '</li>';
      chemicalsListHtml += '<li>pH Level: ' + chemical.pH + '</li>';
      chemicalsListHtml += '<li>Total Alkalinity: ' + chemical.totalAlkalinity + '</li>';
      // Add other chemical data as needed
      chemicalsListHtml += '<br>';
    }

    // Display the chemical list HTML
    var chemicalsContainer = document.getElementById('chemicalsContainer');
    chemicalsContainer.innerHTML = '<ul>' + chemicalsListHtml + '</ul>';

    // Hide the customer form section
    document.getElementById('customerFormSection').style.display = 'none';
  } else {
    // New customer selected
    // Show the customer form for adding a new customer
    showAddCustomerForm();
  }
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

  // Update the customer selection dropdown
  updateCustomerSelect();
}

// Function to update the customer selection dropdown
function updateCustomerSelect() {
  var customerSelect = document.getElementById('customerSelect');
  customerSelect.innerHTML = '<option value="">Select a customer</option>';

  for (var i = 0; i < customerList.length; i++) {
    var customer = customerList[i];
    var option = document.createElement('option');
    option.value = i;
    option.innerHTML = customer.name;
    customerSelect.appendChild(option);
  }
}

// Function to get the customer's chemical data
function getCustomerChemicals(customerId) {
  // Replace with your code to fetch the customer's chemical data based on the customerId
  // Return an array of chemical objects
  return [
    { date: '2023-07-20', chlorine: 2.5, pH: 7.2, totalAlkalinity: 80 },
    { date: '2023-07-15', chlorine: 3.0, pH: 7.5, totalAlkalinity: 90 },
    { date: '2023-07-10', chlorine: 2.8, pH: 7.4, totalAlkalinity: 85 }
  ];
}
