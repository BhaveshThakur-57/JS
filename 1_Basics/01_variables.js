const accountId = 68658655
let accountEmail = "bhavesh@google.com"
var accountPassword = "56875"
accountCity = "Wardha"
let accountState;

// accountId = 2 // not allowed


accountEmail = "ak@ak.com"
accountPassword = "8393839"
accountCity = "Nagpur"

console.log(accountId);
 console.log(typeof(accountCity))
/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])