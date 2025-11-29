// Quiz Data
const quizData = [
    {
        id: 1,
        category: "Core Nature",
        title: "How you recharge:",
        answers: [
            {
                emoji: "1️⃣",
                name: "Solitude",
                meaning: "You regain power by withdrawing from the world and returning to your internal command room. Silence, space, and distance sharpen your thoughts. You perform best when no one is draining you and no chaos is interrupting your clarity.",
                strengths: ["Exceptional self sufficiency and strong focus when alone."],
                weaknesses: ["Isolation becomes a prison and you may push people away."]
            },
            {
                emoji: "2️⃣",
                name: "Thinking",
                meaning: "Your energy comes from ideas, frameworks, and planning. A clear mental map is your fuel. When you understand a situation your confidence returns and your actions become sharp.",
                strengths: ["Excellent at structuring problems and staying organised."],
                weaknesses: ["Overanalysis delays action and kills momentum."]
            },
            {
                emoji: "3️⃣",
                name: "Taking control",
                meaning: "You feel strongest when you impose structure on chaos. Disorder activates your leadership instinct and brings out your decisiveness.",
                strengths: ["Initiative, direction, and natural command."],
                weaknesses: ["Difficulty delegating and tension when control slips."]
            },
            {
                emoji: "4️⃣",
                name: "Purpose",
                meaning: "Your motivation comes from having a mission. When you know your direction you become unstoppable, but without a goal your energy collapses.",
                strengths: ["Relentless drive and long term focus."],
                weaknesses: ["Vulnerable when uncertain or directionless."]
            }
        ]
    },
    {
        id: 2,
        category: "Shadow Instinct",
        title: "What takes over under stress:",
        answers: [
            {
                emoji: "1️⃣",
                name: "Anger",
                meaning: "Stress triggers aggression and pushback. You respond by fighting force with force.",
                strengths: ["Powerful defence and refusal to be dominated."],
                weaknesses: ["Burns bridges and escalates conflict unnecessarily."]
            },
            {
                emoji: "2️⃣",
                name: "Withdrawal",
                meaning: "Under pressure you retreat to safety and distance. You prefer to step away rather than engage.",
                strengths: ["Prevents escalation and allows reflection."],
                weaknesses: ["Missed opportunities and later regret."]
            },
            {
                emoji: "3️⃣",
                name: "Numbness",
                meaning: "Stress shuts down emotion and you become quiet and still. This creates an inner coldness that protects you from overload.",
                strengths: ["Calm clarity in chaos."],
                weaknesses: ["Inaction when decisive movement is needed."]
            },
            {
                emoji: "4️⃣",
                name: "Pleasing",
                meaning: "You attempt to reduce threat by adapting to others and maintaining peace.",
                strengths: ["Skilled at harmony and reading people."],
                weaknesses: ["Loses boundaries and sacrifices yourself."]
            }
        ]
    },
    {
        id: 3,
        category: "Wound Shape",
        title: "The pain that built your armour:",
        answers: [
            {
                emoji: "1️⃣",
                name: "Rejection",
                meaning: "Your armour was forged by exclusion or abandonment. You learned not to depend on anyone.",
                strengths: ["Fierce independence and inner stability."],
                weaknesses: ["Difficulty with vulnerability and closeness."]
            },
            {
                emoji: "2️⃣",
                name: "Invalidation",
                meaning: "Your voice was dismissed or ignored. You built a strong internal identity in response.",
                strengths: ["Clear sense of self and solid boundaries."],
                weaknesses: ["Sensitive to disrespect and quick reactions."]
            },
            {
                emoji: "3️⃣",
                name: "Humiliation",
                meaning: "Past embarrassment or shame made dignity sacred to you. You avoid being mocked again.",
                strengths: ["High standards and disciplined behaviour."],
                weaknesses: ["Perfectionism and fear of mistakes."]
            },
            {
                emoji: "4️⃣",
                name: "Exposure",
                meaning: "You were judged or observed too harshly. You learned to hide and stay guarded.",
                strengths: ["Sharp social awareness."],
                weaknesses: ["Anxiety in groups and fear of being seen."]
            }
        ]
    },
    {
        id: 4,
        category: "Real Strengths",
        title: "What you consistently do well:",
        answers: [
            {
                emoji: "1️⃣",
                name: "Independence",
                meaning: "You trust your own judgement and prefer to operate alone.",
                strengths: ["Unshakeable authority over yourself."],
                weaknesses: ["Slow to trust and difficulty collaborating."]
            },
            {
                emoji: "2️⃣",
                name: "Discipline",
                meaning: "You show up consistently and maintain structure.",
                strengths: ["Reliability and strong work ethic."],
                weaknesses: ["Hard on yourself and difficulty resting."]
            },
            {
                emoji: "3️⃣",
                name: "Loyalty",
                meaning: "You commit deeply and stand by the people you choose.",
                strengths: ["Strong relationships and honourable behaviour."],
                weaknesses: ["Betrayal is devastating and slow to heal."]
            },
            {
                emoji: "4️⃣",
                name: "Integrity",
                meaning: "Your behaviour aligns with your values. You act truthfully even when costly.",
                strengths: ["Respect, trustworthiness, strong moral compass."],
                weaknesses: ["Rigidity and intolerance for compromise."]
            }
        ]
    },
    {
        id: 5,
        category: "Self-Sabotage Point",
        title: "Where you break your own momentum:",
        answers: [
            {
                emoji: "1️⃣",
                name: "Overthinking",
                meaning: "You want clarity before action and analyse every angle.",
                strengths: ["High accuracy and minimal mistakes."],
                weaknesses: ["Lost momentum and delayed action."]
            },
            {
                emoji: "2️⃣",
                name: "Avoidance",
                meaning: "You escape discomfort, conflict, or tasks when overwhelmed.",
                strengths: ["Good danger awareness and risk sensing."],
                weaknesses: ["Life moves without you and guilt grows."]
            },
            {
                emoji: "3️⃣",
                name: "Self-doubt",
                meaning: "You question your worth or abilities.",
                strengths: ["Humility and careful judgement."],
                weaknesses: ["Blocked ambition and low confidence."]
            },
            {
                emoji: "4️⃣",
                name: "Unstable energy",
                meaning: "Your energy fluctuates strongly.",
                strengths: ["Powerful bursts of performance."],
                weaknesses: ["Inconsistency and difficulty finishing long tasks."]
            }
        ]
    },
    {
        id: 6,
        category: "Masculine Core",
        title: "What makes you a man internally:",
        answers: [
            {
                emoji: "1️⃣",
                name: "Responsibility",
                meaning: "You define manhood by the weight you can carry and the duties you accept.",
                strengths: ["Natural respect and dependability."],
                weaknesses: ["Overload and burnout."]
            },
            {
                emoji: "2️⃣",
                name: "Order",
                meaning: "You value structure clarity and stability.",
                strengths: ["Creates stability for yourself and others."],
                weaknesses: ["Irritation with chaos and disorganised people."]
            },
            {
                emoji: "3️⃣",
                name: "Courage",
                meaning: "You face difficulty directly and act despite fear.",
                strengths: ["Boldness and protective instinct."],
                weaknesses: ["Taking risks alone and refusing assistance."]
            },
            {
                emoji: "4️⃣",
                name: "Honour",
                meaning: "Your identity is tied to truth fairness and loyalty.",
                strengths: ["Inspires trust and earns admiration."],
                weaknesses: ["Deep wounds from betrayal and holding grudges."]
            }
        ]
    },
    {
        id: 7,
        category: "Direction of Growth",
        title: "Where your life is pushing you:",
        answers: [
            {
                emoji: "1️⃣",
                name: "Knowledge",
                meaning: "Life pushes you toward mastery and understanding.",
                strengths: ["Insight depth and competence."],
                weaknesses: ["Remaining in theory instead of applying."]
            },
            {
                emoji: "2️⃣",
                name: "Strength",
                meaning: "Your path demands physical and mental power.",
                strengths: ["Stronger presence and resilience."],
                weaknesses: ["Burnout or injury risk."]
            },
            {
                emoji: "3️⃣",
                name: "Leadership",
                meaning: "Your growth moves you into guiding others.",
                strengths: ["Influence direction and authority."],
                weaknesses: ["Heavy responsibility and criticism."]
            },
            {
                emoji: "4️⃣",
                name: "Legacy",
                meaning: "You are pushed toward long term purpose and building something that lasts.",
                strengths: ["Vision consistency and meaning."],
                weaknesses: ["Fear of wasting life and existential pressure."]
            }
        ]
    }
];

// State
let currentQuestion = 0;
let selectedAnswers = [];

// Initialize Quiz
function initQuiz() {
    selectedAnswers = new Array(quizData.length).fill(null);
    currentQuestion = 0;
    displayQuestion();
    updateProgress();
}

// Display Current Question
function displayQuestion() {
    const quizContent = document.getElementById('quiz-content');
    const question = quizData[currentQuestion];
    
    let html = `
        <div class="question active">
            <div class="question-number">QUESTION ${question.id} — ${question.category}</div>
            <div class="question-title">${question.title}</div>
            <div class="answers">
    `;

    question.answers.forEach((answer, index) => {
        const isSelected = selectedAnswers[currentQuestion] === index;
        html += `
            <div class="answer-card ${isSelected ? 'selected' : ''}" onclick="selectAnswer(${index})">
                <div class="answer-header">
                    <span class="answer-emoji">${answer.emoji}</span>
                    <span class="answer-title">${answer.name}</span>
                </div>
                <div class="answer-meaning"><strong>Meaning:</strong> ${answer.meaning}</div>
                <!-- Strengths/weaknesses removed from option cards per request -->
            </div>
        `;
    });

    html += `
            </div>
        </div>
    `;

    quizContent.innerHTML = html;
    updateButtonStates();
}

// Select Answer
function selectAnswer(index) {
    selectedAnswers[currentQuestion] = index;
    // Immediately advance to next question, or show results if on last question
    if (currentQuestion < quizData.length - 1) {
        currentQuestion++;
        displayQuestion();
        updateProgress();
        updateButtonStates();
    } else {
        // Last question answered: show results
        showResults();
    }
}

// Update Progress
function updateProgress() {
    const progress = ((currentQuestion + 1) / quizData.length) * 100;
    document.getElementById('progress-fill').style.width = progress + '%';
    document.getElementById('current-q').textContent = currentQuestion + 1;
}

// Update Button States
function updateButtonStates() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    prevBtn.disabled = currentQuestion === 0;
    
    if (currentQuestion === quizData.length - 1) {
        nextBtn.textContent = selectedAnswers[currentQuestion] !== null ? 'View Results →' : 'Next →';
        nextBtn.disabled = selectedAnswers[currentQuestion] === null;
    } else {
        nextBtn.textContent = 'Next →';
        nextBtn.disabled = selectedAnswers[currentQuestion] === null;
    }
}

// Navigation
function nextQuestion() {
    if (selectedAnswers[currentQuestion] === null) return;

    if (currentQuestion < quizData.length - 1) {
        currentQuestion++;
        displayQuestion();
        updateProgress();
    } else {
        showResults();
    }
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        displayQuestion();
        updateProgress();
    }
}

// Show Results
function showResults() {
    const resultsProfile = document.getElementById('results-profile');
    const resultsInterpretation = document.getElementById('results-interpretation');

    // Build the 7-point code
    const profileCode = selectedAnswers.map((answerIndex, questionIndex) => {
        return quizData[questionIndex].answers[answerIndex].name;
    }).join(" — ");

    // Build interpretation
    let interpretationHtml = '<h3>YOUR 7 ASPECTS OF MASCULINE PROFILE</h3>';

    const categoryDescriptions = [
        "How your brain works",
        "How stress changes you",
        "Where past pain forged you",
        "What strengths keep you alive",
        "What flaw blocks progress",
        "What makes you a man",
        "Why you move forward"
    ];

    selectedAnswers.forEach((answerIndex, questionIndex) => {
        const question = quizData[questionIndex];
        const answer = question.answers[answerIndex];

        interpretationHtml += `
            <div class="interpretation-item">
                <div class="interpretation-label">
                    ${questionIndex + 1}️⃣ ${categoryDescriptions[questionIndex]}
                </div>
                <div class="interpretation-answer"><strong>${answer.name}</strong></div>
                <div class="interpretation-details">
                    <strong>Core Pattern:</strong> ${answer.meaning}<br>
                    <div style="margin-top: 8px;">
                        <strong style="color: #2d5016;">✓ Strengths:</strong>
                        <div class="strength-item">${answer.strengths.join(", ")}</div>
                    </div>
                    <div style="margin-top: 8px;">
                        <strong style="color: #5a1f1f;">✗ Weaknesses:</strong>
                        <div class="weakness-item">${answer.weaknesses.join(", ")}</div>
                    </div>
                </div>
            </div>
        `;
    });

    resultsProfile.innerHTML = profileCode;
    resultsInterpretation.innerHTML = interpretationHtml;

    document.getElementById('results-modal').classList.remove('hidden');
}

// Close Results
function closeResults() {
    document.getElementById('results-modal').classList.add('hidden');
}

// Retake Quiz
function retakeQuiz() {
    closeResults();
    initQuiz();
}

// Download Results
async function downloadResults() {
    const pdf = window.jspdf && window.jspdf.jsPDF ? window.jspdf.jsPDF({ unit: 'mm', format: 'a4' }) : null;
    if (!pdf) throw new Error('jsPDF not found');

    try {
        // Build the 7-point code
        const profileCode = selectedAnswers.map((answerIndex, questionIndex) => {
            return quizData[questionIndex].answers[answerIndex].name;
        }).join(' — ');

        const categoryDescriptions = [
            "How your brain works",
            "How stress changes you",
            "Where past pain forged you",
            "What strengths keep you alive",
            "What flaw blocks progress",
            "What makes you a man",
            "Why you move forward"
        ];

        // Set up fonts and margins
        const marginLeft = 15;
        const marginRight = 15;
        const pageWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pdf.internal.pageSize.getHeight();
        const contentWidth = pageWidth - marginLeft - marginRight;
        let yPos = 15;
        const lineHeight = 7;

        // Title
        pdf.setFontSize(18);
        pdf.setFont(undefined, 'bold');
        pdf.text('YOUR 7 ASPECTS OF MASCULINE PROFILE', marginLeft, yPos);
        yPos += 12;

        // 7-Point Code
        pdf.setFontSize(12);
        pdf.setFont(undefined, 'bold');
        pdf.text('Your Profile Code:', marginLeft, yPos);
        yPos += 6;
        pdf.setFontSize(10);
        pdf.setFont(undefined, 'normal');
        const codeLines = pdf.splitTextToSize(profileCode, contentWidth);
        pdf.text(codeLines, marginLeft + 5, yPos);
        yPos += codeLines.length * lineHeight + 4;

        // Interpretation items
        pdf.setFontSize(11);
        selectedAnswers.forEach((answerIndex, questionIndex) => {
            const question = quizData[questionIndex];
            const answer = question.answers[answerIndex];

            // Check if we need a new page
            if (yPos > pageHeight - 30) {
                pdf.addPage();
                yPos = 15;
            }

            // Item number and category
            pdf.setFont(undefined, 'bold');
            pdf.setFontSize(11);
            const itemHeader = `${questionIndex + 1}. ${categoryDescriptions[questionIndex]}`;
            pdf.text(itemHeader, marginLeft, yPos);
            yPos += 6;

            // Answer name
            pdf.setFont(undefined, 'bold');
            pdf.setFontSize(10);
            pdf.text('Answer: ' + answer.name, marginLeft + 3, yPos);
            yPos += 5;

            // Core Pattern
            pdf.setFont(undefined, 'normal');
            pdf.setFontSize(9);
            const meaningLines = pdf.splitTextToSize('Core Pattern: ' + answer.meaning, contentWidth - 6);
            pdf.text(meaningLines, marginLeft + 3, yPos);
            yPos += meaningLines.length * lineHeight + 2;

            // Strengths
            pdf.setFont(undefined, 'bold');
            pdf.text('✓ Strengths:', marginLeft + 3, yPos);
            yPos += 4;
            pdf.setFont(undefined, 'normal');
            const strengthLines = pdf.splitTextToSize(answer.strengths.join(', '), contentWidth - 8);
            pdf.text(strengthLines, marginLeft + 5, yPos);
            yPos += strengthLines.length * lineHeight + 2;

            // Weaknesses
            pdf.setFont(undefined, 'bold');
            pdf.text('✗ Weaknesses:', marginLeft + 3, yPos);
            yPos += 4;
            pdf.setFont(undefined, 'normal');
            const weaknessLines = pdf.splitTextToSize(answer.weaknesses.join(', '), contentWidth - 8);
            pdf.text(weaknessLines, marginLeft + 5, yPos);
            yPos += weaknessLines.length * lineHeight + 5;
        });

        pdf.save('masculine-profile-results.pdf');
    } catch (err) {
        console.error('PDF generation failed:', err);
        alert('Sorry — could not generate PDF.');
    }
}

// Scroll to top helper
function scrollToTop() {
    const container = document.querySelector('.container');
    if (container) {
        container.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    initQuiz();

    document.getElementById('next-btn').addEventListener('click', nextQuestion);
    document.getElementById('prev-btn').addEventListener('click', prevQuestion);

    // Close modal when clicking outside
    document.getElementById('results-modal').addEventListener('click', (e) => {
        if (e.target.id === 'results-modal') {
            closeResults();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') nextQuestion();
        if (e.key === 'ArrowLeft') prevQuestion();
    });
});
