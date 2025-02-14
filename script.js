const holes = document.querySelectorAll('.hole')
let index = Math.floor(Math.random()*9)
let score = 0
let previousIndex = -1
let moleTimer
let gameStarted = false
let highScore = localStorage.getItem('highScore') || 0

document.getElementById('high-score').textContent = highScore;

holes.forEach((hole, i) => {
  hole.addEventListener('click', () => {
    gameStarted = true
    if (index === i) {
      placeMole()
      score += 1
      setHighScore()
      document.getElementById('score').textContent = score
    }
  });
});

document.querySelector('.stop-btn').addEventListener('click', () => {
  stopGame()
  gameStarted = false
})

document.querySelector('.start-btn').addEventListener('click', () => {
  clearTimeout(moleTimer)
  startGame()
  gameStarted = true
})

function placeMole() {
  clearTimeout(moleTimer)
  holes[index].innerHTML= ''
  previousIndex = index
  do {
    index = Math.floor(Math.random()*9)
  } while (index === previousIndex)

  holes[index].innerHTML= '<img src="mole.png"></img>'

  if (gameStarted === true) {
    startGame()
  }
  
}
placeMole()

function startGame() {
  moleTimer = setTimeout(placeMole, 1000)
}

function stopGame() {
  placeMole()
  clearTimeout(moleTimer)
  setHighScore()
  score = 0
  document.getElementById('score').textContent = score
}

function setHighScore() {
  if (score > highScore) {
    highScore = score
    localStorage.setItem('highScore', highScore)
    document.getElementById('high-score').textContent = highScore;
  }
}