
const quizData = [
    {
        question: "What does BBC stand for?",
        a: "British Broadcasting Corporation",
        b: "Bello Baba Company",
        c: "Bella and bolu's Carwash",
        d: "Broke Baddies Cooks",
        correct: "a",
    },
    {
        question: "What is the main fruit in Ribena?",
        a: "Blueberry",
        b: "Blackcurrants",
        c: "Blackberry",
        d: "Strawberry",
        correct: "c",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "Which of these foods will never spoil?",
        a: "Peanuts",
        b: "Honey",
        c: "Beans",
        d: "none of the above",
        correct: "b",
    },
 {
        question: "How many rings appear on the olympic flag?",
        a: "8",
        b: "6",
        c: "5",
        d: "4",
        correct: "c",
    },
     {
        question: "What is the atomic sign for Helium on the periodic table?",
        a: "H",
        b: "HL",
        c: "He",
        d: "Hm",
        correct: "c",
    },
     {
        question: "What is infinity plus infinity?",
        a: "2x(infinity)",
        b: "Undefined",
        c: "Infinity",
        d: "It cannot be counted",
        correct: "c",
    },
    {
        question: "What is the chemical symbol of mercury?",
        a: "Me",
        b: "Hg",
        c: "Mc",
        d: "Hj",
        correct: "b",
    },
    {
        question: "Which is not a primary color?",
        a: "Red",
        b: "Green",
        c: "Yellow",
        d: "Blue",
        correct: "b",
    },
{
        question: "What is the pH of pure water?",
        a: "6",
        b: "8",
        c: "9",
        d: "7",
        correct: "d",
    },
];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>

           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})