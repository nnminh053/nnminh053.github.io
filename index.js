function getNoCounter() {
  const conterValue = document.getElementById("noCounter");
  return conterValue.textContent;
}

function increaseCounter(newValue) {
  document.getElementById("noCounter").textContent = newValue;
}

let noResponseMessages = [
  "Please stay with me :<",
  "Really? Do you want to change your decision?",
  "No I think you pressed the wrong button!",
  "Please! Choose again!"
];

function setResponseMessage(message) {
  document.getElementById("responseMessage").textContent = message;
}

function noButtonClicked() {
  increaseCounter(parseInt(getNoCounter()) + 1);
  const counterValue = parseInt(getNoCounter());
  const numberOfResponse = noResponseMessages.length;
  const responseMessage = noResponseMessages[(counterValue + numberOfResponse) % numberOfResponse];
  console.log(responseMessage);
  setResponseMessage(responseMessage);
}

function yesButtonClicked() {
  setResponseMessage("Awwwww! Thank you mah bae!!!! I love you so much!!!! Hope you have a happy Valentine 💛");
}