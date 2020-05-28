
const finalScore = document.getElementById('finalScore')

let getScore = localStorage.getItem('score');
console.log(getScore)

finalScore.textContent = `Your score: ${getScore} points`
