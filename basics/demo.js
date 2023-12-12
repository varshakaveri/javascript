console.log("Hello Varsha!");

const accountId = 101
let accountName = "varsha"
var accountPassword = "var101"
accountCity = "Belgaum"
let accountState;

console.table([accountId, accountName, accountPassword, accountCity]);


// accountId = 102
accountName = "Varsha Kaveri"
accountPassword = "Varsha102"
accountCity = "Athani"

/* Prefer not to use var 
because of issue in the block scope and functional scope 
*/


console.table([accountId, accountName, accountPassword, accountCity, accountState]);

