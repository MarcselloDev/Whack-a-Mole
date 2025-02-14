const holes = document.querySelectorAll('.hole')
let index = Math.floor(Math.random()*9)
let score = 0
let previousIndex = -1
let moleTimer
let gameStarted = false
let highScore = localStorage.getItem('highScore') || 0
let gameTimer = 1000
let gameTime

document.getElementById('high-score').textContent = highScore;

holes.forEach((hole, i) => {
  hole.addEventListener('click', () => {
    if (gameStarted === false) {
      startGame()
      gameStarted = true
      holes[index].innerHTML= '<img src="mole.png"></img>'
    }
    if (index === i && gameStarted) {
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
  clearTimeout(moleTimer)
})

document.querySelector('.start-btn').addEventListener('click', () => {
  stopGame()
  startGame()
  gameStarted = true
  holes[index].innerHTML= '<img src="mole.png"></img>'
})

function placeMole() {
  clearTimeout(moleTimer)
  if (gameStarted === true) {
    moleTimer = setTimeout(placeMole, 1000)
  }
  holes[index].innerHTML= ''
  previousIndex = index
  do {
    index = Math.floor(Math.random()*9)
  } while (index === previousIndex)

  holes[index].innerHTML= '<img src="mole.png"></img>'

}

function startGame() {
  moleTimer = setTimeout(placeMole, 1000)
  startTimer()
}

function stopGame() {
  clearTimeout(moleTimer)
  clearInterval(gameTime)
  setHighScore()
  score = 0
  document.getElementById('score').textContent = score
  gameStarted = false
  holes[index].innerHTML= ''
}

function setHighScore() {
  if (score > highScore) {
    highScore = score
    localStorage.setItem('highScore', highScore)
    document.getElementById('high-score').textContent = highScore;
  }
}

function startTimer() {
  gameTimer = 1000
  gameTime = setInterval(() => {
    gameTimer--
    document.getElementById('timer').textContent = "Time left: " + (gameTimer/100).toFixed(2)
    if (gameTimer === 0) {
      stopGame()
      clearInterval(gameTime)
    }
  }, 10)
}