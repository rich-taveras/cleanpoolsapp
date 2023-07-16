var customers = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    address: "123 Main St",
    phone: "555-1234",
    poolType: "salt",
    gallons: 10000
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    address: "456 Elm St",
    phone: "555-5678",
    poolType: "chlorine",
    gallons: 15000
  }
];

function handleLogin(event) {
  event.preventDefault();
  
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Check username and password (replace with your own logic)
  if (username === "admin" && password === "password") {
    document.getElementById("loginSection").style.display = "none";
    showCustomerSection();
  } else {
    alert("Invalid username or password. Please try again.");
  }
}

function showCustomerSection() {
  var customerSection = document.getElementById("customerSection");
  customerSection.style.display = "block";
  showCustomerInfoSection();
}

function showCustomerInfoSection() {
  var customerInfoSection = document.getElementById("customerInfoSection");
  customerInfoSection.style.display = "block";
  hideDashboardSection();

  // Clear any existing customer info
  var customerInfo = document.getElementById("customerInfo");
  customerInfo.innerHTML = "";

  // Create and display customer list
  var customerList = document.createElement("ul");
  customers.forEach(function(customer) {
    var listItem = document.createElement("li");
    listItem.textContent = customer.name;
    listItem.addEventListener("click", function() {
      showCustomerDashboard(customer);
    });
    customerList.appendChild(listItem);
  });
  customerInfo.appendChild(customerList);
}

function showCustomerDashboard(customer) {
  var customerInfoSection = document.getElementById("customerInfoSection");
  customerInfoSection.style.display = "block";
  var dashboardSection = document.getElementById("dashboardSection");
  dashboardSection.style.display = "block";

  // Display customer info
  var customerInfo = document.getElementById("customerInfo");
  customerInfo.innerHTML = `
    <h4>Name: ${customer.name}</h4>
    <p>Email: ${customer.email}</p>
    <p>Address: ${customer.address}</p>
    <p>Phone: ${customer.phone}</p>
    <p>Pool Type: ${customer.poolType}</p>
    <p>Gallons: ${customer.gallons}</p>
  `;

  // Display customer dashboard
  var dashboard = document.getElementById("dashboard");
  dashboard.innerHTML = `
    <h4>Chemical Records</h4>
    <table>
      <tr>
        <th>Date</th>
        <th>CHL</th>
        <th>pH</th>
        <th>TA</th>
        <th>STA</th>
        <th>CHA</th>
        <th>SALT</th>
        <th>TEMP</th>
      </tr>
      <tr>
        <td>2023-07-20</td>
        <td>2.5</td>
        <td>7.2</td>
        <td>80</td>
        <td>90</td>
        <td>100</td>
        <td>3500</td>
        <td>78</td>
      </tr>
      <tr>
        <td>2023-07-15</td>
        <td>3.0</td>
        <td>7.5</td>
        <td>90</td>
        <td>85</td>
        <td>95</td>
        <td>3200</td>
        <td>80</td>
      </tr>
    </table>
  `;
}

function hideDashboardSection() {
  var dashboardSection = document.getElementById("dashboardSection");
  dashboardSection.style.display = "none";
}
