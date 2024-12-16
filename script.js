// Questions array
const questions = [
    {
        question: "You receive an email from your bank asking for your account details. What should you do?",
        options: [
            "Reply with your account details to avoid account suspension.",
            "Ignore the email and contact your bank directly using official channels.",
            "Click the link in the email to verify your account."
        ],
        correct: 1
    },
    {
        question: "What is 'phishing'?",
        options: [
            "A scam where attackers try to trick you into revealing personal information.",
            "A method used by banks to verify your identity.",
            "A secure way to send emails."
        ],
        correct: 0
    },
    {
        question: "You get a text message saying you've won a $1,000 gift card. What should you do?",
        options: [
            "Click the link to claim your prize.",
            "Reply to the text asking for more details.",
            "Ignore the message; it’s likely a scam (smishing)."
        ],
        correct: 2
    },
    {
        question: "What is 'smishing'?",
        options: [
            "A phishing scam conducted via text messages.",
            "A type of scam using fake websites.",
            "A secure way to send SMS messages."
        ],
        correct: 0
    },
    {
        question: "You receive a call from someone claiming to be the IRS and demanding payment via gift cards. What do you do?",
        options: [
            "Buy the gift cards and provide the codes as requested.",
            "Ask the caller for their badge number and call back using the official IRS number.",
            "Ignore the call and report it to the authorities."
        ],
        correct: 2
    },
    {
        question: "What is 'vishing'?",
        options: [
            "A phishing scam conducted via phone calls.",
            "A secure way to verify someone's identity.",
            "An email scam targeting businesses."
        ],
        correct: 0
    },
    {
        question: "A pop-up on your computer says your system is infected and asks you to call a support number. What should you do?",
        options: [
            "Call the number immediately to fix your system.",
            "Close the pop-up and run a legitimate antivirus scan.",
            "Click the pop-up to download the suggested software."
        ],
        correct: 1
    },
    {
        question: "What is 'social engineering' in cybersecurity?",
        options: [
            "A method of building secure websites.",
            "Tricking people into revealing sensitive information.",
            "A way to design software to prevent hacking."
        ],
        correct: 1
    },
    {
        question: "What is a common sign of a phishing email?",
        options: [
            "It has a generic greeting like 'Dear Customer' instead of your name.",
            "It is sent from an official company email address.",
            "It contains no spelling or grammatical errors."
        ],
        correct: 0
    },
    {
        question: "What is a 'man-in-the-middle' attack?",
        options: [
            "An attacker intercepting communication between two parties.",
            "An attacker impersonating a trusted website.",
            "A method of guessing passwords."
        ],
        correct: 0
    },
    {
        question: "Which of the following is the safest way to access your online banking account?",
        options: [
            "Click a link in an email from your bank.",
            "Type the bank's URL directly into your browser.",
            "Search for the bank's website on a search engine."
        ],
        correct: 1
    },
    {
        question: "What should you do if you suspect your password has been stolen?",
        options: [
            "Change your password immediately.",
            "Wait to see if any unusual activity occurs.",
            "Do nothing; it's not a big deal."
        ],
        correct: 0
    },
    {
        question: "What is two-factor authentication (2FA)?",
        options: [
            "A method of securing accounts using two pieces of evidence to verify your identity.",
            "A way to access accounts without a password.",
            "A method of encrypting data."
        ],
        correct: 0
    }
];

let currentQuestionIndex = 0;
let correctAnswers = 0; // Track correct answers
let wrongAnswers = 0; // Track wrong answers

// DOM Elements
const questionBox = document.getElementById('question-box');
const optionsDiv = document.getElementById('options');
const feedback = document.getElementById('feedback');
const nextButton = document.getElementById('next-question');
const music = document.getElementById('background-music');
const toggleMusicButton = document.getElementById('toggle-music');

// Set initial button text to "Play Music"
toggleMusicButton.textContent = "Play Music";

// Load the current question
function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionBox.textContent = currentQuestion.question;

    // Clear previous options
    optionsDiv.innerHTML = '';

    // Add options as buttons
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = () => checkAnswer(index);
        optionsDiv.appendChild(button);
    });

    feedback.textContent = '';
    nextButton.style.display = 'none';
}

// Check the answer
function checkAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedIndex === currentQuestion.correct) {
        feedback.textContent = "Correct!";
        feedback.style.color = "green";
        correctAnswers++; // Increment correct answers
    } else {
        feedback.textContent = "Wrong! Try again.";
        feedback.style.color = "red";
        wrongAnswers++; // Increment wrong answers
    }
    nextButton.style.display = 'inline-block';
}

// Load the next question or show final score
nextButton.onclick = () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showFinalScore(); // Show final score at the end
    }
};

// Show final score and thanks message
function showFinalScore() {
    questionBox.textContent = "Game Over! Here's how you did:";
    optionsDiv.innerHTML = `
        <p>Correct Answers: ${correctAnswers}</p>
        <p>Wrong Answers: ${wrongAnswers}</p>
        <p>Thanks for playing!</p>
        <p>Connect with me on LinkedIn!</p>
        <a href="https://www.linkedin.com/in/maddie-dietrichs-893084314/" target="_blank">Maddie Dietrichs</a>
    `;
    feedback.textContent = '';
    nextButton.style.display = 'none';
}

// Toggle music playback and button text
toggleMusicButton.addEventListener('click', () => {
    if (music.paused) {
        music.play();
        toggleMusicButton.textContent = 'Mute Music';
    } else {
        music.pause();
        toggleMusicButton.textContent = 'Play Music';
    }
});

// Initialize the game
loadQuestion();
