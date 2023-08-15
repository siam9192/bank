const gmail = document.getElementById("gmail");
const password = document.getElementById("password");
const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click",()=>{
    if(gmail.value === "siam99@gmail.com" && password.value === "matal120"){
window.location.href = "bank/bank.html" 
console.log(password)
console.log(gmail)
    }
  
})