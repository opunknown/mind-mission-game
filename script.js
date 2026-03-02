const levels = [
    {
        scenario: "You feel nervous before speaking in class.",
        choices: [
            { text: "Take slow breaths and prepare calmly.", correct: true },
            { text: "Pretend to be sick.", correct: false },
            { text: "Blame the teacher.", correct: false }
        ]
    },
    {
        scenario: "A friend did not invite you to a party.",
        choices: [
            { text: "Ask kindly if everything is okay.", correct: true },
            { text: "Post something mean online.", correct: false },
            { text: "Stop talking to everyone.", correct: false }
        ]
    },
    {
        scenario: "You made a mistake during a game.",
        choices: [
            { text: "Learn from it and try again.", correct: true },
            { text: "Quit immediately.", correct: false },
            { text: "Yell at teammates.", correct: false }
        ]
    },
    {
        scenario: "You feel overwhelmed with homework.",
        choices: [
            { text: "Break tasks into small steps.", correct: true },
            { text: "Ignore everything.", correct: false },
            { text: "Complain without action.", correct: false }
        ]
    }
];

let currentLevel = 0;
let score = 0;

function loadLevel() {
    const level = levels[currentLevel];
    document.getElementById("scenario").innerText = level.scenario;
    document.getElementById("choices").innerHTML = "";
    document.getElementById("feedback").innerText = "";
    document.getElementById("nextBtn").style.display = "none";

    level.choices.forEach(choice => {
        const btn = document.createElement("button");
        btn.innerText = choice.text;
        btn.classList.add("choice-btn");
        btn.onclick = () => selectChoice(choice.correct);
        document.getElementById("choices").appendChild(btn);
    });

    document.getElementById("level").innerText = currentLevel + 1;
    updateProgress();
}

function selectChoice(correct) {
    if (correct) {
        score += 10;
        document.getElementById("feedback").innerText = "Great decision! You leveled up your mindset!";
    } else {
        document.getElementById("feedback").innerText = "That may not help. Try thinking calmly next time.";
    }

    document.getElementById("score").innerText = score;
    document.getElementById("nextBtn").style.display = "block";
}

function nextLevel() {
    currentLevel++;
    if (currentLevel < levels.length) {
        loadLevel();
    } else {
        document.getElementById("gameArea").innerHTML =
            "<h2>Mission Complete!</h2>" +
            "<p>Your Final Score: " + score + "</p>" +
            "<button onclick='location.reload()'>Play Again</button>";
        document.getElementById("progressBar").style.width = "100%";
    }
}

function updateProgress() {
    const progress = ((currentLevel) / levels.length) * 100;
    document.getElementById("progressBar").style.width = progress + "%";
}

loadLevel();
