export const spacedCardNo = (list) => {
  let newCardNo = [];
  list.map((number, index) => {
    if (index > 15) {
      return newCardNo.join("");
    }
    if (index % 4 === 0) {
      newCardNo.push(" ");
      newCardNo.push(number);
    } else {
      newCardNo.push(number);
    }
  });
  return newCardNo.join("");
};

export const validateInput = (input, message) => {
  if (input.currentTarget.validity.patternMismatch) {
    input.currentTarget.setCustomValidity(`${message}`);
  } else {
    input.currentTarget.setCustomValidity("");
  }
};
