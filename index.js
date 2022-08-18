const cardNumberDisplay = document.querySelector(".cardNumber");
const cardNumberInput = document.querySelector("#cardNumber");

const cardNameDisplay = document.querySelector(".cardName");
const cardNameInput = document.querySelector("#cardName");

const cardExpYearDisplay = document.querySelector(".cardYear");
const cardExpMonthDisplay = document.querySelector(".cardMonth");
const cardExpYearInput = document.querySelector("#cardYear");
const cardExpMonthInput = document.querySelector("#cardMonth");

const cardCVCDisplay = document.querySelector(".cardCVV");
const cardCVCInput = document.querySelector("#cardCVC");

const form = document.querySelector("#cardForm");

import { spacedCardNo, validateInput } from "./utils.js";
import svgCheckmark from "./svg-checkmark.js";
// card number

cardNumberInput.addEventListener("keyup", (e) => {
  let number = e.target.value;
  cardNumberDisplay.textContent = spacedCardNo(number.split(""));

  cardNumberInput.value =
    e.target.value.length <= 16 ? number : number.slice(0, 14);
});

// card name

cardNameInput.addEventListener("keyup", (e) => {
  cardNameDisplay.textContent = e.target.value;
  validateInput(e, "Please enter valid name");
});

// card expiry

cardExpMonthInput.addEventListener("keyup", (e) => {
  cardExpMonthDisplay.textContent = e.target.value;
});

cardExpYearInput.addEventListener("keyup", (e) => {
  cardExpYearDisplay.textContent = e.target.value;
});

// card cvc

cardCVCInput.addEventListener("keyup", (e) => {
  cardCVCDisplay.textContent = e.target.value;
});

// form

const mainContainer = document.querySelector("main");
const mainContainerBackUp = mainContainer.innerHTML;

const successScreenHtml = ` 
<div class='success-screen'>
  ${svgCheckmark}
   
   <h1 class='success-title'> Thank you! </h1>
   <p class='success-detail'> We've added your card details </p>
   <button class='success-button'> Continue </button>
</div>`;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  mainContainer.innerHTML = successScreenHtml;
});
