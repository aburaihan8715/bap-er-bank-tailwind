// event listener for withdraw button
const withdrawBtn = document.getElementById("withdraw-btn");
withdrawBtn.addEventListener("click", function () {
  const withdrawInputValue = getInputValue("withdraw");
  const withdrawElementContent = getTextElementContent("total-withdraw");
  const totalBalanceElementContent = getTextElementContent("total-balance");
  if (withdrawInputValue > totalBalanceElementContent) {
    alert("Bap er bank a taka nay.");
    // reset input
    resetInputValue("withdraw");
    return;
  }
  if (typeof withdrawInputValue === "number" && withdrawInputValue >= 0) {
    // update total withdraw content
    const updatedWithdrawElementContent = withdrawElementContent + withdrawInputValue;
    // set total withdraw content
    setTextElementContent("total-withdraw", updatedWithdrawElementContent);
    // reset input
    resetInputValue("withdraw");
    // update total balance content
    const updatedTotalBalanceContent = totalBalanceElementContent - updatedWithdrawElementContent;
    // set total balance content
    setTextElementContent("total-balance", updatedTotalBalanceContent);
  } else if (withdrawInputValue <= 0) {
    alert("Input amount should be minimum 1 dolor.");
    // reset input
    resetInputValue("withdraw");
  } else {
    alert("Please input amount.");
    // reset input
    resetInputValue("withdraw");
  }
});

// ============end==============
