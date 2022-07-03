const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')

startButton.addEventListener('click', startGame)


function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    questionContainerElement.classList.remove('hide')
    setNextQuestion()

}

function setNextQuestion() {

}

function selectAnswer() {

}
const questions = [
    {
       question: 'An array has to be stored in',
       answers: [
           { text: '""', correct: false },
           { text: '[]', correct: true },
           { text: '{}', correct: false },
           { text: '()', correct: false },
       ]
       
       question: 'To declare the end of a statement use',
       answer: [
           { text: ';', correct: true },
           { text: ':', correct: false },
           { text: '.', correct: false },
           { text: '/', correct: false },
       ]

       question: 'What does a string refer to?'
       answer: [
           { text: 'numbers', correct: false },
           { text: 'text', correct: true },
           { text: 'thread', correct: false },
           { text: 'none of the above', correct: false },
       ]

       question: 'What git command creates a new branch', 
       answer: [
           { text: 'git checkout -b', correct: true },
           { text: 'git commit -b', correct: false },
           { text: 'git checkout -m', correct: false },
           { text: 'git status', correct: false },
       ]
    }
]