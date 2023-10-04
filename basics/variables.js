
// learning variables in javascript.

const accountID =1445;
let accountEmail="vikash@gmail.com";
var accountPassword="1154";
accountCity="bihar"
let accountState;

// accountId will be not change becouse it is constant variable.

// accountID=15575;

/* prefer not to use var
becouse of issue in block scope and functional scope
*/

console.log(accountID);

accountEmail="hero@gmai.com";
accountPassword="44555";
console.table([accountEmail,accountID,accountPassword,accountCity,accountState]);
