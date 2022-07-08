const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
let shuffleQuestions, currentQuestionIndex;
const questionElement = document.getElementById("question");
const answerButtonElement = document.getElementById("answer-buttons");
const timeElement = document.getElementById('current-time');
const maxTime = 75;
var timer;
var currentTime;

var currentScore;

startButton.addEventListener('click', startGame);


function startGame() {
    console.log('Started');
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
    startTimer();

}

function endGame() {
clearInterval(timer);
//todo
//save initials and high score
}

function updateTimer() {
    currentTime--;
    timeElement.innerText = currentTime;
    
    if (currentTime <= 0) {
        endGame();

    }
}

function startTimer() {
    currentTime = maxTime;
    timer = setInterval(updateTimer, 1000);
    timeElement.text = currentTime;
}

function saveScore(){
//todo
}

function showScore() {
    //todo
}

function resetScore() {
    //todo
}

function setNextQuestion() {
    //resetState();
    showQuestion(questions[currentQuestionIndex]);

}

//score functions
//todo

//save

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('question')
        button.innerText = answer.text
        button.classList.add("btn")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
       
        button.addEventListener('click', selectAnswer)
        answerButtonElement.appendChild(button)
    })
}

 function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonElement.firstChild) {
        answerButtonElement.removeChild
        (answerButtonElement.firstChild)
    }
}

function selectAnswer(e) {
    var correctAnswer = e.target.dataset.correct
    if (correctAnswer) {
       
    } else {
        currentTime -= 10
        
    }
    currentQuestionIndex++
     resetState()   
    setNextQuestion()
}
const questions = [
    {
       question: 'A string in JavaScript must be surrounded by',
       answers: [
           { text: '[]', correct: false },
           { text: '""', correct: true },
           { text: '{}', correct: false },
           { text: '()', correct: false }
       ]
    },
    {
       question: 'Functions are what type of unit of behavior',
       answers: [
           { text: 'independent', correct: true },
           { text: 'dependent', correct: false },
           { text: 'both', correct: false },
           { text: 'neither', correct: false }
       ]
    },
    {
       question: 'Objects are a collection of',
       answers: [
           { text: 'numbers', correct: false },
           { text: 'properties', correct: true },
           { text: 'thread', correct: false },
           { text: 'none of the above', correct: false }
       ]
    },
    {

       question: 'JavaScript is a ', 
       answers: [
           { text: 'single-threaded language', correct: true },
           { text: 'double-threaded language', correct: false },
           { text: 'triple-treaded language', correct: false },
           { text: 'all of the above', correct: false }
       ]
    },
]
