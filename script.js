// Lightweight quiz script — ensures basic flow and results
(function(){
  const QUESTIONS = [
    ['I withdraw and recharge alone.','I clear my mind by thinking.','I stabilise situations and take control.','I refocus myself through purpose.'],
    ['I get angry and push back.','I retreat or stay quiet.','I go numb and shut down.','I try to keep the peace.'],
    ['I grew up facing rejection.','I grew up being invalidated.','I grew up being humiliated.','I grew up being exposed or judged.'],
    ['I rely on independence.','I rely on discipline.','I rely on loyalty.','I rely on integrity.'],
    ['I overthink things.','I avoid difficult actions.','I doubt myself.','My energy is unstable.'],
    ['Responsibility.','Order.','Courage.','Honour.'],
    ['Knowledge.','Strength.','Leadership.','Legacy.']
  ];

  const bootText = document.getElementById('boot-text');
  const beginBtn = document.getElementById('begin-btn');
  const quizScreen = document.getElementById('quiz-screen');
  const bootScreen = document.getElementById('boot-screen');
  const optionsEl = document.getElementById('options');
  const qTitle = document.getElementById('question-title');
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
  const downloadPdfBtn = document.getElementById('download-pdf');

  let idx = 0;
  const answers = new Array(QUESTIONS.length).fill(null);

  // simple boot typing
  const lines = ['INITIALISING SYSTEM...','MASCULINE PROFILE QUIZ LOADING...','TACTICAL INTERFACE READY.'];
  (function type(){ let i=0; let li=0; bootText.textContent=''; function step(){ if(li>=lines.length) return; const line=lines[li++]; i=0; const t=setInterval(()=>{ bootText.textContent += line[i++]||''; if(i>line.length){ clearInterval(t); bootText.textContent += '\n'; setTimeout(step,300); } },20); } step(); })();

  beginBtn.addEventListener('click', ()=>{
    bootScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    render();
  });

  function render(){
    sectionLabel.textContent = `MASCULINE PROFILE QUIZ – SECTION ${idx+1}/${QUESTIONS.length}`;
    qTitle.textContent = `Question ${idx+1}`;
    optionsEl.innerHTML = '';
    QUESTIONS[idx].forEach((opt,i)=>{
      const d = document.createElement('div'); d.className='option'; d.innerHTML = `<div class="lock">${answers[idx]===i?'🔒':''}</div><h4>${['A','B','C','D'][i]}</h4><p>${opt}</p>`;
      d.addEventListener('click', ()=>{ select(i,d); });
      optionsEl.appendChild(d);
    });
    progressFill.style.width = `${(idx/QUESTIONS.length)*100}%`;
    prevBtn.disabled = idx===0;
    nextBtn.disabled = answers[idx]===null;
  }

  function select(i,el){ answers[idx]=i; document.querySelectorAll('.option').forEach(o=>{ o.classList.remove('locked'); const l=o.querySelector('.lock'); if(l) l.textContent=''; o.style.pointerEvents='auto'; }); el.classList.add('locked'); el.querySelector('.lock').textContent='🔒'; el.style.pointerEvents='none'; nextBtn.disabled=false; }

  prevBtn.addEventListener('click', ()=>{ if(idx>0){ idx--; render(); } });
  nextBtn.addEventListener('click', ()=>{ if(answers[idx]===null) return; if(idx < QUESTIONS.length-1){ idx++; render(); } else { showResults(); } });

  function showResults(){ quizScreen.classList.add('hidden'); resultScreen.classList.remove('hidden'); decrypting.textContent='DECRYPTING PROFILE…'; resultCard.classList.add('hidden'); setTimeout(()=>{ decrypting.classList.add('hidden'); buildResults(); resultCard.classList.remove('hidden'); },900); }

  function buildResults(){ const map=['THE LONE WOLF','THE STRATEGIST','THE COMMANDER','THE ANCHOR']; codenameText.textContent = map[answers[0]] || 'THE PROFILE'; profileCode.textContent = `M-${(answers[0]||0)+11} S-${(answers[1]||0)+5}`; breakdown.innerHTML=''; QUESTIONS.forEach((q,i)=>{ const choice = answers[i]; const info = (RESULTS && RESULTS[i+1] && RESULTS[i+1][['A','B','C','D'][choice]]) || {title: (choice!==null? ['A','B','C','D'][choice]:'Unknown'), desc: QUESTIONS[i][choice]||''}; const p=document.createElement('div'); p.className='panel-item'; p.innerHTML = `<h4>${q.length? ('Section '+(i+1)) : ''} — ${info.title}</h4><p>${info.desc}</p>`; breakdown.appendChild(p); }); directiveText.textContent = 'Recommended Operating Directive: Start with one small, measurable action.'; }

  exportPdf && exportPdf.addEventListener('click', ()=>{ window.print(); });
  copySummary && copySummary.addEventListener('click', async ()=>{ const txt = `Codename: ${codenameText.textContent}\nCode: ${profileCode.textContent}`; try{ await navigator.clipboard.writeText(txt); alert('Summary copied'); }catch(e){ alert('Copy failed'); } });
  restartBtn.addEventListener('click', ()=>{ idx=0; answers.fill(null); resultScreen.classList.add('hidden'); quizScreen.classList.remove('hidden'); render(); });

  // lightweight RESULTS map fallback (if not present) — short mapping
  const RESULTS = {
    1:{A:{title:'Solitude',desc:'You recharge alone.'},B:{title:'Thinking',desc:'You recharge by thinking.'},C:{title:'Control',desc:'You regain energy by taking control.'},D:{title:'Purpose',desc:'Purpose fuels you.'}},
    2:{A:{title:'Anger',desc:'You push back.'},B:{title:'Withdrawal',desc:'You retreat.'},C:{title:'Numbness',desc:'You go quiet.'},D:{title:'Pleasing',desc:'You keep peace.'}},
    3:{A:{title:'Rejection',desc:'You faced rejection.'},B:{title:'Invalidation',desc:'You were invalidated.'},C:{title:'Humiliation',desc:'You felt humiliated.'},D:{title:'Exposure',desc:'You were exposed.'}},
    4:{A:{title:'Independence',desc:'You rely on independence.'},B:{title:'Discipline',desc:'You rely on discipline.'},C:{title:'Loyalty',desc:'You rely on loyalty.'},D:{title:'Integrity',desc:'You rely on integrity.'}},
    5:{A:{title:'Overthinking',desc:'You overthink.'},B:{title:'Avoidance',desc:'You avoid.'},C:{title:'Self-doubt',desc:'You doubt yourself.'},D:{title:'Unstable',desc:'Your energy is unstable.'}},
    6:{A:{title:'Responsibility',desc:'You carry responsibility.'},B:{title:'Order',desc:'You value order.'},C:{title:'Courage',desc:'You act bravely.'},D:{title:'Honour',desc:'You live by honour.'}},
    7:{A:{title:'Knowledge',desc:'Life pushes you to know.'},B:{title:'Strength',desc:'Life forges strength.'},C:{title:'Leadership',desc:'Life pushes you to lead.'},D:{title:'Legacy',desc:'Life pushes you to leave impact.'}}
  };

})();
// Masculine Profile Quiz - main logic (questions, UI, sounds, results)
(function(){
  const QUESTIONS = [
    {id:1,title:'How you regain energy',options:[{code:'A',title:'Solitude',text:'I withdraw and recharge alone.'},{code:'B',title:'Thinking',text:'I clear my mind by thinking.'},{code:'C',title:'Taking control',text:'I stabilise situations and take control.'},{code:'D',title:'Purpose',text:'I refocus myself through purpose.'}]},
    {id:2,title:'Your instinct under stress',options:[{code:'A',title:'Anger (fight)',text:'I get angry and push back.'},{code:'B',title:'Withdrawal (flight)',text:'I retreat or stay quiet.'},{code:'C',title:'Numbness (freeze)',text:'I go numb and shut down.'},{code:'D',title:'Pleasing (fawn)',text:'I try to keep the peace.'}]},
    {id:3,title:'The wound that shaped you',options:[{code:'A',title:'Rejection',text:'I grew up facing rejection.'},{code:'B',title:'Invalidation',text:'I grew up being invalidated.'},{code:'C',title:'Humiliation',text:'I grew up being humiliated.'},{code:'D',title:'Exposure',text:'I grew up being exposed or judged.'}]},
    {id:4,title:'Your natural strength',options:[{code:'A',title:'Independence',text:'I rely on independence.'},{code:'B',title:'Discipline',text:'I rely on discipline.'},{code:'C',title:'Loyalty',text:'I rely on loyalty.'},{code:'D',title:'Integrity',text:'I rely on integrity.'}]},
    {id:5,title:'How you sabotage yourself',options:[{code:'A',title:'Overthinking',text:'I overthink things.'},{code:'B',title:'Avoidance',text:'I avoid difficult actions.'},{code:'C',title:'Self-doubt',text:'I doubt myself.'},{code:'D',title:'Unstable energy',text:'My energy is unstable.'}]},
    {id:6,title:'What defines your masculinity internally',options:[{code:'A',title:'Responsibility',text:'Responsibility.'},{code:'B',title:'Order',text:'Order.'},{code:'C',title:'Courage',text:'Courage.'},{code:'D',title:'Honour',text:'Honour.'}]},
    {id:7,title:'Where your life is pushing you',options:[{code:'A',title:'Knowledge',text:'Knowledge.'},{code:'B',title:'Strength',text:'Strength.'},{code:'C',title:'Leadership',text:'Leadership.'},{code:'D',title:'Legacy',text:'Legacy.'}]}
  ];

  // Simple results mapping (kept concise)
  const RESULTS = {
    1: {A:{title:'Solitude',desc:'You regain strength by withdrawing into your own world.'},B:{title:'Thinking',desc:'Clarity is your fuel.'},C:{title:'Taking control',desc:'Your energy returns when you impose order.'},D:{title:'Purpose',desc:'Mission fuels you.'}},
    2: {A:{title:'Anger',desc:'Push back to regain control.'},B:{title:'Withdrawal',desc:'You retreat to process.'},C:{title:'Numbness',desc:'You shut down internally.'},D:{title:'Pleasing',desc:'You de-escalate to survive.'}},
    3: {A:{title:'Rejection',desc:'You learned to rely on yourself.'},B:{title:'Invalidation',desc:'You were taught your feelings were wrong.'},C:{title:'Humiliation',desc:'You fear shame.'},D:{title:'Exposure',desc:'You became cautious.'}},
    4: {A:{title:'Independence',desc:'Built to stand alone.'},B:{title:'Discipline',desc:'Consistency and standards.'},C:{title:'Loyalty',desc:'Unshakeable when committed.'},D:{title:'Integrity',desc:'Principle-driven.'}},
    5: {A:{title:'Overthinking',desc:'You lose momentum to analysis.'},B:{title:'Avoidance',desc:'You dodge discomfort.'},C:{title:'Self-doubt',desc:'Inner critic holds you back.'},D:{title:'Unstable energy',desc:'Waves of intensity.'}},
    6: {A:{title:'Responsibility',desc:'You measure yourself by what you carry.'},B:{title:'Order',desc:'Structure defines you.'},C:{title:'Courage',desc:'You act despite fear.'},D:{title:'Honour',desc:'You live by a code.'}},
    7: {A:{title:'Knowledge',desc:'Life pushes you to learn.'},B:{title:'Strength',desc:'You are being forged.'},C:{title:'Leadership',desc:'You are moving toward command.'},D:{title:'Legacy',desc:'You are building impact.'}}
  };

  // DOM refs
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
  const downloadPdfBtn = document.getElementById('download-pdf');

  let current = 0;
  let answers = new Array(QUESTIONS.length).fill(null);

  // Simple audio (oscillators)
  let audioCtx;
  function ensureAudio(){ if(!audioCtx) audioCtx = new (window.AudioContext||window.webkitAudioContext)(); }
  function tone(freq,duration=0.06,type='sine',gain=0.02){ try{ ensureAudio(); const o=audioCtx.createOscillator(); const g=audioCtx.createGain(); o.type=type; o.frequency.value=freq; g.gain.value=gain; o.connect(g); g.connect(audioCtx.destination); o.start(); o.stop(audioCtx.currentTime+duration);}catch(e){} }
  function clickSound(){ tone(160,0.04,'square',0.03); }
  function ping(){ tone(880,0.08,'sine',0.03); }
  function errorBuzz(){ tone(120,0.12,'sawtooth',0.05); }

  // boot typing
  const bootLines = ['INITIALISING SYSTEM...','MASCULINE PROFILE QUIZ LOADING...','TACTICAL INTERFACE READY.'];
  function typeBoot(){ let li=0; bootText.textContent=''; function nextLine(){ if(li>=bootLines.length) return; const line=bootLines[li++]; let i=0; const intr=setInterval(()=>{ bootText.textContent += line[i++] || ''; if(i>line.length){ clearInterval(intr); bootText.textContent += '\n'; setTimeout(nextLine,350); } },28); } nextLine(); }
  typeBoot();

  beginBtn.addEventListener('click', ()=>{
    clickSound();
    try{ ensureAudio(); if(audioCtx.state==='suspended') audioCtx.resume(); startAmbient(); }catch(e){}
    bootScreen.classList.add('hidden'); quizScreen.classList.remove('hidden'); renderQuestion();
  });

  // ambient
  let ambientOsc=null, ambientGain=null, sonarInterval=null;
  function startAmbient(){ if(!audioCtx) ensureAudio(); if(ambientOsc) return; ambientOsc = audioCtx.createOscillator(); ambientGain = audioCtx.createGain(); ambientOsc.type='sine'; ambientOsc.frequency.value=58; ambientGain.gain.value=0.0015; ambientOsc.connect(ambientGain); ambientGain.connect(audioCtx.destination); ambientOsc.start(); sonarInterval = setInterval(()=>{ ping(); },12000); }
  function stopAmbient(){ try{ if(sonarInterval){ clearInterval(sonarInterval); sonarInterval=null; } if(ambientOsc){ ambientOsc.stop(); ambientOsc.disconnect(); ambientOsc=null; } if(ambientGain){ ambientGain.disconnect(); ambientGain=null; } }catch(e){} }

  function renderQuestion(){ const q=QUESTIONS[current]; sectionLabel.textContent = `MASCULINE PROFILE QUIZ – SECTION ${current+1}/${QUESTIONS.length}`; questionTitle.textContent=q.title; optionsEl.innerHTML=''; q.options.forEach((opt,idx)=>{ const div=document.createElement('div'); div.className='option'; div.innerHTML = `<div class="lock">${answers[current]===idx? '🔒':''}</div><h4>${opt.title}</h4><p>${opt.text}</p>`; if(answers[current]===idx) div.classList.add('locked'); div.addEventListener('click', ()=>{ selectOption(idx,div); }); div.addEventListener('mouseenter', ()=>{ tone(300,0.02,'sine',0.01); div.style.transform='translateY(-2px)'; }); div.addEventListener('mouseleave', ()=>{ div.style.transform=''; }); optionsEl.appendChild(div); }); progressFill.style.width = `${((current)/QUESTIONS.length)*100}%`; prevBtn.disabled = current===0; nextBtn.disabled = answers[current]===null; }

  function selectOption(idx,el){ answers[current]=idx; document.querySelectorAll('.option').forEach(o=>{ o.classList.remove('locked'); const lock=o.querySelector('.lock'); if(lock) lock.textContent=''; o.style.pointerEvents='auto'; }); el.classList.add('locked'); const lk=el.querySelector('.lock'); if(lk) lk.textContent='🔒'; el.style.pointerEvents='none'; clickSound(); setTimeout(()=>{ nextBtn.disabled=false; },80); }

  prevBtn.addEventListener('click', ()=>{ if(current>0){ current--; renderQuestion(); } });
  nextBtn.addEventListener('click', ()=>{ if(answers[current]===null){ errorBuzz(); return; } if(current < QUESTIONS.length-1){ current++; renderQuestion(); } else { showResults(); } });

  function showResults(){ quizScreen.classList.add('hidden'); resultScreen.classList.remove('hidden'); decrypting.textContent='DECRYPTING PROFILE…'; resultCard.classList.add('hidden'); ping(); setTimeout(()=>{ decrypting.classList.add('hidden'); buildResult(); resultCard.classList.remove('hidden'); resultCard.style.opacity=0; resultCard.style.transform='translateY(8px)'; setTimeout(()=>{ resultCard.style.transition='all 360ms ease'; resultCard.style.opacity=1; resultCard.style.transform='translateY(0)'; },8); },1400); }

  function buildResult(){ const q1=answers[0]; const map=['THE LONE WOLF','THE STRATEGIST','THE COMMANDER','THE ANCHOR']; codenameText.textContent = map[q1] || 'THE PROFILE'; profileCode.textContent = `M-${((answers[0]||0)+1)*3+11} S-${((answers[1]||0)+1)*4+5}`; breakdown.innerHTML=''; QUESTIONS.forEach((q,idx)=>{ const chosen=answers[idx]; const key=['A','B','C','D'][chosen]||'?'; const data=(RESULTS[q.id]&&RESULTS[q.id][key])?RESULTS[q.id][key]:{title:'Unknown',desc:'No data'}; const p=document.createElement('div'); p.className='panel-item'; p.innerHTML=`<h4>${q.title} — ${data.title}</h4><p>${data.desc}</p>`; breakdown.appendChild(p); }); directiveText.textContent = 'Recommended: take one small decisive action this week.'; }

  exportPdf && exportPdf.addEventListener('click', ()=>{ const html = generatePrintableHTML(); const w = window.open('','_blank','width=900,height=700'); if(!w){ errorBuzz(); return; } w.document.write(html); w.document.close(); setTimeout(()=>{ w.focus(); w.print(); },300); });

  copySummary && copySummary.addEventListener('click', async ()=>{ const text = buildTextSummary(); try{ await navigator.clipboard.writeText(text); ping(); }catch(e){ errorBuzz(); } });

  downloadPdfBtn && downloadPdfBtn.addEventListener('click', ()=>{ const htmlString = generatePrintableHTML(); const container = document.createElement('div'); container.style.padding='18px'; container.innerHTML = htmlString; document.body.appendChild(container); const opt={margin:0.6,filename:`${(codenameText.textContent||'profile').replace(/\s+/g,'_')}.pdf`,image:{type:'jpeg',quality:0.95},html2canvas:{scale:1},jsPDF:{unit:'in',format:'letter',orientation:'portrait'}}; if(window.html2pdf){ html2pdf().from(container).set(opt).save().then(()=>{ container.remove(); ping(); }).catch(()=>{ container.remove(); errorBuzz(); }); } else { container.remove(); errorBuzz(); alert('PDF library not available.'); } });

  restartBtn.addEventListener('click', ()=>{ current=0; answers=new Array(QUESTIONS.length).fill(null); resultScreen.classList.add('hidden'); quizScreen.classList.remove('hidden'); stopAmbient(); renderQuestion(); });

  function buildTextSummary(){ let s='MASCULINE PROFILE QUIZ - Tactical Briefing\n\n'; s+=`Codename: ${codenameText.textContent}\nProfile: ${profileCode.textContent}\n\n`; QUESTIONS.forEach((q,idx)=>{ const chosen=answers[idx]; const data=(RESULTS[q.id]&&RESULTS[q.id][['A','B','C','D'][chosen]])?RESULTS[q.id][['A','B','C','D'][chosen]]:{}; s+=`${q.title}: ${data.title||'Unknown'} - ${data.desc||''}\n`; }); s+=`\nDirective: ${directiveText.textContent}`; return s; }

  function generatePrintableHTML(){ const title=codenameText.textContent||'Profile'; let body=`<h1>${title}</h1><p><strong>Profile code:</strong> ${profileCode.textContent}</p><hr/>`; QUESTIONS.forEach((q,idx)=>{ const chosen=answers[idx]; const data=(RESULTS[q.id]&&RESULTS[q.id][['A','B','C','D'][chosen]])?RESULTS[q.id][['A','B','C','D'][chosen]]:{}; body+=`<h3>${q.title} — ${data.title||'Unknown'}</h3><p>${data.desc||''}</p><hr/>`; }); body+=`<h3>Directive</h3><p>${directiveText.textContent}</p>`; return `<!doctype html><html><head><meta charset="utf-8"><title>${title}</title></head><body>${body}</body></html>`; }

})();
// Masculine Profile Quiz - interactive logic (merged enhancements)
const QUESTIONS = [
  {id:1,title:'How you regain energy',options:[{code:'A',title:'Solitude',text:'I withdraw and recharge alone.'},{code:'B',title:'Thinking',text:'I clear my mind by thinking.'},{code:'C',title:'Taking control',text:'I stabilise situations and take control.'},{code:'D',title:'Purpose',text:'I refocus myself through purpose.'}]},
  {id:2,title:'Your instinct under stress',options:[{code:'A',title:'Anger (fight)',text:'I get angry and push back.'},{code:'B',title:'Withdrawal (flight)',text:'I retreat or stay quiet.'},{code:'C',title:'Numbness (freeze)',text:'I go numb and shut down.'},{code:'D',title:'Pleasing (fawn)',text:'I try to keep the peace.'}]},
  {id:3,title:'The wound that shaped you',options:[{code:'A',title:'Rejection',text:'I grew up facing rejection.'},{code:'B',title:'Invalidation',text:'I grew up being invalidated.'},{code:'C',title:'Humiliation',text:'I grew up being humiliated.'},{code:'D',title:'Exposure',text:'I grew up being exposed or judged.'}]},
  {id:4,title:'Your natural strength',options:[{code:'A',title:'Independence',text:'I rely on independence.'},{code:'B',title:'Discipline',text:'I rely on discipline.'},{code:'C',title:'Loyalty',text:'I rely on loyalty.'},{code:'D',title:'Integrity',text:'I rely on integrity.'}]},
  {id:5,title:'How you sabotage yourself',options:[{code:'A',title:'Overthinking',text:'I overthink things.'},{code:'B',title:'Avoidance',text:'I avoid difficult actions.'},{code:'C',title:'Self-doubt',text:'I doubt myself.'},{code:'D',title:'Unstable energy',text:'My energy is unstable.'}]},
  {id:6,title:'What defines your masculinity internally',options:[{code:'A',title:'Responsibility',text:'Responsibility.'},{code:'B',title:'Order',text:'Order.'},{code:'C',title:'Courage',text:'Courage.'},{code:'D',title:'Honour',text:'Honour.'}]},
  {id:7,title:'Where your life is pushing you',options:[{code:'A',title:'Knowledge',text:'Knowledge.'},{code:'B',title:'Strength',text:'Strength.'},{code:'C',title:'Leadership',text:'Leadership.'},{code:'D',title:'Legacy',text:'Legacy.'}]}
];

const RESULTS = { /* same structure as earlier; abbreviated here for brevity */
  1:{A:{title:'Solitude',desc:'You regain strength by withdrawing into your own world — where your thoughts sharpen, your emotions settle, and the outside noise stops interfering with your inner command.',strength:'You can rebuild yourself entirely without anyone’s help. Few men possess that level of inner discipline.',weakness:'When solitude becomes your default, you risk believing that you must carry every burden alone.'},B:{title:'Thinking',desc:'Clarity is your fuel. When your mind understands something fully, your energy rises as if a knot has been untied inside you.',strength:'Your strategic mind makes you exceptionally rational.',weakness:'You can become trapped in your own head, mistaking thought for progress.'},C:{title:'Taking control',desc:'Your energy returns the moment you impose order — reorganising, correcting, fixing, commanding.',strength:'You’re naturally suited to leadership.',weakness:'You may grip too tightly.'},D:{title:'Purpose',desc:'When you know your mission, your energy becomes fierce and unstoppable.',strength:'Meaning fuels you more than comfort ever could.',weakness:'When the mission becomes unclear, you lose stability.'}},
  2:{A:{title:'Anger (fight)',desc:'Your stress turns into force — you push back to regain control.',strength:'You refuse to be overpowered.',weakness:'Rage can make you misjudge the battlefield.'},B:{title:'Withdrawal (flight)',desc:'You retreat to regain clarity, not to surrender.',strength:'It prevents you from saying or doing something reckless.',weakness:'You hide longer than necessary.'},C:{title:'Numbness (freeze)',desc:'Your mind goes still and you become a quiet observer.',strength:'You can survive chaos without panic.',weakness:'You may fail to seize critical moments.'},D:{title:'Pleasing (fawn)',desc:'You de-escalate instantly, softening yourself to survive the threat.',strength:'You can control tension quickly.',weakness:'You betray your own needs to keep the peace.'}},
  3:{A:{title:'Rejection',desc:'You learned early that you must rely on yourself.',strength:'You became fiercely independent.',weakness:'You struggle to let people inside your guard.'},B:{title:'Invalidation',desc:'You were taught that your feelings or identity were “wrong”.',strength:'You developed a strong, unshakeable sense of self.',weakness:'Disrespect hits you harder.'},C:{title:'Humiliation',desc:'You felt small, exposed, or powerless.',strength:'You built immense dignity and personal pride.',weakness:'You fear shame and push perfectionism.'},D:{title:'Exposure',desc:'You were seen or judged before you were ready.',strength:'You became observant and perceptive.',weakness:'You hide your vulnerabilities too well.'}},
  4:{A:{title:'Independence',desc:'You’re built to stand alone and command yourself.',strength:'You cannot be manipulated easily.',weakness:'You trust slowly.'},B:{title:'Discipline',desc:'Your strength is consistency and standards.',strength:'People rely on you.',weakness:'You punish yourself for every misstep.'},C:{title:'Loyalty',desc:'When you love or commit, you do so with depth.',strength:'You’re unshakeable once you decide someone is yours.',weakness:'Betrayal destroys you internally.'},D:{title:'Integrity',desc:'Your identity is built around principle.',strength:'You become a stable anchor for others.',weakness:'You may resist necessary compromise.'}},
  5:{A:{title:'Overthinking',desc:'You dissect every possibility until momentum dies.',strength:'High intelligence.',weakness:'You lose time and courage.'},B:{title:'Avoidance',desc:'You dodge discomfort, often without realising it.',strength:'You sense danger early.',weakness:'You miss opportunities.'},C:{title:'Self-doubt',desc:'Your inner critic is louder than your ambition.',strength:'You’re humble and careful.',weakness:'You fail to step into your true potential.'},D:{title:'Unstable energy',desc:'You operate in waves — intense highs, silent lows.',strength:'When you rise, you are powerful.',weakness:'Consistency becomes difficult.'}},
  6:{A:{title:'Responsibility',desc:'You measure yourself by what you carry.',strength:'You’re dependable and respected.',weakness:'You take on far too much alone.'},B:{title:'Order',desc:'Your masculinity is structure, clarity, precision.',strength:'You bring stability everywhere.',weakness:'You cannot stand chaos.'},C:{title:'Courage',desc:'You act even when you’re afraid.',strength:'You confront life head-on.',weakness:'You refuse support.'},D:{title:'Honour',desc:'You live by an inner code.',strength:'You’re unshakeable in truth and loyalty.',weakness:'Betrayal feels like a wound.'}},
  7:{A:{title:'Knowledge',desc:'Life is shaping you into a master of understanding.',strength:'Sharp mind, deep insight.',weakness:'You risk living too much in theory.'},B:{title:'Strength',desc:'You’re being forged to become resilient and formidable.',strength:'Presence, confidence, endurance.',weakness:'Burnout from pushing too hard.'},C:{title:'Leadership',desc:'Your life is pushing you into command.',strength:'Influence, structure, authority.',weakness:'Responsibility can become crushing.'},D:{title:'Legacy',desc:'Your story is about impact and what you will leave behind.',strength:'Vision and purpose.',weakness:'You fear wasting your gifts.'}}
};

// DOM elements
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
const downloadPdfBtn = document.getElementById('download-pdf');

let current = 0;
let answers = new Array(QUESTIONS.length).fill(null);

// WebAudio state
let audioCtx;
let ambientOsc = null;
let ambientGain = null;
let sonarInterval = null;

function ensureAudio(){ if(!audioCtx) audioCtx = new (window.AudioContext||window.webkitAudioContext)(); }
function tone(freq,duration=0.06,type='sine',gainVal=0.02){ try{ ensureAudio(); const o=audioCtx.createOscillator(); const g=audioCtx.createGain(); o.type=type; o.frequency.value=freq; g.gain.value=gainVal; o.connect(g); g.connect(audioCtx.destination); o.start(); o.stop(audioCtx.currentTime+duration);}catch(e){} }
function ping(){ tone(880,0.08,'sine',0.03); }
function clickSound(){ tone(160,0.04,'square',0.03); }
function hoverSound(){ tone(300,0.02,'sine',0.01); }
function errorBuzz(){ tone(120,0.12,'sawtooth',0.05); }

// Boot typing
const bootLines = ['INITIALISING SYSTEM...','MASCULINE PROFILE QUIZ LOADING...','TACTICAL INTERFACE READY.'];
function typeBoot(){ let li=0; bootText.textContent=''; function nextLine(){ if(li>=bootLines.length) return; const line=bootLines[li++]; let i=0; const intr=setInterval(()=>{ bootText.textContent += line[i++] || ''; if(i>line.length){ clearInterval(intr); bootText.textContent += '\n'; setTimeout(nextLine,350); } },28); } nextLine(); }
typeBoot();

beginBtn.addEventListener('click', ()=>{
  clickSound();
  try{ ensureAudio(); if(audioCtx.state==='suspended') audioCtx.resume(); startAmbient(); }catch(e){}
  bootScreen.classList.add('hidden');
  quizScreen.classList.remove('hidden');
  renderQuestion();
});

function startAmbient(){ if(!audioCtx) ensureAudio(); if(ambientOsc) return; ambientOsc = audioCtx.createOscillator(); ambientGain = audioCtx.createGain(); ambientOsc.type='sine'; ambientOsc.frequency.value = 58; ambientGain.gain.value = 0.0015; ambientOsc.connect(ambientGain); ambientGain.connect(audioCtx.destination); ambientOsc.start(); sonarInterval = setInterval(()=>{ ping(); }, 12000); }
function stopAmbient(){ try{ if(sonarInterval){ clearInterval(sonarInterval); sonarInterval=null; } if(ambientOsc){ ambientOsc.stop(); ambientOsc.disconnect(); ambientOsc=null; } if(ambientGain){ ambientGain.disconnect(); ambientGain=null; } }catch(e){} }

function renderQuestion(){ const q=QUESTIONS[current]; sectionLabel.textContent = `MASCULINE PROFILE QUIZ – SECTION ${current+1}/${QUESTIONS.length}`; questionTitle.textContent = q.title; optionsEl.innerHTML=''; q.options.forEach((opt,idx)=>{ const div=document.createElement('div'); div.className='option'; div.dataset.idx=idx; div.innerHTML = `<div class="lock">${answers[current]===idx? '🔒':''}</div><h4>${opt.title}</h4><p>${opt.text}</p>`; if(answers[current]===idx) div.classList.add('locked'); div.addEventListener('mouseenter', ()=>{ hoverSound(); div.style.transform='translateY(-2px)'; }); div.addEventListener('mouseleave', ()=>{ div.style.transform=''; }); div.addEventListener('click', ()=>{ selectOption(idx,div); }); optionsEl.appendChild(div); }); progressFill.style.width = `${((current)/QUESTIONS.length)*100}%`; prevBtn.disabled = current===0; nextBtn.disabled = answers[current]===null; }

function selectOption(idx,el){ answers[current]=idx; document.querySelectorAll('.option').forEach((o)=>{ o.classList.remove('locked'); const lock = o.querySelector('.lock'); if(lock) lock.textContent=''; o.style.pointerEvents='auto'; }); el.classList.add('locked'); const lockEl = el.querySelector('.lock'); if(lockEl) lockEl.textContent='🔒'; el.style.pointerEvents='none'; clickSound(); setTimeout(()=>{ nextBtn.disabled=false; },80); }

prevBtn.addEventListener('click', ()=>{ if(current>0){ current--; renderQuestion(); } });
nextBtn.addEventListener('click', ()=>{ if(answers[current]===null){ errorBuzz(); return; } if(current < QUESTIONS.length-1){ current++; renderQuestion(); } else { showResults(); }});

function showResults(){ quizScreen.classList.add('hidden'); resultScreen.classList.remove('hidden'); decrypting.textContent='DECRYPTING PROFILE…'; resultCard.classList.add('hidden'); ping(); setTimeout(()=>{ decrypting.classList.add('hidden'); buildResult(); resultCard.classList.remove('hidden'); resultCard.style.opacity=0; resultCard.style.transform='translateY(8px)'; setTimeout(()=>{ resultCard.style.transition='all 360ms ease'; resultCard.style.opacity=1; resultCard.style.transform='translateY(0)'; },8); },1400); }

function buildResult(){ const q1 = answers[0]; const nameMap = ['THE LONE WOLF','THE STRATEGIST','THE COMMANDER','THE ANCHOR']; const codename = nameMap[q1] || 'THE PROFILE'; codenameText.textContent = codename; const codeParts = answers.map((a,i)=>(a===null?0:a+1)); const code = `M-${(codeParts[0]*3+11).toString().padStart(2,'0')} S-${(codeParts[1]*4+5).toString().padStart(2,'0')}`; profileCode.textContent = code; breakdown.innerHTML=''; QUESTIONS.forEach((q,idx)=>{ const chosen = answers[idx]; const key = ['A','B','C','D'][chosen] || '?'; const data = (RESULTS[q.id] && RESULTS[q.id][key]) ? RESULTS[q.id][key] : {title:'Unknown',desc:'No data',strength:'—',weakness:'—'}; const p=document.createElement('div'); p.className='panel-item'; p.innerHTML = `<h4>${q.title} — ${data.title}</h4><p>${data.desc}</p><p style="margin-top:8px;color:var(--muted);font-size:12px"><strong>Strength:</strong> ${data.strength}<br><strong>Weakness:</strong> ${data.weakness}</p>`; breakdown.appendChild(p); }); directiveText.textContent = deriveDirective(); }

function deriveDirective(){ const major = answers[0]; if(major===0) return 'Schedule deliberate solitude to consolidate plan; invite one ally for strategic feedback.'; if(major===1) return 'Turn thought into a short action list; execute one small decision daily.'; if(major===2) return 'Channel control into delegation; practice releasing a minor task to test trust.'; if(major===3) return 'Clarify mission for the next 90 days; make a measurable milestone.'; return 'Reflect and pick one small, decisive action to build momentum.'; }

exportPdf.addEventListener('click', ()=>{ const html = generatePrintableHTML(); const w = window.open('','_blank','width=900,height=700'); if(!w){ errorBuzz(); return; } w.document.write(html); w.document.close(); setTimeout(()=>{ w.focus(); w.print(); },300); });

copySummary.addEventListener('click', async ()=>{ const summary = buildTextSummary(); try{ await navigator.clipboard.writeText(summary); ping(); }catch(e){ errorBuzz(); } });

downloadPdfBtn && downloadPdfBtn.addEventListener('click', ()=>{ const htmlString = generatePrintableHTML(); const container = document.createElement('div'); container.style.background='#fff'; container.style.color='#111'; container.style.padding='18px'; container.innerHTML = htmlString; document.body.appendChild(container); const opt = { margin:0.6, filename:`${(codenameText.textContent||'profile').replace(/\s+/g,'_')}.pdf`, image:{type:'jpeg',quality:0.95}, html2canvas:{scale:1}, jsPDF:{unit:'in',format:'letter',orientation:'portrait'} }; if(window.html2pdf){ html2pdf().from(container).set(opt).save().then(()=>{ container.remove(); ping(); }).catch(()=>{ container.remove(); errorBuzz(); }); } else { container.remove(); errorBuzz(); alert('PDF library not available.'); } });

restartBtn.addEventListener('click', ()=>{ current=0; answers = new Array(QUESTIONS.length).fill(null); resultScreen.classList.add('hidden'); quizScreen.classList.remove('hidden'); stopAmbient(); renderQuestion(); });

function buildTextSummary(){ let s='MASCULINE PROFILE QUIZ - Tactical Briefing\n\n'; s += `Codename: ${codenameText.textContent} \nProfile code: ${profileCode.textContent}\n\n`; QUESTIONS.forEach((q,idx)=>{ const chosen = answers[idx]; const letter = ['A','B','C','D'][chosen] || '?'; const data = (RESULTS[q.id] && RESULTS[q.id][letter]) ? RESULTS[q.id][letter] : {}; s += `${q.title}: ${data.title || 'Unknown'} - ${data.desc || ''}\n`; }); s += `\nDirective: ${directiveText.textContent}`; return s; }

function generatePrintableHTML(){ const title = codenameText.textContent || 'Profile'; let body = `<h1 style="font-family:Arial,Helvetica,sans-serif;color:#111">${title}</h1>`; body += `<p style="font-family:Arial;color:#333"><strong>Profile code:</strong> ${profileCode.textContent}</p>`; body += '<hr/>'; QUESTIONS.forEach((q,idx)=>{ const chosen = answers[idx]; const letter = ['A','B','C','D'][chosen] || '?'; const data = (RESULTS[q.id] && RESULTS[q.id][letter]) ? RESULTS[q.id][letter] : {}; body += `<h3 style="font-family:Arial;color:#111;margin-bottom:6px">${q.title} — ${data.title||'Unknown'}</h3>`; body += `<p style="color:#444;margin-top:0">${(data.desc||'')}</p>`; body += `<p style="color:#666;font-size:13px;margin-top:6px"><strong>Strength:</strong> ${(data.strength||'—')}<br/><strong>Weakness:</strong> ${(data.weakness||'—')}</p>`; body += '<hr/>'; }); body += `<h3>Directive</h3><p>${directiveText.textContent}</p>`; const html = `<!doctype html><html><head><meta charset="utf-8"><title>${title}</title><meta name="viewport" content="width=device-width,initial-scale=1"><style>body{font-family:Arial,Helvetica,sans-serif;margin:20px;color:#111}hr{border:none;border-top:1px solid #eee;margin:14px 0}</style></head><body>${body}</body></html>`; return html; }

// Ambient audio lifecycle
function stopAmbient(){ try{ if(sonarInterval){ clearInterval(sonarInterval); sonarInterval=null; } if(ambientOsc){ ambientOsc.stop(); ambientOsc.disconnect(); ambientOsc=null; } if(ambientGain){ ambientGain.disconnect(); ambientGain=null; } }catch(e){} }

// keyboard navigation
document.addEventListener('keydown',(e)=>{ if(quizScreen.classList.contains('hidden')) return; if(e.key==='ArrowRight') nextBtn.click(); if(e.key==='ArrowLeft') prevBtn.click(); });
// Masculine Profile Quiz - interactive logic
const QUESTIONS = [
  {
    id:1,
    title: 'How you regain energy',
    options: [
      {code:'A', title:'Solitude', text:'I withdraw and recharge alone.'},
      {code:'B', title:'Thinking', text:'I clear my mind by thinking.'},
      {code:'C', title:'Taking control', text:'I stabilise situations and take control.'},
      {code:'D', title:'Purpose', text:'I refocus myself through purpose.'}
    ]
  },
  {
    id:2,
    title: 'Your instinct under stress',
    options: [
      {code:'A', title:'Anger (fight)', text:'I get angry and push back.'},
      {code:'B', title:'Withdrawal (flight)', text:'I retreat or stay quiet.'},
      {code:'C', title:'Numbness (freeze)', text:'I go numb and shut down.'},
      {code:'D', title:'Pleasing (fawn)', text:'I try to keep the peace.'}
    ]
  },
  {
    id:3,
    title: 'The wound that shaped you',
    options: [
      {code:'A', title:'Rejection', text:'I grew up facing rejection.'},
      {code:'B', title:'Invalidation', text:'I grew up being invalidated.'},
      {code:'C', title:'Humiliation', text:'I grew up being humiliated.'},
      {code:'D', title:'Exposure', text:'I grew up being exposed or judged.'}
    ]
  },
  {
    id:4,
    title: 'Your natural strength',
    options: [
      {code:'A', title:'Independence', text:'I rely on independence.'},
      {code:'B', title:'Discipline', text:'I rely on discipline.'},
      {code:'C', title:'Loyalty', text:'I rely on loyalty.'},
      {code:'D', title:'Integrity', text:'I rely on integrity.'}
    ]
  },
  {
    id:5,
    title: 'How you sabotage yourself',
    options: [
      {code:'A', title:'Overthinking', text:'I overthink things.'},
      {code:'B', title:'Avoidance', text:'I avoid difficult actions.'},
      {code:'C', title:'Self-doubt', text:'I doubt myself.'},
      {code:'D', title:'Unstable energy', text:'My energy is unstable.'}
    ]
  },
  {
    id:6,
    title: 'What defines your masculinity internally',
    options: [
      {code:'A', title:'Responsibility', text:'Responsibility.'},
      {code:'B', title:'Order', text:'Order.'},
      {code:'C', title:'Courage', text:'Courage.'},
      {code:'D', title:'Honour', text:'Honour.'}
    ]
  },
  {
    id:7,
    title: 'Where your life is pushing you',
    options: [
      {code:'A', title:'Knowledge', text:'Knowledge.'},
      {code:'B', title:'Strength', text:'Strength.'},
      {code:'C', title:'Leadership', text:'Leadership.'},
      {code:'D', title:'Legacy', text:'Legacy.'}
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
  4:{
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
    if(li>=bootLines.length) return;
    const line = bootLines[li++];
    let i=0;
    const intr = setInterval(()=>{
      bootText.textContent += line[i++] || '';
      if(i>line.length){ clearInterval(intr); bootText.textContent += '\n'; setTimeout(nextLine,350); }
    },28);
  }
  nextLine();
}

typeBoot();

beginBtn.addEventListener('click', ()=>{
  clickSound();
  bootScreen.classList.add('hidden');
  quizScreen.classList.remove('hidden');
  renderQuestion();
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
  // lock animation + tactile feel
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

prevBtn.addEventListener('click', ()=>{
  if(current>0){ current--; renderQuestion(); }
});

nextBtn.addEventListener('click', ()=>{
  if(answers[current]===null){ errorBuzz(); return; }
  // if last, show results
  if(current < QUESTIONS.length-1){ current++; renderQuestion(); }
  else { showResults(); }
});

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
  // simple short roadmap using answers
  const major = answers[0];
  if(major===0) return 'Schedule deliberate solitude to consolidate plan; invite one ally for strategic feedback.';
  if(major===1) return 'Turn thought into a short action list; execute one small decision daily.';
  if(major===2) return 'Channel control into delegation; practice releasing a minor task to test trust.';
  if(major===3) return 'Clarify mission for the next 90 days; make a measurable milestone.';
  return 'Reflect and pick one small, decisive action to build momentum.';
}

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
  const summary = buildTextSummary();
  try{
    await navigator.clipboard.writeText(summary);
    ping();
  }catch(e){ errorBuzz(); }
});

restartBtn.addEventListener('click', ()=>{
  // reset
  current=0; answers = new Array(QUESTIONS.length).fill(null);
  resultScreen.classList.add('hidden');
  quizScreen.classList.remove('hidden');
  renderQuestion();
});

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
  let body = `<h1 style="font-family:Arial,Helvetica,sans-serif;color:#111">${title}</h1>`;
  body += `<p style="font-family:Arial;color:#333"><strong>Profile code:</strong> ${profileCode.textContent}</p>`;
  body += '<hr/>';
  QUESTIONS.forEach((q,idx)=>{
    const chosen = answers[idx];
    const letter = ['A','B','C','D'][chosen] || '?';
    const data = RESULTS[q.id][letter] || {};
    body += `<h3 style="font-family:Arial;color:#111;margin-bottom:6px">${q.title} — ${data.title||'Unknown'}</h3>`;
    body += `<p style="color:#444;margin-top:0">${(data.desc||'')}</p>`;
    body += `<p style="color:#666;font-size:13px;margin-top:6px"><strong>Strength:</strong> ${(data.strength||'—')}<br/><strong>Weakness:</strong> ${(data.weakness||'—')}</p>`;
    body += '<hr/>';
  });
  body += `<h3>Directive</h3><p>${directiveText.textContent}</p>`;

  const html = `<!doctype html><html><head><meta charset="utf-8"><title>${title}</title><meta name="viewport" content="width=device-width,initial-scale=1"><style>body{font-family:Arial,Helvetica,sans-serif;margin:20px;color:#111}hr{border:none;border-top:1px solid #eee;margin:14px 0}</style></head><body>${body}</body></html>`;
  return html;
}

// accessibility: allow keyboard
document.addEventListener('keydown', (e)=>{
  if(quizScreen.classList.contains('hidden')) return;
  if(e.key==='ArrowRight') nextBtn.click();
  if(e.key==='ArrowLeft') prevBtn.click();
});
// Masculine Profile Quiz - interactive logic
const QUESTIONS = [
  {
    id:1,
    title: 'How you regain energy',
    options: [
      {code:'A', title:'Solitude', text:'I withdraw and recharge alone.'},
      {code:'B', title:'Thinking', text:'I clear my mind by thinking.'},
      {code:'C', title:'Taking control', text:'I stabilise situations and take control.'},
      {code:'D', title:'Purpose', text:'I refocus myself through purpose.'}
    ]
  },
  {
    id:2,
    title: 'Your instinct under stress',
    options: [
      {code:'A', title:'Anger (fight)', text:'I get angry and push back.'},
      {code:'B', title:'Withdrawal (flight)', text:'I retreat or stay quiet.'},
      {code:'C', title:'Numbness (freeze)', text:'I go numb and shut down.'},
      {code:'D', title:'Pleasing (fawn)', text:'I try to keep the peace.'}
    ]
  },
  {
    id:3,
    title: 'The wound that shaped you',
    options: [
      {code:'A', title:'Rejection', text:'I grew up facing rejection.'},
      {code:'B', title:'Invalidation', text:'I grew up being invalidated.'},
      {code:'C', title:'Humiliation', text:'I grew up being humiliated.'},
      {code:'D', title:'Exposure', text:'I grew up being exposed or judged.'}
    ]
  },
  {
    id:4,
    title: 'Your natural strength',
    options: [
      {code:'A', title:'Independence', text:'I rely on independence.'},
      {code:'B', title:'Discipline', text:'I rely on discipline.'},
      {code:'C', title:'Loyalty', text:'I rely on loyalty.'},
      {code:'D', title:'Integrity', text:'I rely on integrity.'}
    ]
  },
  {
    id:5,
    title: 'How you sabotage yourself',
    options: [
      {code:'A', title:'Overthinking', text:'I overthink things.'},
      {code:'B', title:'Avoidance', text:'I avoid difficult actions.'},
      {code:'C', title:'Self-doubt', text:'I doubt myself.'},
      {code:'D', title:'Unstable energy', text:'My energy is unstable.'}
    ]
  },
  {
    id:6,
    title: 'What defines your masculinity internally',
    options: [
      {code:'A', title:'Responsibility', text:'Responsibility.'},
      {code:'B', title:'Order', text:'Order.'},
      {code:'C', title:'Courage', text:'Courage.'},
      {code:'D', title:'Honour', text:'Honour.'}
    ]
  },
  {
    id:7,
    title: 'Where your life is pushing you',
    options: [
      {code:'A', title:'Knowledge', text:'Knowledge.'},
      {code:'B', title:'Strength', text:'Strength.'},
      {code:'C', title:'Leadership', text:'Leadership.'},
      {code:'D', title:'Legacy', text:'Legacy.'}
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
  4:{
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
    if(li>=bootLines.length) return;
    const line = bootLines[li++];
    let i=0;
    const intr = setInterval(()=>{
      bootText.textContent += line[i++] || '';
      if(i>line.length){ clearInterval(intr); bootText.textContent += '\n'; setTimeout(nextLine,350); }
    },28);
  }
  nextLine();
}

typeBoot();

beginBtn.addEventListener('click', ()=>{
  clickSound();
  bootScreen.classList.add('hidden');
  quizScreen.classList.remove('hidden');
  renderQuestion();
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

prevBtn.addEventListener('click', ()=>{
  if(current>0){ current--; renderQuestion(); }
});

nextBtn.addEventListener('click', ()=>{
  if(answers[current]===null){ errorBuzz(); return; }
  // if last, show results
  if(current < QUESTIONS.length-1){ current++; renderQuestion(); }
  else { showResults(); }
});

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
  // simple short roadmap using answers
  const major = answers[0];
  if(major===0) return 'Schedule deliberate solitude to consolidate plan; invite one ally for strategic feedback.';
  if(major===1) return 'Turn thought into a short action list; execute one small decision daily.';
  if(major===2) return 'Channel control into delegation; practice releasing a minor task to test trust.';
  if(major===3) return 'Clarify mission for the next 90 days; make a measurable milestone.';
  return 'Reflect and pick one small, decisive action to build momentum.';
}

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
  const summary = buildTextSummary();
  try{
    await navigator.clipboard.writeText(summary);
    ping();
  }catch(e){ errorBuzz(); }
});

restartBtn.addEventListener('click', ()=>{
  // reset
  current=0; answers = new Array(QUESTIONS.length).fill(null);
  resultScreen.classList.add('hidden');
  quizScreen.classList.remove('hidden');
  renderQuestion();
});

function buildTextSummary(){
  let s = 'MASCULINE PROFILE QUIZ - Tactical Briefing\n\n';
  s += `Codename: ${codenameText.textContent} \nProfile code: ${profileCode.textContent}\n\n`;
  function generatePrintableHTML(){
    // Build a simple HTML document styled for print
    const title = codenameText.textContent;
    let body = `<h1 style="font-family:Arial,Helvetica,sans-serif;color:#111">${title}</h1>`;
    body += `<p style="font-family:Arial;color:#333"><strong>Profile code:</strong> ${profileCode.textContent}</p>`;
    body += '<hr/>';
    QUESTIONS.forEach((q,idx)=>{
      const chosen = answers[idx];
      const letter = ['A','B','C','D'][chosen] || '?';
      const data = RESULTS[q.id][letter] || {};
      body += `<h3 style="font-family:Arial;color:#111;margin-bottom:6px">${q.title} — ${data.title||'Unknown'}</h3>`;
      body += `<p style="color:#444;margin-top:0">${(data.desc||'')}</p>`;
      body += `<p style="color:#666;font-size:13px;margin-top:6px"><strong>Strength:</strong> ${(data.strength||'—')}<br/><strong>Weakness:</strong> ${(data.weakness||'—')}</p>`;
      body += '<hr/>';
    });
    body += `<h3>Directive</h3><p>${directiveText.textContent}</p>`;

    const html = `<!doctype html><html><head><meta charset="utf-8"><title>${title}</title><meta name="viewport" content="width=device-width,initial-scale=1"><style>body{font-family:Arial,Helvetica,sans-serif;margin:20px;color:#111}hr{border:none;border-top:1px solid #eee;margin:14px 0}</style></head><body>${body}</body></html>`;
    return html;
  }
  QUESTIONS.forEach((q,idx)=>{
    const chosen = answers[idx];
    const letter = ['A','B','C','D'][chosen] || '?';
    const data = RESULTS[q.id][letter] || {};
    s += `${q.title}: ${data.title || 'Unknown'} - ${data.desc || ''}\n`;
  });
  s += `\nDirective: ${directiveText.textContent}`;
  return s;
}

// accessibility: allow keyboard
document.addEventListener('keydown', (e)=>{
  if(quizScreen.classList.contains('hidden')) return;
  if(e.key==='ArrowRight') nextBtn.click();
  if(e.key==='ArrowLeft') prevBtn.click();
});
