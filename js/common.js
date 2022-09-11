"use-strict";

let typingText = document.getElementById("typingText");
const words = ["apple", "banana", "milk"];
const miss = document.getElementById("miss");
let missNumber = 0;
const reset = document.querySelector(".reset");
let state = true;
let countDownNumber = document.getElementById("countDownNumber");

typingText.innerText = words[0];

window.addEventListener("keydown", function (e) {
  let key = e.key;

  if (!state) return;
  if (key == typingText.innerText.slice(0, 1)) {
    typingText.innerText = typingText.innerText.slice(1);
    words[0] = typingText.innerText;
    console.log(words[0].length);
  } else {
    missNumber++;
    miss.innerText = missNumber;
  }
  if (words[0].length == 0) {
    words.shift();
    typingText.innerText = words[0];
  }
  if (words.length == 0) {
    typingText.classList.add("big");
    typingText.innerText = "お疲れ様でした";
    reset.classList.add("block");
    state = false;
  }
});

let number = 3;
countDownNumber.innerText = number;
setInterval("textChange()", 1200);
function textChange() {
  number--;
  countDownNumber.innerText = number;
}

setTimeout(function () {
  document.querySelector(".countDown").classList.add("none");
}, 3600);
