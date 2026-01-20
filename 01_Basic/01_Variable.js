const accountNumber = 123456789;
let accountEmail = "user@example.com";
var accountPassword = "securePassword123";
accountCity = "New York";

console.log("Account Number:", accountNumber);
console.log("Account Email:", accountEmail);
console.log("Account Password:", accountPassword);
console.log("Account City:", accountCity);

accountEmail = "newuser@example.com";

console.log("Updated Account Email:", accountEmail);

//difference between var, let, and const
// var is function-scoped or globally-scoped, and can be re-declared and updated.
// let is block-scoped, and can be updated but not re-declared within the same block.
// const is block-scoped, and cannot be updated or re-declared.