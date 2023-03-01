
// variables
const totalDepositSpan=document.getElementById('total-deposit');
const totalWithdrawSpan=document.getElementById('total-withdraw');
const totalBalanceSpan=document.getElementById('total-balance');
const depositInput=document.getElementById('deposit');
const depositBtn=document.getElementById('deposit-btn');
const withdrawInput=document.getElementById('withdraw');
const withdrawBtn=document.getElementById('withdraw-btn');


// event listener for deposit button
depositBtn.addEventListener('click',function(){
  // update total deposit
  const depositValue=parseFloat(depositInput.value);
  if(!isNaN(depositValue) && depositValue>0){
  const previousDepositValue=parseFloat(totalDepositSpan.textContent);
  const updatedDepositValue=previousDepositValue+depositValue;
  totalDepositSpan.textContent=updatedDepositValue;

  // update total balance
  const previousBalanceValue=parseFloat( totalBalanceSpan.textContent);
  const updatedTotalBalance=previousBalanceValue+depositValue;
  totalBalanceSpan.textContent=updatedTotalBalance;
  // reset input
  depositInput.value="";
  }else if(depositValue<=0){
    alert('Deposit should be minimum 1 dolors.');
  }else{
    alert('Please input deposit.');
  }
})

// event listener for withdraw button
withdrawBtn.addEventListener('click',function(){
  const withdrawValue=parseFloat( withdrawInput.value);
  const previousBalanceValue=parseFloat( totalBalanceSpan.textContent);
  if(!isNaN(withdrawValue) && previousBalanceValue>= withdrawValue && withdrawValue>0 ){

  // update total withdraw
  const previousWithdrawValue=parseFloat( totalWithdrawSpan.textContent);
  const updatedWithdrawValue=previousWithdrawValue+withdrawValue;
  totalWithdrawSpan.textContent=updatedWithdrawValue;

  // update total balance
  const updatedTotalBalance=previousBalanceValue-withdrawValue;
  totalBalanceSpan.textContent=updatedTotalBalance;

  // reset input
  withdrawInput.value="";
  }else if(previousBalanceValue<withdrawValue){
    alert("Sorry!! you haven't sufficient balance.");
    // reset input
    withdrawInput.value="";
  }else if(withdrawValue<=0){
    alert("Withdraw should be minimum 1 dolors.");
    // reset input
    withdrawInput.value="";
  }else{
    alert("Please withdraw.");
  }
})
// =================END=============== //





