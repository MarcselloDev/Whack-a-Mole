const holes = document.querySelectorAll('.hole')
let index = Math.floor(Math.random()*9)
let score = 0
let previousIndex = -1
let moleTimer

holes.forEach((hole, i) => {
  hole.addEventListener('click', () => {
    if (index === i) {
      placeMole()
      score += 1
      document.getElementById('score').textContent = score
    }
  });
});

function placeMole() {
  clearTimeout(moleTimer)
  holes[index].innerHTML= ''
  previousIndex = index
  do {
    index = Math.floor(Math.random()*9)
  } while (index === previousIndex)

  holes[index].innerHTML= '<img src="mole.png"></img>'
  startGame()
}
placeMole()

function startGame() {
  moleTimer = setTimeout(placeMole, 1000)
}
startGame()

function stopGame() {
  clearTimeout(moleTimer)
}