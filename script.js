// Quiz data
const questions = [
    {
        objective: "Identify your core trait.",
        question: "How you regain energy",
        options: [
            "I withdraw and recharge alone.",
            "I clear my mind by thinking.",
            "I stabilise situations and take control.",
            "I refocus myself through purpose."
        ]
    },
    {
        objective: "Identify your core trait.",
        question: "Your instinct under stress",
        options: [
            "I get angry and push back.",
            "I retreat or stay quiet.",
            "I go numb and shut down.",
            "I try to keep the peace."
        ]
    },
    {
        objective: "Identify your core trait.",
        question: "The wound that shaped you most",
        options: [
            "I grew up facing rejection.",
            "I grew up being invalidated.",
            "I grew up being humiliated.",
            "I grew up being exposed or judged."
        ]
    },
    {
        objective: "Identify your core trait.",
        question: "Your natural strength",
        options: [
            "I rely on independence.",
            "I rely on discipline.",
            "I rely on loyalty.",
            "I rely on integrity."
        ]
    },
    {
        objective: "Identify your core trait.",
        question: "How you sabotage yourself",
        options: [
            "I overthink things.",
            "I avoid difficult actions.",
            "I doubt myself.",
            "My energy is unstable."
        ]
    },
    {
        objective: "Identify your core trait.",
        question: "What defines your masculinity internally",
        options: [
            "Responsibility.",
            "Order.",
            "Courage.",
            "Honour."
        ]
    },
    {
        objective: "Identify your core trait.",
        question: "Where your life is pushing you",
        options: [
            "Knowledge.",
            "Strength.",
            "Leadership.",
            "Legacy."
        ]
    }
];

// Results data for each question's options
const resultsData = [
    // Question 1
    [
        {
            title: "Solitude",
            description: "You regain strength by withdrawing into your own world — where your thoughts sharpen, your emotions settle, and the outside noise stops interfering with your inner command. Strength: You can rebuild yourself entirely without anyone’s help. Few men possess that level of inner discipline. Weakness: When solitude becomes your default, you risk believing that you must carry every burden alone, even when partnership or support would make you stronger rather than weaker."
        },
        {
            title: "Thinking",
            description: "Clarity is your fuel. When your mind understands something fully, your energy rises as if a knot has been untied inside you. Strength: Your strategic mind makes you exceptionally rational. Weakness: You can become trapped in your own head, mistaking thought for progress and delaying decisive movement."
        },
        {
            title: "Taking control",
            description: "Your energy returns the moment you impose order — reorganising, correcting, fixing, commanding. Strength: You’re naturally suited to leadership. Weakness: You may grip too tightly. When you lose control, even slightly, you can crash internally."
        },
        {
            title: "Purpose",
            description: "When you know your mission, your energy becomes fierce and unstoppable. Strength: Meaning fuels you more than comfort ever could. Weakness: When the mission becomes unclear, you lose stability — as if your internal compass has gone dark."
        }
    ],
    // Question 2
    [
        {
            title: "Anger (fight)",
            description: "Your stress turns into force — your chest tightens, your jaw clenches, and you push back to regain control. Strength: You refuse to be overpowered. Weakness: Rage can make you misjudge the battlefield and damage connections unintentionally."
        },
        {
            title: "Withdrawal (flight)",
            description: "You retreat to regain clarity, not to surrender. Strength: It prevents you from saying or doing something reckless. Weakness: You hide longer than necessary, letting chances slip by whilst you process."
        },
        {
            title: "Numbness (freeze)",
            description: "Your mind goes still, your emotions shut down, and you become a quiet observer while everything rushes around you. Strength: You can survive chaos without panic. Weakness: You may fail to seize critical moments."
        },
        {
            title: "Pleasing (fawn)",
            description: "You de-escalate instantly, softening yourself to survive the emotional threat. Strength: You can control tension quickly. Weakness: You betray your own needs to keep the peace."
        }
    ],
    // Question 3
    [
        {
            title: "Rejection",
            description: "You learned early that you must rely on yourself. Strength: You became fiercely independent. Weakness: You struggle to let people inside your guard."
        },
        {
            title: "Invalidation",
            description: "You were taught that your feelings or identity were “wrong”. Strength: You developed a strong, unshakeable sense of self. Weakness: Disrespect hits you harder than most men."
        },
        {
            title: "Humiliation",
            description: "You experienced moments where you felt small, exposed, or powerless. Strength: You built immense dignity and personal pride. Weakness: You fear shame and push perfectionism to avoid it."
        },
        {
            title: "Exposure",
            description: "You were seen or judged before you were ready. Strength: You became observant, cautious, perceptive. Weakness: You hide your vulnerabilities too well, even from yourself."
        }
    ],
    // Question 4
    [
        {
            title: "Independence",
            description: "You’re built to stand alone and command yourself. Strength: You cannot be manipulated easily. Weakness: You trust slowly, sometimes too slowly."
        },
        {
            title: "Discipline",
            description: "Your strength is consistency and standards. Strength: People rely on you. Weakness: You punish yourself for every misstep."
        },
        {
            title: "Loyalty",
            description: "When you love or commit, you do so with depth. Strength: You’re unshakeable once you decide someone is yours. Weakness: Betrayal destroys you internally."
        },
        {
            title: "Integrity",
            description: "Your identity is built around principle. Strength: You become a stable anchor for others. Weakness: You may resist necessary compromise."
        }
    ],
    // Question 5
    [
        {
            title: "Overthinking",
            description: "You dissect every possibility until momentum dies. Strength: High intelligence. Weakness: You lose time and courage to hesitation."
        },
        {
            title: "Avoidance",
            description: "You dodge discomfort, often without realising it. Strength: You sense danger early. Weakness: You miss opportunities and progress stalls."
        },
        {
            title: "Self-doubt",
            description: "Your inner critic is louder than your ambition. Strength: You’re humble and careful. Weakness: You fail to step into your true potential."
        },
        {
            title: "Unstable energy",
            description: "You operate in waves — intense highs, silent lows. Strength: When you rise, you are powerful. Weakness: Consistency becomes difficult."
        }
    ],
    // Question 6
    [
        {
            title: "Responsibility",
            description: "You measure yourself by what you carry. Strength: You’re dependable and respected. Weakness: You take on far too much alone."
        },
        {
            title: "Order",
            description: "Your masculinity is structure, clarity, precision. Strength: You bring stability everywhere. Weakness: You cannot stand chaos, especially in people."
        },
        {
            title: "Courage",
            description: "You act even when you’re afraid. Strength: You confront life head-on. Weakness: You refuse support, believing it’s weakness."
        },
        {
            title: "Honour",
            description: "You live by an inner code. Strength: You’re unshakeable in truth and loyalty. Weakness: Betrayal feels like a wound to the soul."
        }
    ],
    // Question 7
    [
        {
            title: "Knowledge",
            description: "Life is shaping you into a master of understanding. Strength: Sharp mind, deep insight. Weakness: You risk living too much in theory."
        },
        {
            title: "Strength",
            description: "You’re being forged to become resilient and formidable. Strength: Presence, confidence, endurance. Weakness: Burnout from pushing too hard."
        },
        {
            title: "Leadership",
            description: "Your life is pushing you into command. Strength: Influence, structure, authority. Weakness: The responsibility can become crushing."
        },
        {
            title: "Legacy",
            description: "Your story is about impact, meaning, and what you will leave behind. Strength: Vision and purpose. Weakness: You fear wasting your gifts."
        }
    ]
];

// Codename mapping (simplified, based on first answer)
const codenames = ["THE STRATEGIST", "THE LONE WOLF", "THE COMMANDER", "THE ANCHOR"];

let currentQuestion = 0;
let answers = [];

document.addEventListener('DOMContentLoaded', () => {
    initBootScreen();
});

function initBootScreen() {
    const typingText = document.getElementById('typing-text');
    const beginBtn = document.getElementById('begin-btn');
    const text = "INITIALISING SYSTEM…\nMASCULINE PROFILE QUIZ LOADING…\nTACTICAL INTERFACE READY.";
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            typingText.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        } else {
            beginBtn.style.display = 'block';
        }
    }

    typeWriter();

    beginBtn.addEventListener('click', startQuiz);
}

function startQuiz() {
    document.getElementById('boot-screen').classList.remove('active');
    document.getElementById('question-screen').classList.add('active');
    showQuestion();
}

function showQuestion() {
    const sectionNum = document.getElementById('section-num');
    const objective = document.getElementById('objective');
    const questionText = document.getElementById('question-text');
    const optionsDiv = document.getElementById('options');

    sectionNum.textContent = currentQuestion + 1;
    objective.textContent = `Objective: ${questions[currentQuestion].objective}`;
    questionText.textContent = questions[currentQuestion].question;

    optionsDiv.innerHTML = '';
    questions[currentQuestion].options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.textContent = option;
        optionDiv.addEventListener('click', () => selectOption(index));
        optionsDiv.appendChild(optionDiv);
    });
}

function selectOption(index) {
    answers.push(index);
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById('question-screen').classList.remove('active');
    document.getElementById('results-screen').classList.add('active');

    const codenameDiv = document.getElementById('codename');
    const breakdownDiv = document.getElementById('breakdown');
    const directiveDiv = document.getElementById('directive');

    // Simplified codename based on first answer
    codenameDiv.textContent = codenames[answers[0]];

    breakdownDiv.innerHTML = '';
    answers.forEach((answer, index) => {
        const panel = document.createElement('div');
        panel.className = 'panel';
        const result = resultsData[index][answer];
        panel.innerHTML = `<h3>${result.title}</h3><p>${result.description}</p>`;
        breakdownDiv.appendChild(panel);
    });

    directiveDiv.innerHTML = '<h3>Recommended Operating Directive</h3><p>Embrace your strengths and confront your weaknesses head-on. Forge ahead with purpose and discipline.</p>';

    // Export options
    document.getElementById('export-pdf').addEventListener('click', () => alert('PDF export not implemented yet.'));
    document.getElementById('copy-summary').addEventListener('click', copySummary);
    document.getElementById('restart').addEventListener('click', () => location.reload());
}

function copySummary() {
    const summary = document.getElementById('codename').textContent + '\n\n' + 
                    Array.from(document.querySelectorAll('.panel')).map(p => p.textContent).join('\n\n') + '\n\n' + 
                    document.getElementById('directive').textContent;
    navigator.clipboard.writeText(summary).then(() => alert('Summary copied to clipboard!'));
}
