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
                meaning: "I recharge by being alone.",
                strengths: ["self-sufficient", "focused"],
                weaknesses: ["isolate too easily"]
            },
            {
                emoji: "2️⃣",
                name: "Thinking",
                meaning: "I feel better when I understand everything.",
                strengths: ["strategic", "organised"],
                weaknesses: ["overthinking delays action"]
            },
            {
                emoji: "3️⃣",
                name: "Taking control",
                meaning: "I stabilise chaos by taking charge.",
                strengths: ["initiative", "structure"],
                weaknesses: ["rigid", "can't let go"]
            },
            {
                emoji: "4️⃣",
                name: "Purpose",
                meaning: "I need a mission to feel alive.",
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
                name: "Anger",
                meaning: "I get aggressive when stressed.",
                strengths: ["powerful pushback"],
                weaknesses: ["burns bridges"]
            },
            {
                emoji: "2️⃣",
                name: "Withdrawal",
                meaning: "I pull away when overwhelmed.",
                strengths: ["avoids escalation"],
                weaknesses: ["misses chances", "regret later"]
            },
            {
                emoji: "3️⃣",
                name: "Numbness",
                meaning: "I shut down my emotions under pressure.",
                strengths: ["calm under pressure"],
                weaknesses: ["stuck when action needed"]
            },
            {
                emoji: "4️⃣",
                name: "Pleasing",
                meaning: "I try to keep everyone calm when afraid.",
                strengths: ["natural mediator"],
                weaknesses: ["neglects own needs"]
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
                meaning: "I built walls because people abandoned me.",
                strengths: ["Independent and resilient"],
                weaknesses: ["Pushes people away first"]
            },
            {
                emoji: "2️⃣",
                name: "Invalidation",
                meaning: "I learned not to trust my own voice or needs.",
                strengths: ["Adaptable and perceptive"],
                weaknesses: ["Second-guesses self constantly"]
            },
            {
                emoji: "3️⃣",
                name: "Humiliation",
                meaning: "I learned shame early and hide who I really am.",
                strengths: ["Self-aware and thoughtful"],
                weaknesses: ["Carries deep shame quietly"]
            },
            {
                emoji: "4️⃣",
                name: "Exposure",
                meaning: "I learned early that being seen leads to judgement.",
                strengths: ["Perceptive and careful"],
                weaknesses: ["Difficulty being authentic"]
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
                meaning: "I trust myself and don't need permission to act.",
                strengths: ["Complete self-reliance"],
                weaknesses: ["Difficulty asking for help"]
            },
            {
                emoji: "2️⃣",
                name: "Discipline",
                meaning: "I follow through even when tired or unmotivated.",
                strengths: ["Unstoppable consistency"],
                weaknesses: ["Can't stop even when needed"]
            },
            {
                emoji: "3️⃣",
                name: "Loyalty",
                meaning: "I stand by those I choose, no matter what.",
                strengths: ["Unwavering commitment"],
                weaknesses: ["Stays too long in wrong situations"]
            },
            {
                emoji: "4️⃣",
                name: "Integrity",
                meaning: "I do what's right even when it costs me.",
                strengths: ["Trustworthy and honest"],
                weaknesses: ["Judgmental of others' choices"]
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
                meaning: "I analyse everything until I'm frozen and can't act.",
                strengths: ["Thorough and careful"],
                weaknesses: ["Stuck in indecision"]
            },
            {
                emoji: "2️⃣",
                name: "Avoidance",
                meaning: "I'm good at everything except the one thing that matters most.",
                strengths: ["Skilled and adaptable"],
                weaknesses: ["Won't face what scares me"]
            },
            {
                emoji: "3️⃣",
                name: "Self-doubt",
                meaning: "I believe I'm not enough and don't deserve success.",
                strengths: ["Humble and careful"],
                weaknesses: ["Won't claim what I've earned"]
            },
            {
                emoji: "4️⃣",
                name: "Unstable energy",
                meaning: "I go hard then crash, unable to find a middle pace.",
                strengths: ["Capable of intense focus"],
                weaknesses: ["Burnout is inevitable"]
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
                meaning: "Being a man means carrying what others cannot.",
                strengths: ["Respected and reliable"],
                weaknesses: ["Can't admit when carrying too much"]
            },
            {
                emoji: "2️⃣",
                name: "Order",
                meaning: "I need to know the rules and where I stand.",
                strengths: ["Creates systems and stability"],
                weaknesses: ["Harsh with those who don't fit"]
            },
            {
                emoji: "3️⃣",
                name: "Courage",
                meaning: "Real strength means doing what's right despite the cost.",
                strengths: ["Protective and bold"],
                weaknesses: ["Won't ask for backup"]
            },
            {
                emoji: "4️⃣",
                name: "Honour",
                meaning: "I won't compromise on truth even when it costs.",
                strengths: ["Unwavering integrity"],
                weaknesses: ["Bitter when others lack principle"]
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
                meaning: "I'm called to understand deeply and master my craft.",
                strengths: ["Intelligent and capable"],
                weaknesses: ["Gets lost in concepts instead of acting"]
            },
            {
                emoji: "2️⃣",
                name: "Strength",
                meaning: "My path demands I build power—physical, mental, emotional.",
                strengths: ["Resilient and formidable"],
                weaknesses: ["Runs until collapse"]
            },
            {
                emoji: "3️⃣",
                name: "Leadership",
                meaning: "I'm being pulled toward influencing and guiding others.",
                strengths: ["Natural authority and vision"],
                weaknesses: ["Feels heavy and isolating"]
            },
            {
                emoji: "4️⃣",
                name: "Legacy",
                meaning: "I'm driven to build something meaningful that survives me.",
                strengths: ["Purposeful and driven"],
                weaknesses: ["Obsessed with leaving a mark"]
            }
        ]
    }
];

// Detailed descriptions for results display
const detailedDescriptions = {
    "Solitude": "You regain power by withdrawing from the world and returning to your internal command room. Silence, space, and distance sharpen your thoughts. You perform best when no one is draining you and no chaos is interrupting your clarity.",
    "Thinking": "Your energy comes from ideas, frameworks, and planning. A clear mental map is your fuel. When you understand a situation your confidence returns and your actions become sharp.",
    "Taking control": "You feel strongest when you impose structure on chaos. Disorder activates your leadership instinct and brings out your decisiveness.",
    "Purpose": "Your motivation comes from having a mission. When you know your direction you become unstoppable, but without a goal your energy collapses.",
    "Anger (fight)": "Stress triggers aggression and pushback. You respond by fighting force with force.",
    "Withdrawal (flight)": "Under pressure you retreat to safety and distance. You prefer to step away rather than engage.",
    "Anger": "Stress triggers aggression and pushback. You respond by fighting force with force.",
    "Withdrawal": "Under pressure you retreat to safety and distance. You prefer to step away rather than engage.",
    "Numbness (freeze)": "Stress shuts down emotion and you become quiet and still. This creates an inner coldness that protects you from overload.",
    "Numbness": "Stress shuts down emotion and you become quiet and still. This creates an inner coldness that protects you from overload.",
    "Pleasing (fawn)": "You attempt to reduce threat by adapting to others and maintaining peace.",
    "Pleasing": "You attempt to reduce threat by adapting to others and maintaining peace.",
    "Rejection": "Your armour was forged by exclusion or abandonment. You learned not to depend on anyone.",
    "Invalidation": "Your voice was dismissed or ignored. You built a strong internal identity in response.",
    "Humiliation": "Past embarrassment or shame made dignity sacred to you. You avoid being mocked again.",
    "Exposure": "You were judged or observed too harshly. You learned to hide and stay guarded.",
    "Independence": "You trust your own judgement and prefer to operate alone.",
    "Discipline": "You show up consistently and maintain structure.",
    "Loyalty": "You commit deeply and stand by the people you choose.",
    "Integrity": "Your behaviour aligns with your values. You act truthfully even when costly.",
    "Overthinking": "You want clarity before action and analyse every angle.",
    "Avoidance": "You escape discomfort, conflict, or tasks when overwhelmed.",
    "Self-doubt": "You question your worth or abilities.",
    "Unstable energy": "Your energy fluctuates strongly.",
    "Responsibility": "You define manhood by the weight you can carry and the duties you accept.",
    "Order": "You value structure clarity and stability.",
    "Courage": "You face difficulty directly and act despite fear.",
    "Honour": "Your identity is tied to truth fairness and loyalty.",
    "Knowledge": "Life pushes you toward mastery and understanding.",
    "Strength (physical/mental)": "Your path demands physical and mental power.",
    "Strength": "Your path demands physical and mental power.",
    "Leadership": "Your growth moves you into guiding others.",
    "Legacy": "You are pushed toward long term purpose and building something that lasts."
};

// Detailed strengths and weaknesses for results display
const detailedStrengthsWeaknesses = {
    "Solitude": { strengths: "Exceptional self sufficiency and strong focus when alone.", weaknesses: "Isolation becomes a prison and you may push people away." },
    "Thinking": { strengths: "Excellent at structuring problems and staying organised.", weaknesses: "Overanalysis delays action and kills momentum." },
    "Taking control": { strengths: "Initiative, direction, and natural command.", weaknesses: "Difficulty delegating and tension when control slips." },
    "Purpose": { strengths: "Relentless drive and long term focus.", weaknesses: "Vulnerable when uncertain or directionless." },
    "Anger (fight)": { strengths: "Powerful defence and refusal to be dominated.", weaknesses: "Burns bridges and escalates conflict unnecessarily." },
    "Withdrawal (flight)": { strengths: "Prevents escalation and allows reflection.", weaknesses: "Missed opportunities and later regret." },
    "Numbness (freeze)": { strengths: "Calm clarity in chaos.", weaknesses: "Inaction when decisive movement is needed." },
    "Pleasing (fawn)": { strengths: "Skilled at harmony and reading people.", weaknesses: "Loses boundaries and sacrifices yourself." },
    "Rejection": { strengths: "Fierce independence and inner stability.", weaknesses: "Difficulty with vulnerability and closeness." },
    "Invalidation": { strengths: "Clear sense of self and solid boundaries.", weaknesses: "Sensitive to disrespect and quick reactions." },
    "Humiliation": { strengths: "High standards and disciplined behaviour.", weaknesses: "Perfectionism and fear of mistakes." },
    "Exposure": { strengths: "Sharp social awareness.", weaknesses: "Anxiety in groups and fear of being seen." },
    "Independence": { strengths: "Unshakeable authority over yourself.", weaknesses: "Slow to trust and difficulty collaborating." },
    "Discipline": { strengths: "Reliability and strong work ethic.", weaknesses: "Hard on yourself and difficulty resting." },
    "Loyalty": { strengths: "Strong relationships and honourable behaviour.", weaknesses: "Betrayal is devastating and slow to heal." },
    "Integrity": { strengths: "Respect, trustworthiness, strong moral compass.", weaknesses: "Rigidity and intolerance for compromise." },
    "Overthinking": { strengths: "High accuracy and minimal mistakes.", weaknesses: "Lost momentum and delayed action." },
    "Avoidance": { strengths: "Good danger awareness and risk sensing.", weaknesses: "Life moves without you and guilt grows." },
    "Self-doubt": { strengths: "Humility and careful judgement.", weaknesses: "Blocked ambition and low confidence." },
    "Unstable energy": { strengths: "Powerful bursts of performance.", weaknesses: "Inconsistency and difficulty finishing long tasks." },
    "Responsibility": { strengths: "Natural respect and dependability.", weaknesses: "Overload and burnout." },
    "Order": { strengths: "Creates stability for yourself and others.", weaknesses: "Irritation with chaos and disorganised people." },
    "Courage": { strengths: "Boldness and protective instinct.", weaknesses: "Taking risks alone and refusing assistance." },
    "Honour": { strengths: "Inspires trust and earns admiration.", weaknesses: "Deep wounds from betrayal and holding grudges." },
    "Knowledge": { strengths: "Insight depth and competence.", weaknesses: "Remaining in theory instead of applying." },
    "Strength": { strengths: "Stronger presence and resilience.", weaknesses: "Burnout or injury risk." },
    "Leadership": { strengths: "Influence direction and authority.", weaknesses: "Heavy responsibility and criticism." },
    "Legacy": { strengths: "Vision consistency and meaning.", weaknesses: "Fear of wasting life and existential pressure." }
};

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
                <div class="answer-meaning">${answer.meaning}</div>
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
// Helper: convert common first-person starts to second-person for results and PDFs
function convertFirstToSecond(text) {
    if (!text || typeof text !== 'string') return text;
    let out = text;
    out = out.replace(/\bI'm\b/gi, 'You are');
    out = out.replace(/\bI am\b/gi, 'You are');
    out = out.replace(/\bI've\b/gi, 'You have');
    out = out.replace(/\bI have\b/gi, 'You have');
    out = out.replace(/\bMy\b/gi, 'Your');
    out = out.replace(/^\s*I\b/gi, 'You');
    out = out.replace(/^\s*I\s+/gi, 'You ');
    return out;
}

// Helper: find a key in an object that starts with the given name (case-insensitive)
function findKeyStartingWith(obj, name) {
    if (!obj || !name) return null;
    if (Object.prototype.hasOwnProperty.call(obj, name)) return name;
    const lower = name.toLowerCase();
    return Object.keys(obj).find(k => k.toLowerCase().startsWith(lower)) || null;
}

function getDetailedDescription(name) {
    const key = findKeyStartingWith(detailedDescriptions, name);
    return key ? detailedDescriptions[key] : null;
}

function getDetailsSwAndWkn(name) {
    const key = findKeyStartingWith(detailedStrengthsWeaknesses, name);
    return key ? detailedStrengthsWeaknesses[key] : null;
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

    // (uses top-level convertFirstToSecond)

    selectedAnswers.forEach((answerIndex, questionIndex) => {
        const question = quizData[questionIndex];
        const answer = question.answers[answerIndex];
        const rawDetailedDesc = getDetailedDescription(answer.name) || answer.meaning;
        const detailedDesc = convertFirstToSecond(rawDetailedDesc);
        const detailsSwAndWkn = getDetailsSwAndWkn(answer.name) || {};
        const strength = detailsSwAndWkn.strengths || answer.strengths.join(", ");
        const weakness = detailsSwAndWkn.weaknesses || answer.weaknesses.join(", ");

        interpretationHtml += `
            <div class="interpretation-item">
                <div class="interpretation-label">
                    ${questionIndex + 1}️⃣ ${categoryDescriptions[questionIndex]}
                </div>
                <div class="interpretation-answer"><strong>${answer.name}</strong></div>
                <div class="interpretation-details">
                    <strong>Core Pattern:</strong> ${detailedDesc}<br>
                    <div style="margin-top: 8px;">
                        <strong style="color: #2d5016;">✓ Strengths:</strong>
                        <div class="strength-item">${strength}</div>
                    </div>
                    <div style="margin-top: 8px;">
                        <strong style="color: #5a1f1f;">✗ Weaknesses:</strong>
                        <div class="weakness-item">${weakness}</div>
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

            // Core Pattern (use detailed description if available) and convert first-person to second-person
            const detailedDesc = convertFirstToSecond(getDetailedDescription(answer.name) || answer.meaning);
            pdf.setFont(undefined, 'normal');
            pdf.setFontSize(9);
            const meaningLines = pdf.splitTextToSize('Core Pattern: ' + detailedDesc, contentWidth - 6);
            pdf.text(meaningLines, marginLeft + 3, yPos);
            yPos += meaningLines.length * lineHeight + 2;

            // Strengths (use detailed strength if available)
            const detailsSwAndWkn = getDetailsSwAndWkn(answer.name) || {};
            const strength = detailsSwAndWkn.strengths || answer.strengths.join(', ');
            pdf.setFont(undefined, 'bold');
            pdf.text('✓ Strengths:', marginLeft + 3, yPos);
            yPos += 4;
            pdf.setFont(undefined, 'normal');
            const strengthLines = pdf.splitTextToSize(strength, contentWidth - 8);
            pdf.text(strengthLines, marginLeft + 5, yPos);
            yPos += strengthLines.length * lineHeight + 2;

            // Weaknesses (use detailed weakness if available)
            const weakness = detailsSwAndWkn.weaknesses || answer.weaknesses.join(', ');
            pdf.setFont(undefined, 'bold');
            pdf.text('✗ Weaknesses:', marginLeft + 3, yPos);
            yPos += 4;
            pdf.setFont(undefined, 'normal');
            const weaknessLines = pdf.splitTextToSize(weakness, contentWidth - 8);
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
