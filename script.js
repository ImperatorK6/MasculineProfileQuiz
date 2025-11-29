const questions = [
    {
        title: "QUESTION 1 — Core Nature",
        subtitle: "How you recharge:",
        options: [
            "Solitude — “I recharge by being alone.”",
            "Thinking — “I feel better when I understand everything.”",
            "Taking control — “I stabilise chaos by taking charge.”",
            "Purpose — “I need a mission to feel alive.”"
        ],
        results: [
            {
                name: "Solitude",
                description: "You regain power by withdrawing from the world and returning to your internal command room. Silence, space, and distance sharpen your thoughts. You perform best when no one is draining you and no chaos is interrupting your clarity.",
                strength: "Exceptional self sufficiency and strong focus when alone.",
                weakness: "Isolation becomes a prison and you may push people away."
            },
            {
                name: "Thinking",
                description: "Your energy comes from ideas, frameworks, and planning. A clear mental map is your fuel. When you understand a situation your confidence returns and your actions become sharp.",
                strength: "Excellent at structuring problems and staying organised.",
                weakness: "Overanalysis delays action and kills momentum."
            },
            {
                name: "Taking control",
                description: "You feel strongest when you impose structure on chaos. Disorder activates your leadership instinct and brings out your decisiveness.",
                strength: "Initiative, direction, and natural command.",
                weakness: "Difficulty delegating and tension when control slips."
            },
            {
                name: "Purpose",
                description: "Your motivation comes from having a mission. When you know your direction you become unstoppable, but without a goal your energy collapses.",
                strength: "Relentless drive and long term focus.",
                weakness: "Vulnerable when uncertain or directionless."
            }
        ]
    },
    {
        title: "QUESTION 2 — Shadow Instinct",
        subtitle: "What takes over under stress:",
        options: [
            "Anger — “I get aggressive when stressed.”",
            "Withdrawal — “I pull away when overwhelmed.”",
            "Numbness — “I shut down my emotions under pressure.”",
            "Pleasing — “I try to keep everyone calm when afraid.”"
        ],
        results: [
            {
                name: "Anger",
                description: "Stress triggers aggression and pushback. You respond by fighting force with force.",
                strength: "Powerful defence and refusal to be dominated.",
                weakness: "Burns bridges and escalates conflict unnecessarily."
            },
            {
                name: "Withdrawal",
                description: "Under pressure you retreat to safety and distance. You prefer to step away rather than engage.",
                strength: "Prevents escalation and allows reflection.",
                weakness: "Missed opportunities and later regret."
            },
            {
                name: "Numbness",
                description: "Stress shuts down emotion and you become quiet and still. This creates an inner coldness that protects you from overload.",
                strength: "Calm clarity in chaos.",
                weakness: "Inaction when decisive movement is needed."
            },
            {
                name: "Pleasing",
                description: "You attempt to reduce threat by adapting to others and maintaining peace.",
                strength: "Skilled at harmony and reading people.",
                weakness: "Loses boundaries and sacrifices yourself."
            }
        ]
    },
    {
        title: "QUESTION 3 — Wound Shape",
        subtitle: "The pain that built your armour:",
        options: [
            "Rejection — “I learned to rely only on myself.”",
            "Invalidation — “I built myself because no one listened to me.”",
            "Humiliation — “I avoid failure because I’ve been shamed before.”",
            "Exposure — “I hide parts of myself to feel safe.”"
        ],
        results: [
            {
                name: "Rejection",
                description: "Your armour was forged by exclusion or abandonment. You learned not to depend on anyone.",
                strength: "Fierce independence and inner stability.",
                weakness: "Difficulty with vulnerability and closeness."
            },
            {
                name: "Invalidation",
                description: "Your voice was dismissed or ignored. You built a strong internal identity in response.",
                strength: "Clear sense of self and solid boundaries.",
                weakness: "Sensitive to disrespect and quick reactions."
            },
            {
                name: "Humiliation",
                description: "Past embarrassment or shame made dignity sacred to you. You avoid being mocked again.",
                strength: "High standards and disciplined behaviour.",
                weakness: "Perfectionism and fear of mistakes."
            },
            {
                name: "Exposure",
                description: "You were judged or observed too harshly. You learned to hide and stay guarded.",
                strength: "Sharp social awareness.",
                weakness: "Anxiety in groups and fear of being seen."
            }
        ]
    },
    {
        title: "QUESTION 4 — Real Strengths",
        subtitle: "What you consistently do well:",
        options: [
            "Independence — “I trust my own judgement.”",
            "Discipline — “I stay consistent even when motivation dies.”",
            "Loyalty — “I stay committed to the people I choose.”",
            "Integrity — “I stick to my principles no matter what.”"
        ],
        results: [
            {
                name: "Independence",
                description: "You trust your own judgement and prefer to operate alone.",
                strength: "Unshakeable authority over yourself.",
                weakness: "Slow to trust and difficulty collaborating."
            },
            {
                name: "Discipline",
                description: "You show up consistently and maintain structure.",
                strength: "Reliability and strong work ethic.",
                weakness: "Hard on yourself and difficulty resting."
            },
            {
                name: "Loyalty",
                description: "You commit deeply and stand by the people you choose.",
                strength: "Strong relationships and honourable behaviour.",
                weakness: "Betrayal is devastating and slow to heal."
            },
            {
                name: "Integrity",
                description: "Your behaviour aligns with your values. You act truthfully even when costly.",
                strength: "Respect, trustworthiness, strong moral compass.",
                weakness: "Rigidity and intolerance for compromise."
            }
        ]
    },
    {
        title: "QUESTION 5 — Self Sabotage Point",
        subtitle: "Where you break your own momentum:",
        options: [
            "Overthinking — “I think too long before acting.”",
            "Avoidance — “I avoid things that stress me.”",
            "Self doubt — “I question my own abilities.”",
            "Unstable energy — “My energy goes up and down unpredictably.”"
        ],
        results: [
            {
                name: "Overthinking",
                description: "You want clarity before action and analyse every angle.",
                strength: "High accuracy and minimal mistakes.",
                weakness: "Lost momentum and delayed action."
            },
            {
                name: "Avoidance",
                description: "You escape discomfort, conflict, or tasks when overwhelmed.",
                strength: "Good danger awareness and risk sensing.",
                weakness: "Life moves without you and guilt grows."
            },
            {
                name: "Self doubt",
                description: "You question your worth or abilities.",
                strength: "Humility and careful judgement.",
                weakness: "Blocked ambition and low confidence."
            },
            {
                name: "Unstable energy",
                description: "Your energy fluctuates strongly.",
                strength: "Powerful bursts of performance.",
                weakness: "Inconsistency and difficulty finishing long tasks."
            }
        ]
    },
    {
        title: "QUESTION 6 — Masculine Core",
        subtitle: "What makes you a man internally:",
        options: [
            "Responsibility — “I measure myself by the duties I carry.”",
            "Order — “I need structure and clarity.”",
            "Courage — “I act even when I’m scared.”",
            "Honour — “I live by my moral code.”"
        ],
        results: [
            {
                name: "Responsibility",
                description: "You define manhood by the weight you can carry and the duties you accept.",
                strength: "Natural respect and dependability.",
                weakness: "Overload and burnout."
            },
            {
                name: "Order",
                description: "You value structure clarity and stability.",
                strength: "Creates stability for yourself and others.",
                weakness: "Irritation with chaos and disorganised people."
            },
            {
                name: "Courage",
                description: "You face difficulty directly and act despite fear.",
                strength: "Boldness and protective instinct.",
                weakness: "Taking risks alone and refusing assistance."
            },
            {
                name: "Honour",
                description: "Your identity is tied to truth fairness and loyalty.",
                strength: "Inspires trust and earns admiration.",
                weakness: "Deep wounds from betrayal and holding grudges."
            }
        ]
    },
    {
        title: "QUESTION 7 — Direction of Growth",
        subtitle: "Where your life is pushing you:",
        options: [
            "Knowledge — “I’m being pushed to learn and master more.”",
            "Strength — “I need to build my physical and mental power.”",
            "Leadership — “I’m meant to guide and influence others.”",
            "Legacy — “I’m meant to build something that lasts.”"
        ],
        results: [
            {
                name: "Knowledge",
                description: "Life pushes you toward mastery and understanding.",
                strength: "Insight depth and competence.",
                weakness: "Remaining in theory instead of applying."
            },
            {
                name: "Strength",
                description: "Your path demands physical and mental power.",
                strength: "Stronger presence and resilience.",
                weakness: "Burnout or injury risk."
            },
            {
                name: "Leadership",
                description: "Your growth moves you into guiding others.",
                strength: "Influence direction and authority.",
                weakness: "Heavy responsibility and criticism."
            },
            {
                name: "Legacy",
                description: "You are pushed toward long term purpose and building something that lasts.",
                strength: "Vision consistency and meaning.",
                weakness: "Fear of wasting life and existential pressure."
            }
        ]
    }
];

let currentQuestion = 0;
let answers = [];

function displayQuestion() {
    const question = questions[currentQuestion];
    document.getElementById('question-title').innerHTML = `${question.title}<br><small>${question.subtitle}</small>`;
    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';
    question.options.forEach((option, index) => {
        const button = document.createElement('div');
        button.className = 'option';
        button.innerHTML = option;
        button.onclick = () => handleAnswer(index);
        optionsDiv.appendChild(button);
    });
}

function handleAnswer(optionIndex) {
    answers.push(optionIndex);
    currentQuestion++;
    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('results').style.display = 'block';
    const resultList = document.getElementById('result-list');
    resultList.innerHTML = '';
    questions.forEach((question, index) => {
        const selected = answers[index];
        const result = question.results[selected];
        const item = document.createElement('div');
        item.className = 'result-item';
        item.innerHTML = `
            <h3>${question.title}</h3>
            <p><strong>${result.name}</strong></p>
            <p>${result.description}</p>
            <p><strong>Strength:</strong> ${result.strength}</p>
            <p><strong>Weakness:</strong> ${result.weakness}</p>
        `;
        resultList.appendChild(item);
    });
}

document.getElementById('download-pdf').onclick = function() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    doc.setFontSize(20);
    doc.text('MASCULINE PROFILE QUIZ RESULTS', 20, 30);
    let y = 50;
    questions.forEach((question, index) => {
        const selected = answers[index];
        const result = question.results[selected];
        doc.setFontSize(16);
        doc.text(question.title, 20, y);
        y += 10;
        doc.setFontSize(14);
        doc.text(result.name, 20, y);
        y += 10;
        const descriptionLines = doc.splitTextToSize(result.description, 170);
        doc.text(descriptionLines, 20, y);
        y += descriptionLines.length * 5;
        doc.text(`Strength: ${result.strength}`, 20, y);
        y += 10;
        doc.text(`Weakness: ${result.weakness}`, 20, y);
        y += 15;
        if (y > 270) {
            doc.addPage();
            y = 30;
        }
    });
    doc.save('MasculineProfileQuizResults.pdf');
};

displayQuestion();
