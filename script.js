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
                meaning: "You restore strength alone",
                strengths: ["self-sufficient", "focused"],
                weaknesses: ["isolate too easily"]
            },
            {
                emoji: "2️⃣",
                name: "Thinking",
                meaning: "You need mental clarity & planning",
                strengths: ["strategic", "organised"],
                weaknesses: ["overthinking delays action"]
            },
            {
                emoji: "3️⃣",
                name: "Taking control",
                meaning: "You feel best when stabilising chaos",
                strengths: ["initiative", "structure"],
                weaknesses: ["rigid", "can't let go"]
            },
            {
                emoji: "4️⃣",
                name: "Purpose",
                meaning: "You run on mission and direction",
                strengths: ["relentless", "determined"],
                weaknesses: ["collapse when goal unclear"]
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
                name: "Anger (fight)",
                meaning: "Fight response under pressure",
                strengths: ["powerful pushback"],
                weaknesses: ["burns bridges"]
            },
            {
                emoji: "2️⃣",
                name: "Withdrawal (flight)",
                meaning: "Flight response under pressure",
                strengths: ["avoids escalation"],
                weaknesses: ["misses chances", "regret later"]
            },
            {
                emoji: "3️⃣",
                name: "Numbness (freeze)",
                meaning: "Freeze response under pressure",
                strengths: ["calm under pressure"],
                weaknesses: ["stuck when action needed"]
            },
            {
                emoji: "4️⃣",
                name: "Pleasing (fawn)",
                meaning: "Fawn response under pressure",
                strengths: ["keeps peace"],
                weaknesses: ["sacrifices yourself"]
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
                meaning: "Shaped by being rejected or excluded",
                strengths: ["high independence"],
                weaknesses: ["fear of closeness"]
            },
            {
                emoji: "2️⃣",
                name: "Invalidation",
                meaning: "Shaped by being dismissed or unheard",
                strengths: ["strong self-definition"],
                weaknesses: ["quick to feel disrespected"]
            },
            {
                emoji: "3️⃣",
                name: "Humiliation",
                meaning: "Shaped by shame and public embarrassment",
                strengths: ["dignity becomes sacred"],
                weaknesses: ["perfectionism + shame fear"]
            },
            {
                emoji: "4️⃣",
                name: "Exposure",
                meaning: "Shaped by being exposed or vulnerable",
                strengths: ["guarded awareness"],
                weaknesses: ["social anxiety", "hiding"]
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
                meaning: "Self-reliant and self-directed",
                strengths: ["unshakeable self-authority"],
                weaknesses: ["trust comes slow"]
            },
            {
                emoji: "2️⃣",
                name: "Discipline",
                meaning: "Consistent commitment and execution",
                strengths: ["reliability", "grit"],
                weaknesses: ["harsh with self"]
            },
            {
                emoji: "3️⃣",
                name: "Loyalty",
                meaning: "Deep bonds and unwavering commitment",
                strengths: ["deep bonds", "honour"],
                weaknesses: ["hurts more when betrayed"]
            },
            {
                emoji: "4️⃣",
                name: "Integrity",
                meaning: "Truth-driven and morally aligned",
                strengths: ["truth-driven respect"],
                weaknesses: ["inflexible morals sometimes"]
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
                meaning: "Analysis paralysis",
                strengths: ["high accuracy"],
                weaknesses: ["action delayed"]
            },
            {
                emoji: "2️⃣",
                name: "Avoidance",
                meaning: "Dodging difficult situations",
                strengths: ["good risk radar"],
                weaknesses: ["life passes by"]
            },
            {
                emoji: "3️⃣",
                name: "Self-doubt",
                meaning: "Questioning your own capability",
                strengths: ["humility"],
                weaknesses: ["blocks ambition"]
            },
            {
                emoji: "4️⃣",
                name: "Unstable energy",
                meaning: "Inconsistent effort and motivation",
                strengths: ["bursts of power"],
                weaknesses: ["inconsistent progress"]
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
                meaning: "Owning your impact and commitments",
                strengths: ["earns respect"],
                weaknesses: ["pressure overload"]
            },
            {
                emoji: "2️⃣",
                name: "Order",
                meaning: "Creating and maintaining structure",
                strengths: ["clarity + stability"],
                weaknesses: ["hates disorder in others"]
            },
            {
                emoji: "3️⃣",
                name: "Courage",
                meaning: "Acting despite fear",
                strengths: ["acts despite fear"],
                weaknesses: ["risks too much alone"]
            },
            {
                emoji: "4️⃣",
                name: "Honour",
                meaning: "Moral backbone and dignity",
                strengths: ["moral backbone"],
                weaknesses: ["takes betrayal personally"]
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
                meaning: "Mastery and deep understanding",
                strengths: ["mastery mindset"],
                weaknesses: ["stuck in theory"]
            },
            {
                emoji: "2️⃣",
                name: "Strength (physical/mental)",
                meaning: "Building capability and presence",
                strengths: ["presence, confidence"],
                weaknesses: ["injury/burnout risk"]
            },
            {
                emoji: "3️⃣",
                name: "Leadership",
                meaning: "Influencing and guiding others",
                strengths: ["influence, command"],
                weaknesses: ["heavy responsibility"]
            },
            {
                emoji: "4️⃣",
                name: "Legacy",
                meaning: "Creating lasting impact",
                strengths: ["long-term purpose"],
                weaknesses: ["fear of wasting life"]
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
    const profileCode = selectedAnswers.map(index => {
        const categoryIndex = selectedAnswers.indexOf(index);
        return quizData[categoryIndex].answers[index].name;
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
        const profileCode = selectedAnswers.map(index => {
            const categoryIndex = selectedAnswers.indexOf(index);
            return quizData[categoryIndex].answers[index].name;
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
