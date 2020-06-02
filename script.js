
// DOM
const wordRandom = document.getElementById('wordRandom')
const wordArray = ['rabbit', 'football', 'music', 'tennis', 'home', 'car', 'house', 'anticonstitutional', 'embourgeoisement', 'tergiversation', 'Antidisestablishmentarianism', 'chocolate', 'apple', 'incomprehensibilities', 'unimaginatively', 'power', 'fashion', 'president'];
const answer = document.getElementById('answer');
const time = document.getElementById('time');
let scoreGame = document.getElementById('scoreGame');

// Game score and word
let score = 0;
let answerValue = answer.value;
let random = randomize(wordArray);
let typeWord = wordArray[random];
wordRandom.textContent = `${typeWord}`;

//Timer
let timer = 15

setInterval(function() {
  time.textContent = `Time Left: ${timer}s`
  timer--

  if (timer === 0) {
     window.location.assign('/end.html');
  }

}, 1000);


// Keyup function
answer.addEventListener('keyup', (event) => {
  if (answer.value === typeWord) {

    // Update score
    increment();
    scoreGame.textContent = `Score: ${score}`

    // Change word
    random = randomize(wordArray)
    typeWord = wordArray[random];
    wordRandom.textContent = `${typeWord}`;
    answer.value = "";
    timer += 4;

    }
});

const increment = () => {

  // Increment score
  score ++ ;

  // Store score in local server
  localStorage.setItem('score', score);
}

function randomize(array) {
    result = Math.floor(Math.random() * array.length);
    return result
};



