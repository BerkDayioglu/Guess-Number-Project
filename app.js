const randomNumber = Math.ceil(Math.random() * 20);
// console.log(randomNumber);

const again = document.querySelector(".again");
const guess = document.querySelector(".guess");
const check = document.querySelector(".check");
const message = document.querySelector(".msg");
const div = document.querySelector(".number");
const life = document.querySelector(".life");

let hak = 10;
let topScore = 0;

console.log(randomNumber);

check.addEventListener("click", () => {
  if (!guess.value) {
    message.textContent = "Please guess a number";
  } else if (guess.value < 0 || guess.value > 20) {
    guess.value = "";
    message.textContent = "Guess a number between 1 and 20";
  } else if (guess.value == randomNumber) {
    guess.value = "";
    message.textContent = "WELL DONE, YOU GUESSED THE NUMBER!🎉";
    div.textContent = randomNumber;
    div.style.backgroundColor = "green";
    check.disabled = true;
    if (hak > topScore) {
      topScore = hak;
      document.querySelector(".topScore").textContent = topScore;
    }
  } else if (guess.value < randomNumber) {
    guess.value = "";
    message.textContent = "Increase the number⬆️";
    if (hak > 0) {
      hak--;
      life.textContent = hak;
    }
  } else {
    guess.value = "";
    message.textContent = "Decrease the number⬇️";
    if (hak > 0) {
      hak--;
      life.textContent = hak;
    }
  }

  if (hak == 0) {
    div.style.backgroundColor = "red";
    div.textContent = "☠️";
    check.disabled = true;
    message.textContent ="❌TRY AGAİN❌"
  }
});

again.addEventListener("click", () => {
  location.reload();
});
