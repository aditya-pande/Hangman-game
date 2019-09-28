# Hangman-game
Hangman game web app

Hangman is a word guessing game.

scripts folder consists of javascript files.
hangman.js file contains a class hangman with hangman game methods.

request.js file fetches new puzzle from http://puzzle.mead.io/puzzle every time you refresh the page or click the reset button.

app.js file contains the code that starts the game. app.js file can be used to configure the game's difficulty by increasing or decreasing the number of guesses, it is the second parameter of Hangman class in line 18 app.js file //game1 = new Hangman(puzzle, 5). One can also change the number of words in the puzzle by increasing or decreasing the wordCount, it is the parameter of getPuzzle function in line 17 app.js file //const puzzle = await getPuzzle(1).

If it does not work then extract all the javascript files from the scripts folder and put it with index.html and make changes to the index.html file replace the below script tags in index.html:
    
    <script src="/scripts/request.js"></script>
    <script src="/scripts/hangman.js"></script>
    <script src="/scripts/app.js"></script>
    
with

    <script src="request.js"></script>
    <script src="hangman.js"></script>
    <script src="app.js"></script>
    
styles folder contains styles.css file for styling the page.

NOTE: http://puzzle.mead.io/puzzle this web API is the work of Andrew Mead (Udemy Instructor of The Modern JavaScript Bootcamp).
