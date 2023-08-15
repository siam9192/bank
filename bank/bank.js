const withDrawInput = document.getElementById("withdraw-input");
const depositInput = document.getElementById("deposite-input");
const withdrawBtn = document.getElementById("withdraw-btn");
const depositBtn = document.getElementById("deposite-btn");
const depositAmount = document.getElementById("deposite-amount");
const  withdrawAmount = document.getElementById("withdraw-amount");
const balance = document.getElementById("balance");
console.log(withDrawInput)

depositBtn.addEventListener('click',function(){

   let depositAmountInput_number = parseFloat(depositInput.value);
   let deposit_number = parseFloat(depositAmount.innerText);
if(isNaN(depositAmountInput_number)){
   alert("Enter valid amount")
   return;
}

   let balance_number = parseFloat(balance.innerText);
   deposit_number += depositAmountInput_number;
   // balance.innerText = balance_number;
 
   balance_number += depositAmountInput_number;
    localStorage.setItem("balance", balance_number);

   localStorage.setItem("deposit",deposit_number);
   let localStorageDeposit = localStorage.getItem("deposit")
   let getBalance = localStorage.getItem("balance");
depositAmount.innerText = localStorageDeposit;

balance.innerText =  getBalance;
depositInput.value = '';
   }

)
withdrawBtn.addEventListener("click",()=>{
// alert("click")
let withDrawInput_number = parseFloat(withDrawInput.value);
if(isNaN(withDrawInput_number)){
   alert("Enter valid amount")
   return;
}
let bal = localStorage.getItem("balance");
let dep = localStorage.getItem("deposit");
console.log(typeof withDrawInput_number,withDrawInput_number)

let withDrawAmount_number = parseFloat(withdrawAmount.innerText);
localStorage.setItem("withdraw",withDrawInput_number + withDrawAmount_number);
let localStorageWithdraw = localStorage.getItem("withdraw")
console.log(withDrawAmount_number)
  withDrawAmount_number += withDrawInput_number;

console.log(withDrawAmount_number)
//  let withDrawAmount_string = withDrawAmount_number.toString();
withdrawAmount.innerText = localStorageWithdraw;

let balance_number = parseFloat(balance.innerText);
localStorage.setItem("balance",balance_number - withDrawInput_number)
balance.innerText = balance_number - withDrawInput_number;
withDrawInput.value = '';
})
document.getElementsByTagName("body")[0].addEventListener("",()=>{
   
} 
)

function bodyOnload(){
let bal = localStorage.getItem("balance");
   console.log(bal)
   balance.innerText = bal;
   let dep = localStorage.getItem("deposit")
   depositAmount.innerText = dep;
   let localStorageWithdraw = localStorage.getItem("withdraw")
   withdrawAmount.innerText = localStorageWithdraw
}
   

