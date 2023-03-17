// event listener for deposit button
const depositBtn = document.getElementById("deposit-btn");
depositBtn.addEventListener("click", function () {
  const depositInputValue = getInputValue("deposit");
  const totalDepositContent = getTextElementContent("total-deposit");
  const totalBalanceContent = getTextElementContent("total-balance");
  if (typeof depositInputValue === "number" && depositInputValue > 0) {
    // update deposit content
    const updatedDepositContent = totalDepositContent + depositInputValue;
    // set deposit content
    setTextElementContent("total-deposit", updatedDepositContent);
    // update total balance content
    const updatedTotalBalanceContent = totalBalanceContent + depositInputValue;
    // set total balance content
    setTextElementContent("total-balance", updatedTotalBalanceContent);
    // reset input
    resetInputValue("deposit");
  } else if (depositInputValue <= 0) {
    alert("Deposit should be minimum 1 dolors.");
    // reset input
    resetInputValue("deposit");
  } else {
    alert("Please input deposit.");
    // reset input
    resetInputValue("deposit");
  }
});
// ============end===============
