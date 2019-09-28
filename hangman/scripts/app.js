let game1
const para = document.querySelector('#puzzle')
const statusEl = document.querySelector('#status')

window.addEventListener('keypress', function (e) {
    let guessLetter = String.fromCharCode(e.charCode)
    game1.guessLetter(guessLetter)
    render()
})

const render = () => {
    para.textContent = game1.puzzle
    statusEl.textContent = game1.statusMessage
}

const startGame = async () => {
    const puzzle = await getPuzzle(1)
    game1 = new Hangman(puzzle, 5)
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()





























