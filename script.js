// script.js — quiz logic for Masculine Profile Quiz

const quizData = [
	{
		id: 1,
		category: "Core Nature",
		title: "How you recharge:",
		answers: [
			{ emoji: "1️⃣", name: "Solitude", meaning: "I recharge by being alone.", strengths: ["Self-reliant"], weaknesses: ["Isolates too easily"] },
			{ emoji: "2️⃣", name: "Thinking", meaning: "I feel better when I understand everything.", strengths: ["Strategic"], weaknesses: ["Overthinks"] },
			{ emoji: "3️⃣", name: "Taking control", meaning: "I stabilise chaos by taking charge.", strengths: ["Decisive"], weaknesses: ["Can be rigid"] },
			{ emoji: "4️⃣", name: "Purpose", meaning: "I need a mission to feel alive.", strengths: ["Driven"], weaknesses: ["Direction-dependent"] }
		]
	},
	{
		id: 2,
		category: "Shadow Instinct",
		title: "What takes over under stress:",
		answers: [
			{ emoji: "1️⃣", name: "Anger", meaning: "I get aggressive when stressed.", strengths: ["Assertive"], weaknesses: ["Escalates conflict"] },
			{ emoji: "2️⃣", name: "Withdrawal", meaning: "I pull away when overwhelmed.", strengths: ["Reflective"], weaknesses: ["Misses opportunities"] },
			{ emoji: "3️⃣", name: "Numbness", meaning: "I shut down my emotions under pressure.", strengths: ["Calm under pressure"], weaknesses: ["Inaction"] },
			{ emoji: "4️⃣", name: "Pleasing", meaning: "I try to keep everyone calm when afraid.", strengths: ["Diplomatic"], weaknesses: ["Neglects self"] }
		]
	},
	{
		id: 3,
		category: "Wound Shape",
		title: "The pain that built your armour:",
		answers: [
			{ emoji: "1️⃣", name: "Rejection", meaning: "I learned to rely only on myself.", strengths: ["Independent"], weaknesses: ["Pushes people away"] },
			{ emoji: "2️⃣", name: "Invalidation", meaning: "I built myself because no one listened to me.", strengths: ["Self-sufficient"], weaknesses: ["Trust issues"] },
			{ emoji: "3️⃣", name: "Humiliation", meaning: "I avoid failure because I’ve been shamed before.", strengths: ["Cautious"], weaknesses: ["Fear of exposure"] },
			{ emoji: "4️⃣", name: "Exposure", meaning: "I hide parts of myself to feel safe.", strengths: ["Protective"], weaknesses: ["Difficulty being authentic"] }
		]
	},
	{
		id: 4,
		category: "Real Strengths",
		title: "What you consistently do well:",
		answers: [
			{ emoji: "1️⃣", name: "Independence", meaning: "I trust my own judgement.", strengths: ["Autonomous"], weaknesses: ["Slow to ask help"] },
			{ emoji: "2️⃣", name: "Discipline", meaning: "I stay consistent even when motivation dies.", strengths: ["Persistent"], weaknesses: ["Hard on self"] },
			{ emoji: "3️⃣", name: "Loyalty", meaning: "I stay committed to the people I choose.", strengths: ["Dependable"], weaknesses: ["Stays too long"] },
			{ emoji: "4️⃣", name: "Integrity", meaning: "I stick to my principles no matter what.", strengths: ["Honourable"], weaknesses: ["Rigidity"] }
		]
	},
	{
		id: 5,
		category: "Self Sabotage Point",
		title: "Where you break your own momentum:",
		answers: [
			{ emoji: "1️⃣", name: "Overthinking", meaning: "I think too long before acting.", strengths: ["Thorough"], weaknesses: ["Paralysis by analysis"] },
			{ emoji: "2️⃣", name: "Avoidance", meaning: "I avoid things that stress me.", strengths: ["Stress-aware"], weaknesses: ["Missed action"] },
			{ emoji: "3️⃣", name: "Self doubt", meaning: "I question my own abilities.", strengths: ["Humble"], weaknesses: ["Undercuts confidence"] },
			{ emoji: "4️⃣", name: "Unstable energy", meaning: "My energy goes up and down unpredictably.", strengths: ["Burst performance"], weaknesses: ["Inconsistency"] }
		]
	},
	{
		id: 6,
		category: "Masculine Core",
		title: "What makes you a man internally:",
		answers: [
			{ emoji: "1️⃣", name: "Responsibility", meaning: "I measure myself by the duties I carry.", strengths: ["Dependable"], weaknesses: ["Takes too much on"] },
			{ emoji: "2️⃣", name: "Order", meaning: "I need structure and clarity.", strengths: ["Organised"], weaknesses: ["Rigid"] },
			{ emoji: "3️⃣", name: "Courage", meaning: "I act even when I’m scared.", strengths: ["Brave"], weaknesses: ["Takes risks alone"] },
			{ emoji: "4️⃣", name: "Honour", meaning: "I live by my moral code.", strengths: ["Principled"], weaknesses: ["Judgmental"] }
		]
	},
	{
		id: 7,
		category: "Direction of Growth",
		title: "Where your life is pushing you:",
		answers: [
			{ emoji: "1️⃣", name: "Knowledge", meaning: "I’m being pushed to learn and master more.", strengths: ["Curious"], weaknesses: ["Overstudies"] },
			{ emoji: "2️⃣", name: "Strength", meaning: "I need to build my physical and mental power.", strengths: ["Resilient"], weaknesses: ["Pushes until collapse"] },
			{ emoji: "3️⃣", name: "Leadership", meaning: "I’m meant to guide and influence others.", strengths: ["Visionary"], weaknesses: ["Isolating burden"] },
			{ emoji: "4️⃣", name: "Legacy", meaning: "I’m meant to build something that lasts.", strengths: ["Purposeful"], weaknesses: ["Obsessed with results"] }
		]
	}
];

// State
let currentQuestion = 0;
let selectedAnswers = [];

// Detailed descriptions and strengths/weaknesses for results (second-person)
const detailedDescriptions = {
	"Solitude": "You regain power by withdrawing from the world and returning to your internal command room. Silence, space, and distance sharpen your thoughts. You perform best when no one is draining you and no chaos is interrupting your clarity.",
	"Thinking": "Your energy comes from ideas, frameworks, and planning. A clear mental map is your fuel. When you understand a situation your confidence returns and your actions become sharp.",
	"Taking control": "You feel strongest when you impose structure on chaos. Disorder activates your leadership instinct and brings out your decisiveness.",
	"Purpose": "Your motivation comes from having a mission. When you know your direction you become unstoppable, but without a goal your energy collapses.",

	"Anger": "Stress triggers aggression and pushback. You respond by fighting force with force.",
	"Withdrawal": "Under pressure you retreat to safety and distance. You prefer to step away rather than engage.",
	"Numbness": "Stress shuts down emotion and you become quiet and still. This creates an inner coldness that protects you from overload.",
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
	"Self doubt": "You question your worth or abilities.",
	"Unstable energy": "Your energy fluctuates strongly.",

	"Responsibility": "You define manhood by the weight you can carry and the duties you accept.",
	"Order": "You value structure clarity and stability.",
	"Courage": "You face difficulty directly and act despite fear.",
	"Honour": "Your identity is tied to truth fairness and loyalty.",

	"Knowledge": "Life pushes you toward mastery and understanding.",
	"Strength": "Your path demands physical and mental power.",
	"Leadership": "Your growth moves you into guiding others.",
	"Legacy": "You are pushed toward long term purpose and building something that lasts."
};

const detailedStrengthsWeaknesses = {
	"Solitude": { strengths: "Exceptional self sufficiency and strong focus when alone.", weaknesses: "Isolation becomes a prison and you may push people away." },
	"Thinking": { strengths: "Excellent at structuring problems and staying organised.", weaknesses: "Overanalysis delays action and kills momentum." },
	"Taking control": { strengths: "Initiative, direction, and natural command.", weaknesses: "Difficulty delegating and tension when control slips." },
	"Purpose": { strengths: "Relentless drive and long term focus.", weaknesses: "Vulnerable when uncertain or directionless." },

	"Anger": { strengths: "Powerful defence and refusal to be dominated.", weaknesses: "Burns bridges and escalates conflict unnecessarily." },
	"Withdrawal": { strengths: "Prevents escalation and allows reflection.", weaknesses: "Missed opportunities and later regret." },
	"Numbness": { strengths: "Calm clarity in chaos.", weaknesses: "Inaction when decisive movement is needed." },
	"Pleasing": { strengths: "Skilled at harmony and reading people.", weaknesses: "Loses boundaries and sacrifices yourself." },

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
	"Self doubt": { strengths: "Humility and careful judgement.", weaknesses: "Blocked ambition and low confidence." },
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

function initQuiz() {
	selectedAnswers = new Array(quizData.length).fill(null);
	currentQuestion = 0;
	displayQuestion();
	updateProgress();
}

function displayQuestion() {
	const quizContent = document.getElementById('quiz-content');
	if (!quizContent) return;
	const q = quizData[currentQuestion];
	let html = `
		<div class="question">
			<div class="question-number">QUESTION ${q.id} — ${q.category}</div>
			<div class="question-title">${q.title}</div>
			<div class="answers">
	`;
	q.answers.forEach((a, i) => {
		const selected = selectedAnswers[currentQuestion] === i ? 'selected' : '';
		html += `
			<div class="answer-card ${selected}" onclick="selectAnswer(${i})">
				<div class="answer-header"><span class="answer-emoji">${a.emoji}</span><span class="answer-title">${i+1} ${a.name}</span></div>
				<div class="answer-meaning">“${a.meaning}”</div>
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

function selectAnswer(index) {
	selectedAnswers[currentQuestion] = index;
	// auto-advance
	if (currentQuestion < quizData.length - 1) {
		currentQuestion++;
		displayQuestion();
		updateProgress();
	} else {
		showResults();
	}
}

function updateProgress() {
	const fill = document.getElementById('progress-fill');
	const cur = document.getElementById('current-q');
	if (fill) fill.style.width = ((currentQuestion + 1) / quizData.length * 100) + '%';
	if (cur) cur.textContent = currentQuestion + 1;
}

function updateButtonStates() {
	const prev = document.getElementById('prev-btn');
	const next = document.getElementById('next-btn');
	if (prev) prev.disabled = currentQuestion === 0;
	if (next) next.disabled = selectedAnswers[currentQuestion] === null;
}

function nextQuestion() {
	if (selectedAnswers[currentQuestion] === null) return;
	if (currentQuestion < quizData.length - 1) {
		currentQuestion++; displayQuestion(); updateProgress();
	} else {
		showResults();
	}
}

function prevQuestion() { if (currentQuestion > 0) { currentQuestion--; displayQuestion(); updateProgress(); } }

function showResults() {
	const profileEl = document.getElementById('results-profile');
	const interpEl = document.getElementById('results-interpretation');
	if (!profileEl || !interpEl) return;
	const code = selectedAnswers.map((ai, qi) => quizData[qi].answers[ai].name).join(' — ');
	profileEl.innerHTML = `<p><strong>Your Profile Code:</strong> ${code}</p>`;
	let html = '<h3>YOUR 7 ASPECTS OF MASCULINE PROFILE</h3>';
	const categories = ["How you recharge:", "What takes over under stress:", "The pain that built your armour:", "What you consistently do well:", "Where you break your own momentum:", "What makes you a man internally:", "Where your life is pushing you:"];
	// For each question, list all four options with their detailed descriptions
	quizData.forEach((q, qi) => {
		html += `<div class="interpretation-section"><div class="interpretation-label">QUESTION ${q.id} — ${q.category}</div>`;
		q.answers.forEach((ans, idx) => {
			const name = ans.name;
			const desc = detailedDescriptions[name] || ans.meaning;
			const ds = detailedStrengthsWeaknesses[name] || {};
			const strengths = ds.strengths || (ans.strengths ? ans.strengths.join(', ') : '');
			const weaknesses = ds.weaknesses || (ans.weaknesses ? ans.weaknesses.join(', ') : '');
			html += `
				<div class="interpretation-item">
					<div class="interpretation-answer">${idx+1} ${name}</div>
					<div class="core-pattern">${desc}</div>
					<div style="margin-top:6px;"><strong> Strength:</strong> ${strengths}</div>
					<div style="margin-top:4px;"><strong> Weakness:</strong> ${weaknesses}</div>
				</div>
			`;
		});
		html += `</div><hr/>`;
	});
	interpEl.innerHTML = html;
	document.getElementById('results-modal').classList.remove('hidden');
}

function closeResults() { document.getElementById('results-modal').classList.add('hidden'); }
function retakeQuiz() { closeResults(); initQuiz(); }

function downloadResults() {
	try {
		const { jsPDF } = window.jspdf;
		const pdf = new jsPDF({ unit: 'mm', format: 'a4' });
		let y = 15; const left = 15; pdf.setFontSize(16); pdf.text('YOUR 7 ASPECTS OF MASCULINE PROFILE', left, y); y += 10;
		const code = selectedAnswers.map((ai, qi) => quizData[qi].answers[ai].name).join(' — ');
		pdf.setFontSize(11); pdf.text('Profile code: ' + code, left, y); y += 10;
		// For each question, include all four options with detailed text
		quizData.forEach((q, qi) => {
			if (y > 270) { pdf.addPage(); y = 15; }
			pdf.setFontSize(12); pdf.text(`QUESTION ${q.id} — ${q.category}`, left, y); y += 8;
			q.answers.forEach((ans, idx) => {
				const name = ans.name;
				const desc = detailedDescriptions[name] || ans.meaning;
				const ds = detailedStrengthsWeaknesses[name] || {};
				const strengths = ds.strengths || (ans.strengths ? ans.strengths.join(', ') : '');
				const weaknesses = ds.weaknesses || (ans.weaknesses ? ans.weaknesses.join(', ') : '');
				if (y > 270) { pdf.addPage(); y = 15; }
				pdf.setFontSize(11); pdf.text(`${idx+1} ${name}`, left + 2, y); y += 6;
				// wrap description if long
				pdf.setFontSize(10);
				const splitDesc = pdf.splitTextToSize(desc, 180);
				pdf.text(splitDesc, left + 6, y); y += splitDesc.length * 5;
				pdf.text(' Strength: ' + strengths, left + 6, y); y += 5;
				pdf.text(' Weakness: ' + weaknesses, left + 6, y); y += 8;
			});
			y += 2;
		});
		pdf.save('masculine-profile.pdf');
	} catch (err) {
		alert('PDF export failed: ' + err.message);
	}
}

document.addEventListener('DOMContentLoaded', () => {
	initQuiz();
	const next = document.getElementById('next-btn'); if (next) next.addEventListener('click', nextQuestion);
	const prev = document.getElementById('prev-btn'); if (prev) prev.addEventListener('click', prevQuestion);
});



