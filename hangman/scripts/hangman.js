class Hangman {
    constructor(word, numberOfGuesses) {
        this.word = word.toLowerCase().split('')
        this.guessedLetters = [' ']
        this.numberOfGuesses = numberOfGuesses
        this.status = 'Playing'
    }

    guessLetter(guessLetter) {
        if (this.status === 'Playing') {
            guessLetter = guessLetter.toLowerCase()
            if (!this.guessedLetters.includes(guessLetter)) {
                this.guessedLetters.push(guessLetter)
                if (!this.word.includes(guessLetter)) {
                    this.numberOfGuesses--
                }
            }
            game1.reCalStatus()
        }
    }

    get puzzle() {
        let templateString = ''
        this.word.forEach((letter) => {
            if (this.guessedLetters.indexOf(letter) >= 0 || letter === ' ') {
                templateString += `${letter}`
            } else {
                templateString += '*'
            }
        })
        return templateString
    }

    reCalStatus() {
        let puzzleComplete = true
        this.word.forEach((letter) => {
            if (!this.guessedLetters.includes(letter)) {
                puzzleComplete = false
            }
        })
    
        if (puzzleComplete && this.numberOfGuesses > 0) {
            this.status = 'Finished'
        } else if (this.numberOfGuesses <= 0) {
            this.status = 'Failed'
        } else {
            this.status = 'Playing'
        }
    }

    get statusMessage() {
        let templateString = ''
        if (this.status === 'Playing') {
            templateString = `Guesses left: ${this.numberOfGuesses}`
        } else if (this.status === 'Failed') {
            templateString = `Nice try! The word was "${this.word.join('')}".`
        } else {
            templateString = 'Great work! You guessed the word.'
        }
    
        return templateString
    }

}













