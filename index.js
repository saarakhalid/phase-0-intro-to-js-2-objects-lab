// Write your solution in this file!
// Initialize employee Object
let employee = {
    name: "John Doe",
    streetAddress: " Tomboya St",
  };
  
  // Function to update employee non-destructively
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value };
  }
  
  // Function to update employee destructively
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  // Function to delete property non-destructively
  function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  // Function to delete property destructively
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
  // Example usage
  console.log("Original Employee:", employee);
  
  // Non-destructive update
  let updatedEmployee = updateEmployeeWithKeyAndValue(employee, "name", "John Doe");
  console.log("Updated Employee (non-destructive):", updatedEmployee);
  console.log("Original Employee (unchanged):", employee);
  
  // Destructive update
  destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "456 Oak St");
  console.log("Updated Employee (destructive):", employee);
  
  // Non-destructive deletion
  let employeeWithoutName = deleteFromEmployeeByKey(employee, "name");
  console.log("Employee without Name (non-destructive):", employeeWithoutName);
  console.log("Original Employee (unchanged):", employee);
  
  // Destructive deletion
  destructivelyDeleteFromEmployeeByKey(employee, "streetAddress");
  console.log("Employee without Street Address (destructive):", employee);
  