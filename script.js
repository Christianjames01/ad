const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Lisbon"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Mars"
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        options: ["Harper Lee", "Mark Twain", "Jane Austen", "Charles Dickens"],
        answer: "Harper Lee"
    }
];

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("quiz-container").style.display = "block";
    document.getElementById("result").style.display = "none";
    showQuestion();
}

function showQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById("question").textContent = question.question;
    
    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";
    
    question.options.forEach((option, index) => {
        const optionElement = document.createElement("div");
        optionElement.classList.add("option");
        optionElement.innerHTML = `
            <input type="radio" name="option" id="option${index}" value="${option}">
            <label for="option${index}">${option}</label>
        `;
        optionsContainer.appendChild(optionElement);
    });
}

function nextQuestion() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (!selectedOption) {
        alert("Please select an answer!");
        return;
    }

    const answer = selectedOption.value;
    if (answer === questions[currentQuestionIndex].answer) {
        score++;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("result").style.display = "block";
    document.getElementById("score").textContent = `${score} / ${questions.length}`;
}

// Start the quiz initially
startQuiz();
