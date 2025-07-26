const accountId = 144553
let accountEmail = "hassan@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed

accountEmail = "hc@hc.com"
accountPassword = "212121"
accountCity = "bengalru"

console.log(accountId);

/*
Prefer not to used var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
