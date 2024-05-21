const billInput = document.getElementById("bill-inp");
const peopleInput = document.getElementById("people-inp");
const tipSelected = document.querySelectorAll(".tipp");
const tipAmount = document.querySelector(".amount-tip");
const totalAmount = document.querySelector(".amount-total");
const tipCustom = document.querySelector(".custom");
const resetBtn = document.querySelector(".reset-btn");
const errorMsg = document.querySelectorAll(".error-msg");

billInput.value = "";
peopleInput.value = "";
tipAmount.innerHTML = "$" + (0.0).toFixed(2);
totalAmount.innerHTML = "$" + (0.0).toFixed(2);

let billValue = 0.0;
let peopleValue = 1;
let tipValue = 0;

const billInp = () => {
  billValue = parseFloat(billInput.value);
  if (billValue <= 0) {
    errorMsg[0].style.display = "block";
    billInput.style.border = "1px solid red";
  } else {
    errorMsg[0].style.display = "none";
    billInput.style.border = "1px solid hsl(172, 67%, 45%)";
  }
  calculateTip();
};
const peopleInp = () => {
  peopleValue = parseFloat(peopleInput.value);
  if (peopleValue <= 0) {
    errorMsg[1].style.display = "block";
    peopleInput.style.border = "1px solid red";
  } else {
    errorMsg[1].style.display = "none";
    peopleInput.style.border = "1px solid hsl(172, 67%, 45%)";
  }
  calculateTip();
};
const customInp = () => {
  tipValue = parseFloat(tipCustom.value / 100);
  tipSelected.forEach((val) => {
    val.classList.remove("active");
  });
  calculateTip();
};
const handleClick = (e) => {
  tipSelected.forEach((val) => {
    val.classList.remove("active");
    if (e.target.innerHTML == val.innerHTML) {
      val.classList.add("active");
      tipValue = parseFloat(val.innerHTML) / 100;
    }
  });
  calculateTip();
};
const calculateTip = () => {
  if (peopleValue >= 1) {
    let tipAmnt = (billValue * tipValue) / peopleValue;
    let total = billValue / peopleValue + tipAmnt;
    tipAmount.innerHTML = "$" + tipAmnt.toFixed(2);
    totalAmount.innerHTML = "$" + total.toFixed(2);
  }
};
const reset = () => {
  billInput.value = "0.0";
  billInp();
  peopleInput.value = "1";
  peopleInp();
  tipCustom.value = "";
};

billInput.addEventListener("input", billInp);
peopleInput.addEventListener("input", peopleInp);
tipSelected.forEach((tip) => {
  tip.addEventListener("click", handleClick);
});
tipCustom.addEventListener("input", customInp);
resetBtn.addEventListener("click", reset);
