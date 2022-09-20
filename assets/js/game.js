var choices = Array.from(document.querySelectorAll('.choiceAnswer'))
var question = document.querySelector('.question')
var timerCount = document.querySelector('#timerCount')
var score = document.querySelector('#score')

var timer = 0
var currentScore = 0
var questionNumber = 0
var availableQuestions = []
let currentQuestion = {}
let canAnswer = true

var questionsArray = [
    {
        question: 'What is a Rallentando?', 
        choiceA: 'When you suddenly get loud.',
        choiceB: 'When you gradually speed up.',
        choiceC: 'When you gradually slow down.',
        choiceD: 'When you suddenly get quiet.',
        answer: 'C',
    },
    {
        question: 'What does the bottom number in a time signature mean?',
        choiceA: 'It is the key for note values.',
        choiceB: 'It determines the number of beats in each measure.',
        choiceC: 'It helps you find your address.',
        choiceD: 'It says how many measures are in a song.',
        answer: 'A'
    },
    {
        question: 'What does Dulce mean in music?',
        choiceA: 'The music it intended to be played fiercly.',
        choiceB: 'The music is intended to be played sweetly.',
        choiceC: 'The music is intended to be played mournfully.',
        choiceD: 'The music is made of chocolate.',
        answer: 'B',
    },
    {
        question: 'What is a Nocturne?',
        choiceA: 'Music inspired by whimsy.',
        choiceB: 'Music inspired by the night.',
        choiceC: 'Music inspired by graveyards.',
        choiceD: 'Music inspired by the stars.',
        answer: 'B',
    },
    {
        question: 'What is objectively the best instrument?',
        choiceA: 'Woodwinds.',
        choiceB: 'Brass.',
        choiceC: 'Percussion.',
        choiceD: 'Strings.',
        answer: 'C',
    },
]

function runGame() {
    if (questionNumber > questionsArray.length - 1) {
        location.href = './score.html'
        localStorage.setItem("finalScore", JSON.stringify(currentScore))
        console.log(currentScore)
    } else {
        question.innerHTML = questionsArray[questionNumber].question
        choices.forEach((choice) => {
            const letter = choice.dataset['letter']
            choice.innerHTML = questionsArray[questionNumber]
            ['choice' + letter]
        })
    }
}

choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        let currentChoice = e.target.dataset.letter
        if (currentChoice === questionsArray[questionNumber].answer) {
            currentScore += 1
            score.innerHTML = currentScore
        }
        questionNumber++
        runGame()
    })
})






function startTimer() {
    timer = 30
    var timeLeft = setInterval(function(){
        document.getElementById('timerCount').innerHTML= timer;
        timer--;
        if (timer < 0) {
            clearInterval(timeLeft);
            
        }
    }, 1000);
}

startTimer()
runGame()