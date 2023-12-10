const question = document.getElementById('quiz-question');
const answers = document.querySelector('.quiz-answers');
let currentQuestion = document.getElementById('current-question');
const totalQuestion = document.getElementById('total-question');
const nextButton = document.getElementById('check-answer')
const playAgainButton = document.getElementById("play-again")
const result = document.getElementById("result") 
const correctScore = document.getElementById("total-score")

// keeps track of how many questions the user has done
let correctAnswer = '';
let currentQuestions = 0;
let askedCount = 0;
let questionTotal = 5;
let totalScore = 0;

// helps with buttons being clicked
function EventListener(){
    nextButton.addEventListener('click', checkAnswer);
    playAgainButton.addEventListener('click', restartQuiz);
}

// loads all the jazz
document.addEventListener('DOMContentLoaded', () => {
    loadQuestion();
    EventListener();
    // sets the current questions answered
    totalQuestion.textContent = questionTotal;
    // sets how many total questions there are
    currentQuestion.textContent = currentQuestions;

    totalScore.textContent = correctScore;
});

// gets info from JSON file
async function loadQuestion(){
    const response = await fetch('https://opentdb.com/api.php?amount=20&category=9&type=multiple');
    const data = await response.json();
    result.innerHTML = "";
    showQuestion(data.results[0]);
    questionScore = calculateScore(data.results[0].difficulty)
}

// displays the questions and answers
function showQuestion(data) {
    nextButton.disabled = false;
    // grabs the correct answers
    correctAnswer = data.correct_answer;
    // grabs the incorrect answers
    let incorrectAnswer = data.incorrect_answers;
    // puts the incorrect answers and correct answers into the same variable
    let answersList = incorrectAnswer;
    answersList.splice(Math.floor(Math.random() * (incorrectAnswer.length + 1)), 0, correctAnswer);   
    // throws answersList into HTML file
    question.innerHTML = `${data.question} <br> <span class = "category">${data.difficulty.toUpperCase()}</span>`;
    answers.innerHTML = `
        ${answersList.map((answer, index) => `
        <li><span> ${answer} </span> </li>
        `).join(``)}
    `;
    selectAnswer();
}

// button reacts when you click on it
function selectAnswer(){
    // for each item in the list of answers (li)
    answers.querySelectorAll('li').forEach((answer) => {
        // website recongizes that the button is clicked 
        answer.addEventListener('click', () => {
            if(answers.querySelector('.selected')){
                const activeAnswer = answers.querySelector('.selected');
                activeAnswer.classList.remove('selected');
            }
            answer.classList.add('selected');
        });
    });
    console.log(correctAnswer)
}

// checks for answer
function checkAnswer() {
    // only lets the the next button get clicked once
    nextButton.disabled = true; 
    
    // increment counter
    currentQuestions++;
    
    // console logs the selected answer
    if(answers.querySelector('.selected')){
        let selectedAnswer = answers.querySelector('.selected span').textContent;
        // result if they answer correctly
        if(selectedAnswer.trim() == HTMLdecode(correctAnswer)){
            result.innerHTML = `<p>Correct Answer!</p>`;
            updateTotalScore();

        }
        // result if they answer incorrectly
        else {
            result.innerHTML = `<p> Incorrect Answer!</p><p><small><b>Correct Answer: </b> ${correctAnswer}</small></p>`
        }
        checkCount();
    // if the person didn't click on an answer
    } else {
        result.innerHTML = `<p>Please select an answer!</p>`
        nextButton.disabled = false;
    }
    currentQuestion.textContent = currentQuestions

}

// takes away the funky code from HTML so it will recognize when an answer is correct
function HTMLdecode (textString) {
    let doc = new DOMParser().parseFromString(textString, "text/html");
    return doc.documentElement.textContent;
}
// counts total questions answered and gives results
function checkCount() {
    askedCount++;
    setCount();
    if (askedCount == questionTotal) {
        result.innerHTML = `<p>Congrats! </br>Your score is ${totalScore}!</p>`;
        playAgainButton.style.display = "block";
        nextButton.style.display = "none";
    } else {
        setTimeout(() => {
            loadQuestion();
        }, 2500);
    }
}

// caluclates difficulty of question into points from JSON file
function calculateScore(difficulty) {
    switch (difficulty.toLowerCase()) {
        case 'easy':
            return 100;
            break;
        case 'medium':
            return 200;
            break;
        case 'hard':
            return 300;
            break;
        default:
            return 0;
            break;     
    }
}

// sums up the points
function updateTotalScore() {
    totalScore += questionScore;
    correctScore.textContent = totalScore
}

// counts the questions
function setCount() {
    totalQuestion.textContent = questionTotal;
    currentQuestion.textContent = currentQuestions;
}


// resest the quiz
function restartQuiz() {
    location.reload(0);
}