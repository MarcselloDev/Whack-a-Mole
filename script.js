const holes = document.querySelectorAll('.hole')
let index = Math.floor(Math.random()*9)
let score = 0
let previousIndex = -1

holes.forEach((hole, i) => {
  hole.addEventListener('click', () => {
    if (index === i) {
      placeMole()
      score += 1
      console.log('Score:' + score);
    }
  });
});

function placeMole() {
  holes[index].innerHTML= ''
  previousIndex = index
  do {
    index = Math.floor(Math.random()*9)
  } while (index === previousIndex)

  holes[index].innerHTML= '<img src="mole.png"></img>'
}
placeMole()
