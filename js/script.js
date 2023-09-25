const questions = [

    {
        question: "What is the capital of Mexico?",
        answers: 
        [
            { text: "Mexico City", correct: true},
            { text: "Oaxaca", correct: false},
            { text: "Tijuana", correct: false},
            { text: "Guadalajara", correct: false},
        ]
    },

    {
        question: "What is the capital of Jamaica?",
        answers: 
        [
            { text: "Montego Bay", correct: false},
            { text: "Portmore", correct: false},
            { text: "Kingston", correct: true},
            { text: "Lucea", correct: false},
        ]
    },

    {
        question: "What is the capital of Poland?",
        answers: 
        [
            { text: "Lublin", correct: false},
            { text: "Kraków", correct: false},
            { text: "Gdańsk", correct: false},
            { text: "Warsaw", correct: true},
        ]
    },

    {
        question: "What is the capital of the United States?",
        answers: 
        [
            { text: "Washington D.C.", correct: true},
            { text: "Washington State", correct: false},
            { text: "Texas", correct: false},
            { text: "New York", correct: true},
        ]
    },

    {
        question: "What is the capital of Germany?",
        answers: 
        [
            { text: "Hamburg", correct: false},
            { text: "Berlin", correct: true},
            { text: "Munich", correct: false},
            { text: "Cologne", correct: true},
        ]
    },
];

const questionElement = document.getElementById('question-text');
const answerButton = document.getElementById('answer-btns');
const nextButton = document.getElementById('next');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz()
{
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion()
{
    let currentQuestion = questions[currentQuestionIndex];
}





