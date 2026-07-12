var accounts = [2000, 30000, 100];

    let account = parseInt(prompt("Enter Account Number (1, 2, 3):"));
    
    if (account < 1 || account > accounts.length || isNaN(account)) {
        console.log("Invalid Account Number!");
    }
else{
    let op = prompt("Enter 1 to withdraw, 2 to deposit, 3 to check balance:");
    let amount = 0;

    if (op === "1" || op === "2") {
        amount = parseInt(prompt("Enter amount:"));
        if (isNaN(amount) || amount <= 0) {
            console.log("Invalid amount!");
        }
    }
    
    let index = account - 1;

    if (op === "1") {
        if (accounts[index] >= amount) {
            accounts[index] -= amount;
            console.log("Balance: " + accounts[index]);
        } else {
            console.log("Insufficient Balance!");
        }
    } 
    else if (op === "2") {
        accounts[index] += amount;
        console.log("Balance: " + accounts[index]);
    } 
    else if (op === "3") {
        console.log("Balance: " + accounts[index]);
    } 
    else {
        console.log("Invalid Operation!");
    }
}
