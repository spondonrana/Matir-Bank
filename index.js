    // Deposit
    let depositValue = document.getElementById('deposit-Value');
    let depositOutput = document.getElementById('deposit-output');
    // Widthdraw
    let widthdrawValue = document.getElementById('withdraw-value');
    let widthdrawOutput = document.getElementById('withdraw-output');
    // Balance
    let balanceOutput = document.getElementById('balance-output');

    function addMoney (previousAmount, newAmount){
        const result = parseFloat(previousAmount) + parseFloat(newAmount);
        return result;
    }

    function getMoney (currentBalance, getBalance){
        const result = parseFloat(currentBalance) - parseFloat(getBalance);
        return result;
    }

function deposit() {
    
    const totalDeposit = addMoney(depositOutput.innerText, depositValue.value);
    depositOutput.innerText = totalDeposit;
    const totalBalance = addMoney(balanceOutput.innerText, depositValue.value);
    balanceOutput.innerText = totalBalance;
    // depositOutput.innerText = parseFloat(depositOutput.innerText) + parseFloat(depositValue.value);
    // balanceOutput.innerText = parseFloat(balanceOutput.innerText) + parseFloat(depositValue.value);


    // clear input field
    depositValue.value = '';

}

function widthdraw () {
    
    const totalWidthdraw = addMoney(widthdrawOutput.innerText, widthdrawValue.value );
    widthdrawOutput.innerText = totalWidthdraw;
    const totalBalance = getMoney(balanceOutput.innerText, widthdrawValue.value);
    balanceOutput.innerText = totalBalance;

    // widthdrawOutput.innerText = parseFloat(widthdrawOutput.innerText) + parseFloat(widthdrawValue.value);
    // balanceOutput.innerText = parseFloat(balanceOutput.innerText) - parseFloat(widthdrawValue.value);
    // clear input field
    widthdrawValue.value = '';
}
