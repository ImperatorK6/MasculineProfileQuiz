// Masculine Profile Quiz - interactive logic
const QUESTIONS = [
  {
    id:1,
    title: 'How you regain energy',
    options: [
      {code:'A', title:'Solitude', text:'I recharge by withdrawing, being alone, and resetting my mind in silence.'},
      {code:'B', title:'Thinking', text:'I recover by thinking, organising my thoughts, and restoring mental order.'},
      {code:'C', title:'Taking control', text:'I regain strength by taking charge and stabilising the situation.'},
      {code:'D', title:'Purpose', text:'I refuel when I reconnect with my mission and direction.'}
    ]
  },
  {
    id:2,
    title: 'Your instinct under stress',
    options: [
      {code:'A', title:'Anger (fight)', text:'I feel anger rise and push back to defend myself.'},
      {code:'B', title:'Withdrawal (flight)', text:'I go quiet, withdraw, and protect myself through distance.'},
      {code:'C', title:'Numbness (freeze)', text:'I shut down emotionally when overwhelmed.'},
      {code:'D', title:'Pleasing (fawn)', text:'I try to stabilise the environment and prevent escalation.'}
    ]
  },
  {
    id:3,
    title: 'The wound that shaped you',
    options: [
      {code:'A', title:'Rejection', text:'I learned early that people can leave or exclude me.'},
      {code:'B', title:'Invalidation', text:'My feelings or thoughts were dismissed or minimised.'},
      {code:'C', title:'Humiliation', text:'I was mocked, belittled, or made to feel small.'},
      {code:'D', title:'Exposure', text:'I grew up feeling watched, criticised, or exposed.'}
    ]
  },
  {
    id:4,
    title: 'Your natural strength',
    options: [
      {code:'A', title:'Independence', text:'I function well alone and rely on my own capability.'},
      {code:'B', title:'Discipline', text:'I gain power from structure, routine, and consistency.'},
      {code:'C', title:'Loyalty', text:'I commit deeply and protect fiercely those I care for.'},
      {code:'D', title:'Integrity', text:'I hold firm to my principles and moral standards.'}
    ]
  },
  {
    id:5,
    title: 'How you sabotage yourself',
    options: [
      {code:'A', title:'Overthinking', text:'I analyse too much and delay action.'},
      {code:'B', title:'Avoidance', text:'I postpone difficult tasks and make them heavier.'},
      {code:'C', title:'Self-Doubt', text:'I question my own capability even when I’m strong.'},
      {code:'D', title:'Instability', text:'My energy swings between intense bursts and sudden crashes.'}
    ]
  },
  {
    id:6,
    title: 'What defines your masculinity internally',
    options: [
      {code:'A', title:'Responsibility', text:'Being a man means carrying weight and protecting others.'},
      {code:'B', title:'Order', text:'My masculinity comes from structure, clarity, and self-command.'},
      {code:'C', title:'Courage', text:'I define manhood by facing fear and moving forward.'},
      {code:'D', title:'Honour', text:'Truth, loyalty, and moral consistency ground my identity as a man.'}
    ]
  },
  {
    id:7,
    title: 'Where your life is pushing you',
    options: [
      {code:'A', title:'Knowledge', text:'I am being shaped into someone who understands, analyses, and masters systems.'},
      {code:'B', title:'Strength', text:'Life is forging me into someone resilient and unbroken.'},
      {code:'C', title:'Leadership', text:'My path pushes me to guide others and take command.'},
      {code:'D', title:'Legacy', text:'I am meant to build something lasting that carries my name beyond my life.'}
    ]
  }
];

// Expanded results database (shortened phrases mapped to panels)
const RESULTS = {
  1: {
    A:{title:'Solitude',desc:'You regain strength by withdrawing into your own world — where your thoughts sharpen, your emotions settle, and the outside noise stops interfering with your inner command.',strength:'You can rebuild yourself entirely without anyone’s help. Few men possess that level of inner discipline.',weakness:'When solitude becomes your default, you risk believing that you must carry every burden alone.'},
    B:{title:'Thinking',desc:'Clarity is your fuel. When your mind understands something fully, your energy rises as if a knot has been untied inside you.',strength:'Your strategic mind makes you exceptionally rational.',weakness:'You can become trapped in your own head, mistaking thought for progress.'},
    C:{title:'Taking control',desc:'Your energy returns the moment you impose order — reorganising, correcting, fixing, commanding.',strength:'You’re naturally suited to leadership.',weakness:'You may grip too tightly.'},
    D:{title:'Purpose',desc:'When you know your mission, your energy becomes fierce and unstoppable.',strength:'Meaning fuels you more than comfort ever could.',weakness:'When the mission becomes unclear, you lose stability.'}
  },
  2:{
    A:{title:'Anger (fight)',desc:'Your stress turns into force — you push back to regain control.',strength:'You refuse to be overpowered.',weakness:'Rage can make you misjudge the battlefield.'},
    B:{title:'Withdrawal (flight)',desc:'You retreat to regain clarity, not to surrender.',strength:'It prevents you from saying or doing something reckless.',weakness:'You hide longer than necessary.'},
    C:{title:'Numbness (freeze)',desc:'Your mind goes still and you become a quiet observer.',strength:'You can survive chaos without panic.',weakness:'You may fail to seize critical moments.'},
    D:{title:'Pleasing (fawn)',desc:'You de-escalate instantly, softening yourself to survive the threat.',strength:'You can control tension quickly.',weakness:'You betray your own needs to keep the peace.'}
  },
  3:{
    A:{title:'Rejection',desc:'You learned early that you must rely on yourself.',strength:'You became fiercely independent.',weakness:'You struggle to let people inside your guard.'},
    B:{title:'Invalidation',desc:'You were taught that your feelings or identity were “wrong”.',strength:'You developed a strong, unshakeable sense of self.',weakness:'Disrespect hits you harder.'},
    C:{title:'Humiliation',desc:'You felt small, exposed, or powerless.',strength:'You built immense dignity and personal pride.',weakness:'You fear shame and push perfectionism.'},
    D:{title:'Exposure',desc:'You were seen or judged before you were ready.',strength:'You became observant and perceptive.',weakness:'You hide your vulnerabilities too well.'}
  },
  4: {
    A:{title:'Independence',desc:'You’re built to stand alone and command yourself.',strength:'You cannot be manipulated easily.',weakness:'You trust slowly.'},
    B:{title:'Discipline',desc:'Your strength is consistency and standards.',strength:'People rely on you.',weakness:'You punish yourself for every misstep.'},
    C:{title:'Loyalty',desc:'When you love or commit, you do so with depth.',strength:'You’re unshakeable once you decide someone is yours.',weakness:'Betrayal destroys you internally.'},
    D:{title:'Integrity',desc:'Your identity is built around principle.',strength:'You become a stable anchor for others.',weakness:'You may resist necessary compromise.'}
  },
  5:{
    A:{title:'Overthinking',desc:'You dissect every possibility until momentum dies.',strength:'High intelligence.',weakness:'You lose time and courage.'},
    B:{title:'Avoidance',desc:'You dodge discomfort, often without realising it.',strength:'You sense danger early.',weakness:'You miss opportunities.'},
    C:{title:'Self-doubt',desc:'Your inner critic is louder than your ambition.',strength:'You’re humble and careful.',weakness:'You fail to step into your true potential.'},
    D:{title:'Unstable energy',desc:'You operate in waves — intense highs, silent lows.',strength:'When you rise, you are powerful.',weakness:'Consistency becomes difficult.'}
  },
  6:{
    A:{title:'Responsibility',desc:'You measure yourself by what you carry.',strength:'You’re dependable and respected.',weakness:'You take on far too much alone.'},
    B:{title:'Order',desc:'Your masculinity is structure, clarity, precision.',strength:'You bring stability everywhere.',weakness:'You cannot stand chaos.'},
    C:{title:'Courage',desc:'You act even when you’re afraid.',strength:'You confront life head-on.',weakness:'You refuse support.'},
    D:{title:'Honour',desc:'You live by an inner code.',strength:'You’re unshakeable in truth and loyalty.',weakness:'Betrayal feels like a wound.'}
  },
  7:{
    A:{title:'Knowledge',desc:'Life is shaping you into a master of understanding.',strength:'Sharp mind, deep insight.',weakness:'You risk living too much in theory.'},
    B:{title:'Strength',desc:'You’re being forged to become resilient and formidable.',strength:'Presence, confidence, endurance.',weakness:'Burnout from pushing too hard.'},
    C:{title:'Leadership',desc:'Your life is pushing you into command.',strength:'Influence, structure, authority.',weakness:'Responsibility can become crushing.'},
    D:{title:'Legacy',desc:'Your story is about impact and what you leave behind.',strength:'Vision and purpose.',weakness:'You fear wasting your gifts.'}
  }
};

// DOM
const bootScreen = document.getElementById('boot-screen');
const bootText = document.getElementById('boot-text');
const beginBtn = document.getElementById('begin-btn');
const quizScreen = document.getElementById('quiz-screen');
const optionsEl = document.getElementById('options');
const questionTitle = document.getElementById('question-title');
const sectionLabel = document.getElementById('section-label');
const progressFill = document.querySelector('.progress-fill');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const resultScreen = document.getElementById('result-screen');
const decrypting = document.getElementById('decrypting');
const resultCard = document.getElementById('result-card');
const codenameText = document.getElementById('codename-text');
const profileCode = document.getElementById('profile-code');
const breakdown = document.getElementById('breakdown');
const directiveText = document.getElementById('directive-text');
const exportPdf = document.getElementById('export-pdf');
const copySummary = document.getElementById('copy-summary');
const restartBtn = document.getElementById('restart');

let current = 0;
let answers = new Array(QUESTIONS.length).fill(null);

// Simple WebAudio for tactile sounds
let audioCtx;
function ensureAudio(){ if(!audioCtx) audioCtx = new (window.AudioContext||window.webkitAudioContext)(); }
function tone(freq,duration=0.06, type='sine', gain=0.02){ try{ ensureAudio(); const o = audioCtx.createOscillator(); const g = audioCtx.createGain(); o.type=type; o.frequency.value=freq; g.gain.value=gain; o.connect(g); g.connect(audioCtx.destination); o.start(); o.stop(audioCtx.currentTime+duration); }catch(e){} }
function ping(){ tone(880,0.08,'sine',0.03); }
function clickSound(){ tone(160,0.04,'square',0.03); }
function hoverSound(){ tone(300,0.02,'sine',0.01); }
function errorBuzz(){ tone(120,0.12,'sawtooth',0.05); }

// Boot typing effect
const bootLines = [
  'INITIALISING SYSTEM...',
  'MASCULINE PROFILE QUIZ LOADING...',
  'TACTICAL INTERFACE READY.'
];
function typeBoot(){
  let li=0;
  bootText.textContent='';
  function nextLine(){
    if(li>=bootLines.length){
      // Animation complete, show the button
      beginBtn.classList.remove('hidden');
      return;
    }
    const line = bootLines[li++];
    let i=0;
    const intr = setInterval(()=>{
      bootText.textContent += line[i++] || '';
      if(i>line.length){ clearInterval(intr); bootText.textContent += '\n'; setTimeout(nextLine,350); }
    },28);
  }
  nextLine();
}

// Initialize boot
typeBoot();

// Attach event listeners
beginBtn.addEventListener('click', ()=>{
  clickSound();
  bootScreen.classList.add('hidden');
  quizScreen.classList.remove('hidden');
  renderQuestion();
});

prevBtn.addEventListener('click', ()=>{
  if(current>0){ current--; renderQuestion(); }
});

nextBtn.addEventListener('click', ()=>{
  if(answers[current]===null){ errorBuzz(); return; }
  // if last, show results
  if(current < QUESTIONS.length-1){ current++; renderQuestion(); }
  else { showResults(); }
});

exportPdf.addEventListener('click', ()=>{ window.print(); });

// Better PDF/Print: open a printable window with styled summary
exportPdf.addEventListener('click', ()=>{
  const html = generatePrintableHTML();
  const w = window.open('','_blank','width=900,height=700');
  if(!w) { errorBuzz(); return; }
  w.document.write(html);
  w.document.close();
  // allow time to render then trigger print
  setTimeout(()=>{ w.focus(); w.print(); }, 300);
});

copySummary.addEventListener('click', async ()=>{
  console.log('Copy summary clicked');
  const summary = buildTextSummary();
  try{
    await navigator.clipboard.writeText(summary);
    ping();
  }catch(e){ console.log('Clipboard error:', e); errorBuzz(); }
});

restartBtn.addEventListener('click', ()=>{
  console.log('Restart clicked');
  // reset
  current=0; answers = new Array(QUESTIONS.length).fill(null);
  resultScreen.classList.add('hidden');
  quizScreen.classList.remove('hidden');
  renderQuestion();
});

// accessibility: allow keyboard
document.addEventListener('keydown', (e)=>{
  if(quizScreen.classList.contains('hidden')) return;
  if(e.key==='ArrowRight') nextBtn.click();
  if(e.key==='ArrowLeft') prevBtn.click();
});

function renderQuestion(){
  const q = QUESTIONS[current];
  sectionLabel.textContent = `MASCULINE PROFILE QUIZ – SECTION ${current+1}/${QUESTIONS.length}`;
  questionTitle.textContent = q.title;
  optionsEl.innerHTML = '';
  q.options.forEach((opt, idx)=>{
    const div = document.createElement('div');
    div.className='option';
    div.dataset.idx = idx;
    div.innerHTML = `<div class="lock">${answers[current]===idx? '🔒':''}</div><h4>${opt.title}</h4><p>${opt.text}</p>`;
    if(answers[current]===idx) div.classList.add('locked');
    div.addEventListener('mouseenter', ()=>{ hoverSound(); div.style.transform='translateY(-2px)'; });
    div.addEventListener('mouseleave', ()=>{ div.style.transform=''; });
    div.addEventListener('click', ()=>{
      selectOption(idx, div);
    });
    optionsEl.appendChild(div);
  });
  progressFill.style.width = `${((current)/QUESTIONS.length)*100}%`;
  prevBtn.disabled = current===0;
  nextBtn.disabled = answers[current]===null;
}

function selectOption(idx, el){
  // lock animation
  answers[current] = idx;
  // briefly animate mechanical lock
  document.querySelectorAll('.option').forEach((o)=>{ o.classList.remove('locked'); o.querySelector('.lock').textContent=''; o.style.pointerEvents='auto'; });
  el.classList.add('locked');
  el.querySelector('.lock').textContent='🔒';
  el.style.pointerEvents='none';
  // mechanical click then enable next
  clickSound();
  setTimeout(()=>{ nextBtn.disabled = false; }, 80);
}

function showResults(){
  quizScreen.classList.add('hidden');
  resultScreen.classList.remove('hidden');
  decrypting.textContent = 'DECRYPTING PROFILE…';
  resultCard.classList.add('hidden');
  // scanning animation mimic
  ping();
  setTimeout(()=>{
    decrypting.classList.add('hidden');
    buildResult();
    // small reveal animation
    resultCard.classList.remove('hidden');
    resultCard.style.opacity = 0;
    resultCard.style.transform = 'translateY(8px)';
    setTimeout(()=>{ resultCard.style.transition='all 360ms ease'; resultCard.style.opacity=1; resultCard.style.transform='translateY(0)'; },8);
  },1400);
}

function buildResult(){
  // Codename from Q1
  const q1 = answers[0];
  const nameMap = ['THE LONE WOLF','THE STRATEGIST','THE COMMANDER','THE ANCHOR'];
  const codename = nameMap[q1] || 'THE PROFILE';
  codenameText.textContent = codename;
  // profile code: simple deterministic code
  const codeParts = answers.map((a,i)=> (a===null?0:a+1));
  const code = `M-${(codeParts[0]*3+11).toString().padStart(2,'0')} S-${(codeParts[1]*4+5).toString().padStart(2,'0')}`;
  profileCode.textContent = code;

  // breakdown panels
  breakdown.innerHTML = '';
  QUESTIONS.forEach((q, idx)=>{
    const chosen = answers[idx];
    const key = ['A','B','C','D'][chosen] || '?';
    const data = RESULTS[q.id][key] || {title:'Unknown',desc:'No data',strength:'—',weakness:'—'};
    const p = document.createElement('div'); p.className='panel-item';
    p.innerHTML = `<h4>${q.title} — ${data.title}</h4><p>${data.desc}</p><p style="margin-top:8px;color:var(--muted);font-size:12px"><strong>Strength:</strong> ${data.strength}<br><strong>Weakness:</strong> ${data.weakness}</p>`;
    breakdown.appendChild(p);
  });

  // directive: derive short roadmap
  directiveText.textContent = deriveDirective();
}

function deriveDirective(){
  // Derive directive based on all 7 answers by counting frequencies of A, B, C, D
  const counts = {A:0, B:0, C:0, D:0};
  answers.forEach(ans => {
    if(ans !== null){
      const letter = ['A','B','C','D'][ans];
      counts[letter]++;
    }
  });
  // Find the most frequent letter
  let maxCount = 0;
  let dominant = 'A'; // default
  for(const [key, count] of Object.entries(counts)){
    if(count > maxCount){
      maxCount = count;
      dominant = key;
    }
  }
  // If tie, prefer the one from the last question
  if(maxCount === 0) return 'Reflect and pick one small, decisive action to build momentum.';
  // Map to directive
  if(dominant === 'A') return 'Schedule deliberate solitude to consolidate plan; invite one ally for strategic feedback.';
  if(dominant === 'B') return 'Turn thought into a short action list; execute one small decision daily.';
  if(dominant === 'C') return 'Channel control into delegation; practice releasing a minor task to test trust.';
  if(dominant === 'D') return 'Clarify mission for the next 90 days; make a measurable milestone.';
  return 'Reflect and pick one small, decisive action to build momentum.';
}

function buildTextSummary(){
  let s = 'MASCULINE PROFILE QUIZ - Tactical Briefing\n\n';
  s += `Codename: ${codenameText.textContent} \nProfile code: ${profileCode.textContent}\n\n`;
  QUESTIONS.forEach((q,idx)=>{
    const chosen = answers[idx];
    const letter = ['A','B','C','D'][chosen] || '?';
    const data = RESULTS[q.id][letter] || {};
    s += `${q.title}: ${data.title || 'Unknown'} - ${data.desc || ''}\n`;
  });
  s += `\nDirective: ${directiveText.textContent}`;
  return s;
}

function generatePrintableHTML(){
  // Build a simple HTML document styled for print
  const title = codenameText.textContent;
  let body = `<h1 style="font-family:Arial,Helvetica,sans-serif;color:#000000">${title}</h1>`;
  body += `<p style="font-family:Arial;color:#000000"><strong>Profile code:</strong> ${profileCode.textContent}</p>`;
  body += '<hr/>';
  QUESTIONS.forEach((q,idx)=>{
    const chosen = answers[idx];
    const letter = ['A','B','C','D'][chosen] || '?';
    const data = RESULTS[q.id][letter] || {};
    body += `<h3 style="font-family:Arial;color:#000000;margin-bottom:6px">${q.title} — ${data.title||'Unknown'}</h3>`;
    body += `<p style="color:#000000;margin-top:0">${(data.desc||'')}</p>`;
    body += `<p style="color:#000000;font-size:13px;margin-top:6px"><strong>Strength:</strong> ${(data.strength||'—')}<br/><strong>Weakness:</strong> ${(data.weakness||'—')}</p>`;
    body += '<hr/>';
  });
  body += `<h3 style="color:#000000">Directive</h3><p style="color:#000000">${directiveText.textContent}</p>`;

  const html = `<!doctype html><html><head><meta charset="utf-8"><title>${title}</title><meta name="viewport" content="width=device-width,initial-scale=1"><style>body{font-family:Arial,Helvetica,sans-serif;margin:20px;color:#000000}hr{border:none;border-top:1px solid #eee;margin:14px 0}</style></head><body>${body}</body></html>`;
  return html;
}
