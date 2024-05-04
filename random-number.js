// Random Number generator with delay  and progress indicator
let delay = 3; // seconds
let countdownInterval;

console.log(`Random number will be generated in ${delay} seconds.`);

countdownInterval = setInterval(() => {
  delay--;
  console.log(`Time remaining: ${delay} seconds.`);
  if (delay === 0) {
    clearInterval(countdownInterval);
    generateRandomNumber();
  }
}, 1000);

function generateRandomNumber() {
  const randomNumber = Math.floor(Math.random() * 100); // generate a random number between 0 and 99
  console.log(`Random number generated: ${randomNumber}`);
}