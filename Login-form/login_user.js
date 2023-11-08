/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
// function openNav() {
//     document.getElementById("mySidenav").style.width = "250px";
//     document.getElementById("main").style.marginLeft = "250px";
//   }
  
//   /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
//   function closeNav() {
//     document.getElementById("mySidenav").style.width = "0";
//     document.getElementById("main").style.marginLeft = "0";
//   }

// Given Captcha Code
let captchaCode = document.getElementById("captchaCode");

// Users written Captcha Code
let captchaInput = document.getElementById("captchaInput");

let refreshButton = document.getElementById("refreshButton");

let submitButton = document.getElementById("submit");

document.body.addEventListener("load" , generateCaptcha);
refreshButton.addEventListener("click" , refreshButtonClick);
submitButton.addEventListener("click" , submitButtonClick);
// Generating Captcha when the page loads
function generateCaptcha(){

    const randomChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let uniqeChar = ""; 

    for (let i = 1; i <= 5 ; i++){
        uniqeChar = randomChar.charAt(Math.random() * randomChar.length) + uniqeChar ;
    }
    captchaCode.value = uniqeChar;
}

// Validating captcha code
function validateCaptcha(){
    let enteredCaptchaCode = captchaInput.value;

    if (captchaCode.value == enteredCaptchaCode) {
        alert("Correct Captcha Code");
    }
    else{
        alert ("Incorrect Captcha code");
    }
}
function refreshButtonClick(){
    captchaInput.value = "";
    generateCaptcha();
}
function submitButtonClick(){
    validateCaptcha();
}