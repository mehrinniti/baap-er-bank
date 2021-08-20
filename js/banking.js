

function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    inputField.value = '';

    return inputAmountText;
}

function updateTotalField(totalFieldId, amountText) {
    const updateTotal = document.getElementById(totalFieldId);
    const updateTotalText = updateTotal.innerText;
    updateTotal.innerText = amountText;


    // Update deposit 
    updateTotal.innerText = parseFloat(amountText) + parseFloat(updateTotalText);
}

function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = parseFloat(balanceTotal.innerText);

    return balanceTotalText;
}

function updateBalance(amountText, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    // balanceTotal.innerText = amountText;
    if (isAdd == true) {
        balanceTotal.innerText = parseFloat(balanceTotalText) + parseFloat(amountText);
    }
    else {
        balanceTotal.innerText = parseFloat(balanceTotalText) - parseFloat(amountText);
    }


}



//  Add deposit with balance

document.getElementById('deposit-button').addEventListener('click', function () {
    /* 
        const depositAmount = document.getElementById('deposit-input');
        const amountText = depositAmount.value;
        depositAmount.value = '';
     */


    /* 
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    depositTotal.innerText = amountText;


    // Update deposit 
    depositTotal.innerText = parseFloat(amountText) + parseFloat(depositTotalText);
     */
    const amountText = getInputValue('deposit-input');

    if (amountText > 0) {
        updateTotalField('deposit-total', amountText);

        updateBalance(amountText, true);
    }

    //  Update balance 
    /*  const balanceTotal = document.getElementById('balance-total');
     const balanceTotalText = balanceTotal.innerText;
     // balanceTotal.innerText = amountText;
 
     balanceTotal.innerText = parseFloat(balanceTotalText) + parseFloat(amountText);
  */
})

document.getElementById('withdraw-button').addEventListener('click', function () {
    /* 
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputText = withdrawInput.value;
    withdrawInput.value = '';
     */

    /* 
        // Update Withdraw
        const withdrawTotal = document.getElementById('withdraw-total');
        const withdrawTotalText = withdrawTotal.innerText;
        withdrawTotal.innerText = withdrawInputText;
    
        withdrawTotal.innerText = parseFloat(withdrawTotalText) + parseFloat(withdrawInputText);
     */
    const withdrawInputText = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();

    if (withdrawInputText > 0 && withdrawInputText < currentBalance) {
        updateTotalField('withdraw-total', withdrawInputText);
        updateBalance(withdrawInputText, false);
    }
    if (withdrawInputText > currentBalance) {
        console.log('You can not withdraw more than what you have in your account');
    }

    /*   
    //  Update Balance
      const balanceTotal = document.getElementById('balance-total');
      const balanceTotalText = balanceTotal.innerText;
  
      balanceTotal.innerText = parseFloat(balanceTotalText) - parseFloat(withdrawInputText);
       */
})