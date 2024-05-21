const resultBox = document.querySelector(".result-box");
const reset = document.querySelector(".reset-btn");
const equalsTo = document.querySelector(".equals-btn");
const keys = document.querySelectorAll(".btn-num");
const del = document.querySelector(".btn-del");
const ctrl1 = document.getElementById("theme1");
const ctrl2 = document.getElementById("theme2");
const ctrl3 = document.getElementById("theme3");
const body = document.querySelector("body");
const themeControl = document.querySelector(".theme-control");

resultBox.innerHTML = "";
let value;
const handleClick = (e) => {
  keys.forEach((val) => {
    val.classList.remove("active");
    if (e.target.innerHTML == val.innerHTML) {
      val.classList.add("active");
      keys[14].innerHTML = "*";
      value = val.innerHTML;
      resultBox.value += value;
    }
  });
  console.log(value);
};
keys.forEach((key) => {
  key.addEventListener("click", handleClick);
});
equalsTo.addEventListener("click", () => {
  resultBox.value = eval(resultBox.value);
});
reset.addEventListener("click", () => {
  resultBox.value = "";
});
del.addEventListener("click", () => {
  resultBox.value = resultBox.value.slice(0, -1);
});

ctrl1.addEventListener("click", () => {
  body.classList.remove("active1");
  body.classList.remove("active2");
  themeControl.style.left = '0%'
});
ctrl2.addEventListener("click", () => {
    body.classList.remove("active2");
    body.classList.add("active1");
    themeControl.style.left = '33.3%'
});
ctrl3.addEventListener("click", () => {
    body.classList.remove("active1");
    body.classList.add("active2");
    themeControl.style.left = '63%'
});
