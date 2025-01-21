let billAmountInput = document.getElementById("billAmount");
let percentageTipInput = document.getElementById("percentageTip");
let tipAmountInput = document.getElementById("tipAmount");
let totalAmountInput = document.getElementById("totalAmount");
let errorMessageInput = document.getElementById("errorMessage");
let errorMessage = "Please Enter a Valid Input";


function calculateBtn() {
    let billAmountInputValue = billAmountInput.value;
    let percentageTipInputValue = percentageTipInput.value;


    if (billAmountInputValue === "") {
        errorMessageInput.textContent = errorMessage;
    } else if (percentageTipInputValue === "") {
        errorMessageInput.textContent = errorMessage;
    } else {
        errorMessageInput.textContent = "";
        let billAmount = parseInt(billAmountInputValue);
        let percentageTip = parseInt(percentageTipInputValue);

        let calculatedTip = (percentageTip / 100) * billAmount;
        let calculatedTotal = billAmount + calculatedTip;

        tipAmountInput.value = calculatedTip;
        totalAmountInput.value = calculatedTotal;
    }
}