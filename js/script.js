const questionList = [

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
            { text: "New York", correct: false},
        ]
    },

    {
        question: "What is the capital of Germany?",
        answers: 
        [
            { text: "Hamburg", correct: false},
            { text: "Berlin", correct: true},
            { text: "Munich", correct: false},
            { text: "Cologne", correct: false},
        ]
    },
];

const questionElement = document.getElementById('question-text');
const answerButton = document.getElementById('answer-btns');
const nextButton = document.getElementById('next');

let currentQuestionIndex = 0;
let score = 0;

//Function to start the quest(reset quiz)
function startQuiz()
{
    currentQuestionIndex = 0;
    score = 0;
    //Reference to the next button
    nextButton.innerHTML = "Next";
    //Call function to show the question
    showQuestion();
}

function showQuestion()
{
    resetState();
    let currentQuestion = questionList[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ": " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerButton.appendChild(button);
        if(answer.correct)
        {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        {

        }
        
    });
}

function resetState()
{
    nextButton.style.display = 'none';
    while(answerButton.firstChild)
    {
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e)
{
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === 'true';
    if(isCorrect)
    {
        selectedBtn.classList.add('correct');
        score++;
    }else
    {
        selectedBtn.classList.add('incorrect');
    }
    Array.from(answerButton.children).forEach(button => 
        {
            if(button.dataset.correct === 'true')
            {
                button.classList.add('correct');
            }
            //prevent additional selection
            button.disabled = true;
        });

        nextButton.style.display = 'inline-block';
        
        
}

function handleNextButton()
{
    currentQuestionIndex++
    if(currentQuestionIndex < questionList.length)
    {
        showQuestion();
    }else
    {
        showScore();
    }
}

function showScore()
{
    resetState();
    questionElement.innerHTML = `Your score is ${score} out of ${questionList.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = 'inline-block';
}

nextButton.addEventListener('click', () => {
    if(currentQuestionIndex < questionList.length)
    {
        handleNextButton();
    }else
    {
        startQuiz();
    }
});


startQuiz();





